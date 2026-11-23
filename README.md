# dsh-stay-calm

<p align="center">
  <img src="assets/whale-girl-avatar.png" alt="dsh-stay-calm" width="180">
</p>

模型没达到预期时，别急着在对话框里发火，先停一停再继续。

![dsh-stay-calm 在 DSH Web 界面中](https://raw.githubusercontent.com/hosinonisiki/dsh-stay-calm/main/assets/screenshots/main.png)

## 它解决什么问题

模型表现不及预期时，人很容易越聊越气，忍不住反复解释、不断重试，结果不仅没解决问题，反而浪费了更多时间和 token。

这个插件只是页面角落里的一个鲸鱼娘，负责在你情绪快要失控时递上一句提醒，建议先歇会儿或开新对话，它不替你写代码，也不对你指手画脚。

## 特色

- **情绪检查**：按你设定的频率触发，只在气泡里提醒一句，不干涉你的任何操作。默认每 3 轮一次，可以在设置里改成 0 关闭。
- **迷你对话框**：可以夸她，也可以把对模型的不满倒给她；点发送后才会调用模型生成回复。
- **自动闲聊**：每 2–5 分钟随机浮一句，15 条差分，表示她也在努力工作、在和你一起干活；纯本地文案，不调用模型。
- **12 个互动动作**：摸摸头、抱一下、举高高、喂白饭、戳一下、捏脸脸、弹额头、揪耳朵、泼冷水、哭天喊地、使劲摇晃、躺地上发癫。
- **6 种运动模式**：静止、DVD 45°、溜冰场、弹力球、随机游走、桌宠；角色可以拖，位置会记住。

检查气泡没有按钮，也不执行任何操作；它不会替你发消息、开新会话或改设置。

## 环境要求

- DSH `0.2.1-rc.2` 及以上（`engines.dsh` 已声明）。
- Web profile（`dsh web`）；安装后刷新页面即可。
- Node.js 20 及以上。

## 安装

### 从 npm（推荐）

```powershell
dsh plugin --profile web add dsh-stay-calm
```

市场收录后，也可以打开插件页的 **发现 / Discover** 搜索 `dsh-stay-calm`。安装后刷新页面，鲸鱼娘会出现在页面角落。

### 从 GitHub

```powershell
dsh plugin --profile web add github:hosinonisiki/dsh-stay-calm
```

也可以在 DSH 的插件管理器里从本仓库安装。GitHub 安装需要本机有 `git`，且可能触发源码构建确认；npm 安装没有这一步。

仓库地址：https://github.com/hosinonisiki/dsh-stay-calm

## 设置

右上角齿轮里可以：

- 自由填写检查频率：0–999 轮，0 为关闭，默认 3。
- 切换运动模式：静止 / DVD 45° / 溜冰场 / 弹力球 / 随机游走 / 桌宠。

## 简单原理

1. 客户端按当前会话的用户轮次，达到设定间隔后发起一次独立检查。
2. 检查只读取真实用户消息，以及每一轮模型首尾的文字发言；系统消息、工具结果和其他插件插入的消息会跳过。
3. 检查调用不写会话，也不影响主对话；结果只在角色旁边浮一个气泡。
4. 对话框是另一次独立调用；自动闲聊、动作、拖动和运动都不调用模型。

## Token 消耗

- 情绪检查和对话框回复都是真实的额外模型调用，会产生 token 消耗。
- 检查默认每 3 个用户轮次一次；频率越高，消耗越明显。
- 自动闲聊、动作、拖拽、运动和设置都不调用模型。
- 不想产生检查消耗时，把频率设为 0 即可。

## 判定

- 0：平稳。
- 1：有明确的轻微不耐烦。
- 2：明显烦躁。
- 3：已经急了。

正常调试、报 bug、反馈问题、改需求、提新功能都不算烦躁，即使说得短或直也保持 0 级。拿不准时会往低等级判。

## 界面

**情绪检查 · 0 级（平稳）**

![情绪检查 0 级](https://raw.githubusercontent.com/hosinonisiki/dsh-stay-calm/main/assets/screenshots/mood-check-0.png)

**情绪检查 · 3 级（已经急了）**

![情绪检查 3 级](https://raw.githubusercontent.com/hosinonisiki/dsh-stay-calm/main/assets/screenshots/mood-check-3.png)

**互动发言（摸摸头）**

![摸摸头的反应](https://raw.githubusercontent.com/hosinonisiki/dsh-stay-calm/main/assets/screenshots/speech-reaction.png)

## 素材来源

角色图不是自绘原创角色。

- 当前头像：**YunYueSama** 的 DeepSeek Whale-chan 同人图，裁剪为透明胸像；许可为**大肥鱼项目署名许可 1.0**，全文见 [LICENSE-YunYueSama.txt](LICENSE-YunYueSama.txt)。
- 上游角色：**上善无形**（原始角色）、**ZipZipPipe**（DeepSeek 女仆鲸鱼娘二次设计）、**xiaoweigen**（设定整理）。
- 完整署名和再发布注意事项见 [NOTICE.md](NOTICE.md)。
- 物件手势：**Twemoji**（`jdecked/twemoji`，CC BY 4.0），SVG 内联使用。

DeepSeek 名称与商标归其权利人，本项目与 DeepSeek 官方无隶属或背书关系。角色素材按上游许可仅作个人非商业使用；代码部分见 [LICENSE](LICENSE)。
