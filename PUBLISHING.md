# 发布到 npm 与 DSH 插件市场

这份文档记录 `dsh-stay-calm` 的上架步骤。首次发布已经完成；后续发版按第 6 节执行。

## 0. 当前状态（2026-11-24）

- 仓库公开，`main` 分支，创建已超过 1 天。
- `package.json` 已有 `dsh.bundle.patch` + 根目录 `cordis.patch.yml`，满足市场「可安装」的硬性条件。
- npm 已发布 `1.0.0`，`latest` 指向 `1.0.0`；另有一个 `0.0.0-stage` 的 staged-publishing 占位版本，可忽略。
- `engines.dsh`、`engines.node`、`publishConfig`、`author`、`dsh-plugin` 等 keywords、发布前自检脚本均已就位。
- 市场截图 `assets/screenshots/`（总览、情绪检查 0 级、情绪检查 3 级、互动发言）与 `screenshots.json` 已就位。
- GitHub 仓库 About 与 `dsh-plugin` 等 topics 已设置。
- awesome-dsh-plugin PR #18227 已合并，目录源已包含本插件；市场站点等待上游 CI 重建后显示。

## 1. 发布前自检

```powershell
cd C:\Users\hosino\Documents\openclaw\dsh-plugins\dsh-stay-calm
node scripts/preflight.mjs
npm pack --dry-run
```

`preflight` 会检查：包名/版本、`engines.dsh`、`dsh.bundle`、`files` 白名单、locale 中英文标题与简介、许可证与 NOTICE、README/RELEASE_NOTES、`screenshots.json` 的路径与图片、以及源码里是否混入本机绝对路径。

`npm pack --dry-run` 的期望结果：约 12 个文件、体积 < 1 MB，只含运行时代码、`cordis.patch.yml`、`locale/`、图片、README/NOTICE/LICENSE；不含 `scripts/`、`market/`、`node_modules/`、日志。

## 2. 从 tarball 做一次干净安装（发布前）

```powershell
npm pack
dsh plugin --profile scratch add .\dsh-stay-calm-1.0.0.tgz
dsh --profile scratch --dump-config | Select-String "stay-calm"
```

确认配置树里出现 `- id: stay-calm` 后，删除临时 profile：

```powershell
Remove-Item -Recurse -Force "$env:USERPROFILE\.dsh\profiles\scratch"
```

## 3. 发布 npm（首次）

需要 npm 账号，并确保 `hosinonisiki` 对包名 `dsh-stay-calm` 有发布权。

```powershell
npm login
npm whoami
npm publish
```

- `publishConfig.access = public` 已写好，不需要再加 `--access public`。
- `prepublishOnly` 会自动跑一遍 `scripts/preflight.mjs`，检查不过不会发出去。
- 发布后核对：

```powershell
npm view dsh-stay-calm version dsh engines repository
```

若使用 Granular Access Token 而不是浏览器登录，可只给这个包 publish 权限，并通过 `NODE_AUTH_TOKEN` 传入；不要把 token 写进仓库。

## 4. 收录到 dshmarket / awesome-dsh-plugin（主市场）

dshmarket 的列表来自 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)。收录方式是**加一个 YAML 文件并提 PR**，不是上传接口：

1. Fork `awesome-dsh-plugin/awesome-dsh-plugin`。
2. 新建 `data/plugins/hosinonisiki__dsh-stay-calm.yml`，内容直接复制本仓库的 [`market/awesome-dsh-plugin.yml`](market/awesome-dsh-plugin.yml)。
3. 只提交这一个文件；**不要**改对方的 README 或其他条目。
4. PR 标题：`Add hosinonisiki/dsh-stay-calm`。
5. 等 CI 与维护者审核；合并后 dshmarket、`dsh-plugin-catalog` 和 Discover 索引会自动更新。

要求与注意：

- 分类选 `fun`（Just for Fun），与插件实际用途一致。
- 描述必须与代码相符；当前条目已按实际行为写成「每 N 轮一次额外调用、0–3 级、6 种运动、12 个互动、对话框发送才调用」。
- 仓库需要 `dsh-plugin` topic；条目里的 `icon` 使用仓库内的 `icon.png`。
- 市场截图读仓库根目录的 `screenshots.json`（当前按「总览 / 情绪检查 0 级 / 情绪检查 3 级 / 互动」列出 4 张），不需要写进 YAML；以后换图直接 push 本仓库即可。
- npm 发布不是收录必需，但发布后市场能显示下载量，并优先给 npm 一键安装命令。

## 5. 其他曝光入口

- **GitHub 仓库设置**：About 描述写一句「DeepSeek Harness 插件：模型让你烦躁时提醒先冷静的鲸鱼娘」；Topics 加 `dsh-plugin`、`deepseek-harness`、`dsh`、`desktop-pet`、`whale-girl`。
- **deepseekharnessplugins.com**：加上 `dsh-plugin` topic 后会被自动抓取，通常 1–2 天；不需要 PR。
- **dshpluginlist.com / dshmarket 等聚合站**：多数按 `dsh-plugin` topic 自动收录。
- **DSH 内置 Discover**：没有官方「提交入口」；用户可添加自定义索引源（format 1）。dsh-plugin-lab 的市场只收录其组织内仓库，不能直接提交。

可选：如果想给用户一个自己的索引源，可发布后生成 format 1 的 `index.json` 托管在 GitHub Pages，再在 README 里给出索引 URL；这一步不是上架必需。

## 6. 后续发版

1. 修改 `package.json` 的 `version`（如 `1.0.1`）。
2. 更新 `RELEASE_NOTES.md` 顶部版本号。
3. `node scripts/preflight.mjs` → `npm publish`。
4. 打 tag 并推送：`git tag v1.0.1; git push --tags`。

市场条目不需要每次改：它按仓库和 npm 自动读取版本、下载量。只有改简介、分类、图标时才需要回 awesome 仓库更新那一个 YAML。

## 7. 素材与许可

- 代码：MIT（[LICENSE](LICENSE)）。
- 角色图：YunYueSama，**大肥鱼项目署名许可 1.0**，允许复制、分发与再许可，但必须保留作者与仓库署名；全文见 [LICENSE-YunYueSama.txt](LICENSE-YunYueSama.txt)。
- 上游角色公开说明标注 CC BY-NC-SA 4.0；[NOTICE.md](NOTICE.md) 已记录上游署名与使用范围。发布/再分发前请确认素材使用范围仍可接受，且 npm 包内始终保留 `NOTICE.md` 与两份许可文本。
- Twemoji 图标为 CC BY 4.0，已在 NOTICE 中署名。

## 8. 需要账号持有人确认的动作

- [ ] `npm login` 并 `npm publish`
- [ ] 给 GitHub 仓库加 `dsh-plugin` topic 与 About 描述
- [ ] Fork 并向 awesome-dsh-plugin 提交 PR
- [ ] 可选：在 DSH 社区/讨论区介绍插件
