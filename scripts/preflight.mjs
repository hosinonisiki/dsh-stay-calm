#!/usr/bin/env node
/**
 * Pre-publish checks for dsh-stay-calm.
 *
 * Runs with Node built-ins only: `npm publish` calls this through
 * prepublishOnly, so it must work in a clean checkout without installs.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const problems = []
const notes = []

function fail(message) {
  problems.push(message)
}

function readJson(relative) {
  const path = join(root, relative)
  if (!existsSync(path)) {
    fail(`missing ${relative}`)
    return undefined
  }
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch (error) {
    fail(`${relative} is not valid JSON: ${error.message}`)
    return undefined
  }
}

function readText(relative) {
  const path = join(root, relative)
  if (!existsSync(path)) {
    fail(`missing ${relative}`)
    return ''
  }
  return readFileSync(path, 'utf8')
}

/** Expand one `files` entry, which may be an exact path or `dir/*.ext`. */
function expand(entry) {
  if (!entry.includes('*')) return [entry]
  const slash = entry.lastIndexOf('/')
  const dir = slash === -1 ? '.' : entry.slice(0, slash)
  const pattern = entry.slice(slash + 1)
  const source = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
  const matcher = new RegExp(`^${source}$`)
  if (!existsSync(join(root, dir))) return []
  return readdirSync(join(root, dir)).filter((name) => matcher.test(name)).map((name) => `${dir}/${name}`)
}

const pkg = readJson('package.json')
if (pkg) {
  if (pkg.name !== 'dsh-stay-calm') fail(`unexpected package name ${JSON.stringify(pkg.name)}`)
  if (pkg.private === true) fail('package.json still has "private": true')
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(pkg.version)) fail(`version ${JSON.stringify(pkg.version)} is not exact SemVer`)
  if (!pkg.description?.trim()) fail('description is empty')
  if (!pkg.license) fail('license is empty')

  const engines = pkg.engines ?? {}
  if (!engines.dsh) fail('engines.dsh is missing; DSH cannot judge compatibility without it')
  else if (typeof engines.dsh !== 'string' || engines.dsh.includes('workspace:')) fail('engines.dsh must be a published SemVer range')
  if (!engines.node) fail('engines.node is missing')

  if (!pkg.dsh?.bundle?.patch) fail('dsh.bundle.patch is missing; the package would not be installable as a bundle')
  else {
    const patch = readText(pkg.dsh.bundle.patch.replace(/^\.\//, ''))
    if (!patch.includes(pkg.name)) fail(`${pkg.dsh.bundle.patch} does not reference ${pkg.name}`)
  }
  if (pkg.dsh?.client?.platform !== 'web') fail('dsh.client.platform must be "web"')

  if (!Array.isArray(pkg.files) || pkg.files.length === 0) fail('files whitelist is missing')
  else {
    let matched = 0
    for (const entry of pkg.files) {
      const paths = expand(entry)
      if (paths.length === 0) fail(`files entry ${JSON.stringify(entry)} matches nothing`)
      for (const relative of paths) {
        matched += 1
        if (!statSync(join(root, relative)).isFile()) fail(`${relative} is not a file`)
      }
    }
    notes.push(`${matched} packaged files`)
  }

  for (const [key, relative] of Object.entries(pkg.exports ?? {})) {
    if (key.includes('*')) continue
    if (!existsSync(join(root, relative))) fail(`exports[${key}] points at missing ${relative}`)
  }

  // The npm page and the market both read these two files.
  for (const language of ['en', 'zh']) {
    const locale = readJson(`locale/${language}.json`)
    if (!locale) continue
    if (!locale.meta?.title?.trim()) fail(`locale/${language}.json meta.title is empty`)
    if (!locale.meta?.description?.trim()) fail(`locale/${language}.json meta.description is empty`)
  }

  for (const required of ['LICENSE', 'NOTICE.md', 'README.md', 'icon.png']) {
    if (!existsSync(join(root, required))) fail(`missing ${required}`)
  }

  // Storefront screenshots are declared in the repository, next to package.json.
  if (existsSync(join(root, 'screenshots.json'))) {
    const shots = readJson('screenshots.json')
    const list = Array.isArray(shots) ? shots : shots?.screenshots
    if (!Array.isArray(list) || list.length < 1 || list.length > 8) {
      fail('screenshots.json must list 1-8 images')
    } else {
      for (const entry of list) {
        if (typeof entry !== 'string') {
          fail('screenshots.json entries must be strings')
          continue
        }
        if (/^https:\/\//.test(entry)) continue
        if (entry.startsWith('/') || entry.split('/').includes('..')) {
          fail(`screenshot ${entry} must stay inside the repository`)
          continue
        }
        if (!/\.(?:png|jpe?g|webp)$/i.test(entry)) fail(`screenshot ${entry} must be png, jpg, jpeg or webp`)
        if (!existsSync(join(root, entry))) fail(`missing screenshot ${entry}`)
      }
      notes.push(`${list.length} market screenshots`)
    }
  }

  const release = readText('RELEASE_NOTES.md')
  if (release && !release.includes(`dsh-stay-calm ${pkg.version}`)) {
    fail(`RELEASE_NOTES.md does not mention version ${pkg.version}`)
  }

  // A published bundle must not carry paths from the development machine.
  for (const relative of ['index.js', 'client.js']) {
    const source = readText(relative)
    const leaks = [
      /[A-Za-z]:\\\\/,
      /\/Users\/[^/\s]+/,
      /file:\/\/\//,
      /C:\\Users\\/,
    ].filter((pattern) => pattern.test(source))
    if (leaks.length > 0) fail(`${relative} contains a local or absolute path`)
  }

  if (problems.length === 0) {
    console.log(`preflight: ${pkg.name}@${pkg.version} is ready`)
    for (const note of notes) console.log(`  - ${note}`)
  }
}

if (problems.length > 0) {
  console.error('preflight: package is not ready to publish')
  for (const problem of problems) console.error(`  - ${problem}`)
  process.exit(1)
}
