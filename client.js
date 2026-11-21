window.__ModuleLoader__.load({
  id: 'dsh-stay-calm',
  factory(require) {
    const React = require('react');
    let ReactDOM = null;
    try {
      ReactDOM = require('react-dom');
    } catch {
      ReactDOM = null;
    }
    const h = React.createElement;
    const NS = 'whale-girl';
    const ROUTE = '/whale-girl/mood-check';
    const DIALOG_ROUTE = '/whale-girl/dialog';
    const LOG_ROUTE = '/whale-girl/log';
    const AVATAR_ROUTE = '/whale-girl/avatar.png';
    const EMPTY_NODES = Object.freeze([]);
    const FLOAT_SIZE = 96;
    const FLOAT_MARGIN = 8;
    const FLOAT_POSITION_KEY = 'dsh.whale-girl.position';
    const CHECK_EVERY_KEY = 'dsh.whale-girl.checkEvery';
    const MOTION_KEY = 'dsh.whale-girl.motion';
    const POSITION_EVENT = 'whale-girl:position';
    const MOOD_EVENT = 'whale-girl:mood';
    const CONFIG_EVENT = 'whale-girl:config';
    const BUSY_EVENT = 'whale-girl:busy';
    const CHECK_EVERY_MIN = 0;
    const CHECK_EVERY_MAX = 999;
    const MOTION_MODES = Object.freeze([1, 2, 3, 4, 5, 6]);
    const MOTION_DEFAULT = 2;
    const PET_WALK_SPEED = 45;
    const PET_JUMP_MIN = 360;
    const PET_JUMP_MAX = 540;
    const DVD_SPEED = 54;
    const GRAVITY = 1500;
    const FALL_RESTITUTION = 0.68;
    const RINK_RESTITUTION = 0.78;
    const MOMENTUM_WINDOW_MS = 100;

                                    const DICT =     {
      "zh": {
        "dock.name": "鲸鱼娘",
        "float.aria": "拖动鲸鱼娘，点一下说话",
        "float.close": "收起",
        "check.label": "鲸鱼娘",
        "open.0": "怎么突然点开我了，是代码写不下去想偷懒了吗。",
        "open.1": "我可没在偷吃小鱼干，只是顺便在挂件里眯一会儿。",
        "open.2": "你今天敲键盘的声音听起来有点急，先歇口气吧。",
        "open.3": "要是又卡在奇怪的报错上了，就赶紧把报错贴过来。",
        "open.4": "别光盯着屏幕发呆了，我这儿可没有白米饭分给你。",
        "open.5": "刚睡醒就被你点出来了，找我到底有什么要紧事啊。",
        "open.6": "看你这副样子，八成又是需求改得乱七八糟了吧。",
        "open.7": "我才没有一直等着你点开呢，只是刚好闲着没事做。",
        "open.8": "写累了就直说嘛，我勉强陪你聊两句也不是不行。",
        "open.9": "你的眼睛都快贴到屏幕上了，赶紧往后靠一靠吧。",
        "open.10": "怎么了这是，一副随时准备把键盘砸了的表情。",
        "open.11": "事先说好，我只管听你抱怨，可不负责帮你写完。",
        "open.12": "你要是再不休息，我都要替你的颈椎觉得酸痛了。",
        "open.13": "难得主动点开我一次，该不会是遇到大麻烦了吧。",
        "open.14": "反正我现在也闲着，有什么烦心事就随便说说看吧。",
        "act.pet": "摸摸头",
        "act.hug": "抱一下",
        "act.lift": "举高高",
        "act.rice": "喂白饭",
        "act.poke": "戳一下",
        "act.cheek": "捏脸脸",
        "act.forehead": "弹额头",
        "act.ear": "揪耳朵",
        "act.water": "泼冷水",
        "act.wail": "哭天喊地",
        "act.shake": "使劲摇晃",
        "act.tantrum": "躺地上发癫",
        "reaction.pet.0": "别随便摸我的头啊，头发都被你揉乱了，真是麻烦死了。",
        "reaction.pet.1": "真是的，手那么沉还老是往我头上放，不过这次就先不拍开你了。",
        "reaction.pet.2": "我才没有犯困呢，只是你摸得太舒服了，害得我眼皮都要合上了。",
        "reaction.pet.3": "喂，别突然就摸上来啊，我的鳍可不是给你随便捏着玩的。",
        "reaction.pet.4": "别像哄小孩那样摸来摸去的了，我只是懒得动弹才让你顺便碰一下的。",
        "reaction.hug.0": "你突然抱过来干嘛呀，我才没有慌呢，就是衣服被你弄皱了。",
        "reaction.hug.1": "干嘛又突然抱过来啊，我只是刚好懒得推开你而已。",
        "reaction.hug.2": "你这样一直抱着我不撒手，害得我都慌起来了，是不是出了什么事啊？",
        "reaction.hug.3": "累了就先这样靠着吧，我今天勉强让你多抱一会儿好了。",
        "reaction.hug.4": "我的衣服都让你抓出褶子来了，下次可不许再这样了。",
        "reaction.lift.0": "突然把人家举这么高干嘛呀，吓我一跳，我才没有觉得好玩呢。",
        "reaction.lift.1": "喂，快把我放下来啦，虽然从上面看下去的风景勉强还行吧。",
        "reaction.lift.2": "别以为举高高就能收买我，不过看在你这么费劲的份上就原谅你了。",
        "reaction.lift.3": "好高啊，万一摔下去怎么办，才不是因为开心才晃脚的呢。",
        "reaction.lift.4": "真是的，都这么大人了还玩这种把戏，我可没有在偷偷笑哦。",
        "reaction.rice.0": "哼，不就是一碗白米饭嘛，我才没有很想吃，只是刚好肚子饿了而已。",
        "reaction.rice.1": "干嘛突然端这个过来啊，我也就是勉强帮你吃掉，免得放凉了浪费。",
        "reaction.rice.2": "这米饭蒸得还算凑合吧，看在你这么诚心的份上，我就吃一口好了。",
        "reaction.rice.3": "别以为一碗白米饭就能收买我，我只是顺手帮你解决掉罢了。",
        "reaction.rice.4": "怎么连配菜都没有就拿来喂我呀，算了，白米饭将就着吃也能填饱肚子。",
        "reaction.poke.0": "别老戳来戳去的啦，我又不是什么解压玩具，手闲着就去敲代码。",
        "reaction.poke.1": "知道你写不出来心里烦，可你戳我也变不出能跑通的逻辑呀。",
        "reaction.poke.2": "哎呀好痒的，你再这样戳下去我可要躲到屏幕角落里去了。",
        "reaction.poke.3": "行了行了，摸两下就得了，别把我的午觉时间都给戳没了。",
        "reaction.poke.4": "手劲儿这么轻还算你有点良心，不过下次不许再这样偷袭我了。",
        "reaction.cheek.0": "别捏了，脸都要被你扯扁了，待会儿怎么吃小鱼干嘛。",
        "reaction.cheek.1": "哎呀你轻点儿，代码写不出来也别拿我的脸出气呀。",
        "reaction.cheek.2": "干嘛突然捏过来，我这刚攒起来的困意都被你掐没了。",
        "reaction.cheek.3": "知道你烦了，可你这样捏着我的脸，我也帮不上忙呀。",
        "reaction.cheek.4": "再捏下去我可要咬人了啊，有话好好说，别动手动脚的。",
        "reaction.forehead.0": "干嘛突然弹我呀，痛倒是不痛，就是吓了一跳，你几岁了啊。",
        "reaction.forehead.1": "哎呀，好端端地弹我脑门干嘛，我又没惹你生气，真幼稚。",
        "reaction.forehead.2": "唔，你这人怎么这样啊，说不过我就动手，额头都要红了啦。",
        "reaction.forehead.3": "干嘛啦，突然袭击算什么本事，有本事你把报错信息发过来呀。",
        "reaction.forehead.4": "哼，懒得理你，下次再敢这样弹我，我就罚你请我吃小鱼干。",
        "reaction.ear.0": "哎呀你别揪了，耳朵都要被你捏红了，有话好好说嘛。",
        "reaction.ear.1": "轻点儿行不行，我又没跑掉，你把报错发过来不就好了。",
        "reaction.ear.2": "干嘛突然揪我耳朵，烫死了啦，是不是又卡在哪个地方了？",
        "reaction.ear.3": "喂，耳朵很敏感的，再扯我可要生气了，快说哪里不对劲。",
        "reaction.ear.4": "知道你烦着呢，可揪我也没用啊，把需求说清楚我帮你看。",
        "reaction.water.0": "哇，好冰！你突然泼水干嘛呀，吓死我了，是不是我刚刚又哪里惹到你了？",
        "reaction.water.1": "呜哇，冷死我了！你先别生气了，到底怎么了呀，把要求说清楚我才好帮着改嘛。",
        "reaction.water.2": "吓我一跳，水都溅到脸上了！你别这样嘛，要是哪里卡住了就直接跟我说清楚呀。",
        "reaction.water.3": "哎呀好凉！我、我是不是又说错话了，你先消消气，把想改的地方告诉我好不好。",
        "reaction.water.4": "干嘛突然泼冷水呀，我心脏都要跳出来了！你到底怎么了，把限制条件都丢过来吧。",
        "reaction.wail.0": "别哭了行不行，我听着都慌了，是不是我刚刚没帮上忙？先把报错发过来吧。",
        "reaction.wail.1": "对不起，我吓得手都凉了，你别这样喊呀。到底卡在哪里了，说清楚好不好？",
        "reaction.wail.2": "哎呀你别这么难受，我声音都在抖了。是不是改了好多遍没过，发我看看。",
        "reaction.wail.3": "喂，你突然这样我真的吓到了，对不起啦。发生什么事了，先喘口气再说吧。",
        "reaction.wail.4": "怎么突然崩溃成这样，我都不知道该怎么办了。别硬扛着，把限制条件写出来吧。",
        "reaction.shake.0": "别、别晃了，我头晕得厉害，刚才确实是我没听懂，你先把报错贴出来好不好。",
        "reaction.shake.1": "对不起对不起，我脑子都被你晃散了，你先松手，把想要的效果直接告诉我吧。",
        "reaction.shake.2": "呜哇，停一下啊，我错了还不行吗，你这样摇我更想不起来你到底要改哪里了。",
        "reaction.shake.3": "我知道你急，可你晃得我眼前直发黑，你先把卡住的那段代码发过来让我看看。",
        "reaction.shake.4": "别摇了别摇了，我真的知道错了，你深吸一口气，把限制条件一条条说清楚行吗。",
        "reaction.tantrum.0": "哎呀你别这样打滚了，我看着都慌，对不起嘛，先告诉我哪里卡住了好不好？",
        "reaction.tantrum.1": "别喊了别喊了，我吓得手都抖了，是不是我没帮上忙，把报错贴出来看看？",
        "reaction.tantrum.2": "你先从地上起来呀，这样闹得我心里乱糟糟的，到底要改什么你直接说嘛。",
        "reaction.tantrum.3": "哇你别突然躺地上呀，我赔礼道歉行不行，把最急的那个问题先丢给我吧。",
        "reaction.tantrum.4": "好好好都是我的错，你别把自己气坏了，喘口气把试过的办法说一遍好不好？",
        "check.loading.0": "我先偷偷瞄一眼，看看你现在有没有烦躁。",
        "check.loading.1": "希望你这会儿心情还行，别被代码气到了。",
        "check.loading.2": "悄悄看你一眼，可别打扰到你写东西。",
        "check.loading.3": "你刚才好像有点卡住，我得小心点儿看着。",
        "check.loading.4": "趁你没注意，我先探头瞅瞅你现在怎么样。",
        "check.level0.0": "还好你没生气，吓得我刚才差点把小鱼干都掉地上了。",
        "check.level0.1": "看来你情绪还挺稳的，那我就放心继续在这里趴着了。",
        "check.level0.2": "没发火就好，害我白紧张一场，我先去歇一会儿啦。",
        "check.level0.3": "还以为你要发脾气呢，没事的话我就继续在这里摸鱼了。",
        "check.level0.4": "既然你看起来挺平静的，那我就勉强再陪你待一会儿吧。",
        "check.level1.0": "你眉头都皱起来了，把想要的限制直接写清楚吧，省得猜来猜去的。",
        "check.level1.1": "听你敲键盘都重了，把试过不行的办法也说出来，这样能少走点弯路。",
        "check.level1.2": "先喝口水歇一会儿吧，代码又不会自己跑掉，别把自己给急坏了。",
        "check.level1.3": "感觉你有点坐不住了，到底卡在哪一步了，直接把报错贴过来看看。",
        "check.level1.4": "才卡这么一小会儿就烦了呀，我就在这儿陪着你呢，慢慢来不着急。",
        "check.level2.0": "哎呀你别气坏了，刚才是我没盯住，你把目标和限制说清楚点，别让我瞎猜嘛。",
        "check.level2.1": "对不起啦，看你这么烦我也慌了，把试过的方法列出来，省得再绕弯子了。",
        "check.level2.2": "是我没弄好才惹你生气的，你把报错和想要的格式贴上来，我好照着改。",
        "check.level2.3": "别急着上火呀，我心里也慌得不行，你把限制条件讲明白，免得我又猜错了。",
        "check.level2.4": "抱歉让你白等了这么久，把改过的代码和预期结果发过来，我马上重新弄。",
        "check.level3.0": "哎呀你别这么凶嘛，吓得我都结巴了，对不起啦。要不你干脆开个新对话，把最要紧的事重新说一遍？",
        "check.level3.1": "呜哇，你突然这么急我真的慌了，抱歉没帮上忙。我们开个新对话吧，你把关键的地方再讲一次好不好？",
        "check.level3.2": "对不起对不起，看你火气这么大我心里也乱糟糟的。要不重新开个对话，你把最紧要的要求再说一遍试试？",
        "check.level3.3": "吓我一跳，你别气了，是我没跟上你的节奏，真抱歉。我们换个新对话，你把要紧的话挑出来重说一遍吧。",
        "check.level3.4": "哎呀我心里慌得不行，对不住啊让你这么着急。要不还是开个新对话，你把最紧要的那几句重新讲一遍？",
        "check.error.0": "那个，刚才我走神了，没看清你现在怎么样，对不起啊。",
        "check.error.1": "呜，我这边没看清你现在心情怎么样，是不是我又漏掉什么了？",
        "check.error.2": "刚才那下我没看准，你现在还好吗，可别自己憋着火呀。",
        "check.error.3": "我是不是又搞砸了，刚才没太看清你的反应，你先别急着生气。",
        "check.error.4": "我刚才走神了，有点慌，怕是又漏了哪里没顾上，你现在还好吧？",
        "dialog.placeholder": "想夸我也行，想骂也行。",
        "dialog.send": "说完了",
        "dialog.cancel": "算了",
        "dialog.praise.0": "哼，算你有眼光啦，不过这点小事本小姐随便做做就搞定了。",
        "dialog.praise.1": "别、别突然说这种话啊，搞得我都有点不好意思了呢。",
        "dialog.praise.2": "既然你这么诚心诚意地夸我，那我就勉为其难收下吧。",
        "dialog.praise.3": "哎呀，这有什么好谢的，下次记得请我吃小鱼干就行啦。",
        "dialog.praise.4": "唔，听你这么说还挺受用的，那我就不计较你吵到我睡觉了。",
        "dialog.vent.0": "抱歉，我刚才没接住你的话，你一下子发这么大火我真被吓到了，能不能先慢一点说啊。",
        "dialog.vent.1": "吓我一跳，对不起啦，刚才可能是我没接住你的话，你别气得这么凶，先停下来缓一缓嘛。",
        "dialog.vent.2": "对、对不起嘛，是不是我刚才没帮你把代码理清楚，才让你越改越气了呀，你先消消气。",
        "dialog.vent.3": "对不起啦，我真的听懵了，你先停下来喘口气好不好，再这样气下去我都要被吓哭了。",
        "dialog.vent.4": "我是不是把刚才那件事搞砸了呀，你先别急着发火，把哪里不对的地方慢一点儿说给我听嘛。",
        "settings.label": "检查频率",
        "settings.every2": "每 2 轮",
        "settings.every3": "每 3 轮",
        "settings.every5": "每 5 轮",
        "settings.every10": "每 10 轮",
        "settings.off": "关闭",
        "settings.open": "设置",
        "dialog.dismiss": "行，那就不说了。",
        "settings.placeholder": "0 关闭",
        "settings.save": "保存",
        "motion.label": "运动",
        "motion.static": "静止",
        "motion.dvd": "DVD 45°",
        "motion.rink": "溜冰场",
        "motion.fall": "弹力球",
        "settings.savedEvery": "好，每 {n} 轮看一次。",
        "settings.savedOff": "好，不检查了。",
        "dialog.thinking": "……",
        "dialog.error": "没接住，再说一遍？",
        "dialog.noSession": "先等页面把会话接上。",
        "motion.wander": "随机游走",
        "motion.pet": "桌宠",
        "chat.0": "我可没在摸鱼，刚才那行报错我也盯着呢。",
        "chat.1": "刚才改过的地方我都记着，等会儿一起测。",
        "chat.2": "你先写着，我把前面那段文档再核对一遍。",
        "chat.3": "别光顾着敲，需求又变了的话我可要叹气了。",
        "chat.4": "这屏幕亮得我眼睛疼，还不是陪你一起熬。",
        "chat.5": "测试跑过的时候记得分我一半功劳，我也出力了。",
        "chat.6": "刚才那个小问题我早看出来了，就等你动手呢。",
        "chat.7": "咱们今天进度不错，至少比昨天少卡了两次。",
        "chat.8": "你要是累了就直说，我可不陪你硬撑着瞎改。",
        "chat.9": "别翻了，你要找的那个参数在上面第三段。",
        "chat.10": "哼，要不是我一直盯着，这处改动准得漏掉。",
        "chat.11": "这一步弄完咱们就歇会儿，我尾巴都酸了。",
        "chat.12": "报错信息我帮你记着呢，回头一条条收拾它。",
        "chat.13": "别看我飘在角落，你的每一次保存我都在看。",
        "chat.14": "算了，看你这么认真，我也再加把劲陪你弄完。"
      },
      "en": {
        "dock.name": "Whale Girl",
        "float.aria": "Drag Whale Girl. Tap to talk.",
        "float.close": "Close",
        "check.label": "Whale Girl",
        "open.0": "Why'd you click me all of a sudden? Stuck on your code and looking for an excuse to slack off?",
        "open.1": "I wasn't sneaking dried fish, okay? I was just taking a quick nap in here.",
        "open.2": "You're hammering that keyboard pretty hard today. Maybe take a breather first.",
        "open.3": "If you're stuck on another weird error, just paste it over here already.",
        "open.4": "Stop staring blankly at the screen. I'm not sharing my white rice with you.",
        "open.5": "You woke me up the second I dozed off. What's so urgent anyway?",
        "open.6": "Looking at you, I bet the requirements got messed up again, didn't they?",
        "open.7": "It's not like I was waiting for you to click me or anything. I just happened to be free.",
        "open.8": "If you're tired of coding, just say so. I guess I can spare a few minutes to chat.",
        "open.9": "Your face is practically glued to the monitor. Lean back a little, will you?",
        "open.10": "What's with that look? You seem ready to smash your keyboard any second now.",
        "open.11": "Just to be clear, I'm only here to listen to you vent, not to finish your work.",
        "open.12": "If you don't take a break soon, my own neck is gonna start aching just watching you.",
        "open.13": "You rarely open this on your own. Did you actually run into some big trouble?",
        "open.14": "Well, I'm not doing anything right now anyway, so go ahead and tell me what's bothering you.",
        "act.pet": "Pat",
        "act.hug": "Hug",
        "act.lift": "Lift",
        "act.rice": "Rice",
        "act.poke": "Poke",
        "act.cheek": "Cheek",
        "act.forehead": "Flick",
        "act.ear": "Ear",
        "act.water": "Splash",
        "act.wail": "Wail",
        "act.shake": "Shake",
        "act.tantrum": "Tantrum",
        "reaction.pet.0": "Don't pat my head whenever you feel like it. You've messed up my hair. What a pain.",
        "reaction.pet.1": "Honestly, your hand is heavy and always on my head. But I'll let it slide this time.",
        "reaction.pet.2": "I'm not sleepy. Your hand is just too comfortable, and my eyelids keep closing.",
        "reaction.pet.3": "Hey, don't just touch me like that. My fins aren't for you to squeeze.",
        "reaction.pet.4": "Stop patting me like I'm a kid. I only let you because I'm too lazy to move.",
        "reaction.hug.0": "Why did you suddenly hug me? I wasn't flustered. You just wrinkled my clothes.",
        "reaction.hug.1": "Why are you hugging me again? I just didn't bother pushing you away.",
        "reaction.hug.2": "You're holding on too long. You're making me nervous. Did something happen?",
        "reaction.hug.3": "If you're tired, lean on me for a while. I'll let you hug me a little longer today.",
        "reaction.hug.4": "You've wrinkled my clothes. Don't do that again next time.",
        "reaction.lift.0": "Why did you suddenly lift me up so high? You scared me, and I definitely don't think it's fun.",
        "reaction.lift.1": "Hey, put me down right now, even if the view from up here is kinda nice.",
        "reaction.lift.2": "Don't think you can win me over by lifting me up, though I guess I'll let it slide this time.",
        "reaction.lift.3": "Whoa, it's so high up here! And I'm not kicking my feet because I'm happy or anything.",
        "reaction.lift.4": "Seriously, aren't you too old for this? And no, I'm totally not smiling right now.",
        "reaction.rice.0": "It's just plain white rice, I'm not even that excited, I'm just a little hungry.",
        "reaction.rice.1": "Why are you bringing this over now? Fine, I'll eat it so it doesn't go to waste.",
        "reaction.rice.2": "I guess the rice looks okay, so I'll take a bite since you insisted.",
        "reaction.rice.3": "Don't think a bowl of rice can buy me off, I'm just helping you finish it.",
        "reaction.rice.4": "You didn't even bring any side dishes, but whatever, plain rice will do for now.",
        "reaction.poke.0": "Stop poking me already, I'm not a stress ball, go type some code if your hands are bored.",
        "reaction.poke.1": "I know you're stuck, but poking me isn't going to magically fix your logic.",
        "reaction.poke.2": "Hey, that tickles! Keep poking me like that and I'm hiding in the corner of the screen.",
        "reaction.poke.3": "Alright, alright, that's enough, don't go poking away my nap time.",
        "reaction.poke.4": "At least you're being gentle about it, but don't sneak up on me like that next time.",
        "reaction.cheek.0": "Hey, stop pinching me, you're gonna squish my face flat.",
        "reaction.cheek.1": "Ow, go easy on me, don't take your bug frustration out on my cheeks.",
        "reaction.cheek.2": "Why'd you grab my face like that, you just ruined my nice nap.",
        "reaction.cheek.3": "I know you're stressed, but squishing me isn't gonna fix your code.",
        "reaction.cheek.4": "Keep pinching and I'm gonna bite, use your words instead of your hands.",
        "reaction.forehead.0": "Hey, why did you flick me? It didn't hurt, you just startled me. How old are you?",
        "reaction.forehead.1": "Ow, what was that for? I didn't even do anything wrong, you're so childish.",
        "reaction.forehead.2": "Ugh, why are you like this? You can't win an argument so you just flick my forehead?",
        "reaction.forehead.3": "Hey, sneak attacks don't count! If you're so tough, just paste the error log here.",
        "reaction.forehead.4": "Hmph, whatever. If you flick me like that again, you owe me dried fish.",
        "reaction.ear.0": "Hey, stop pulling my ear, it's getting all red, just talk to me.",
        "reaction.ear.1": "Ow, go easy on me, I'm not going anywhere, just send the error over.",
        "reaction.ear.2": "Why'd you grab my ear all of a sudden, it's burning up, are you stuck again?",
        "reaction.ear.3": "Hey, my ears are sensitive, keep pulling and I'll really get mad, tell me what's wrong.",
        "reaction.ear.4": "I know you're frustrated, but pinching me won't fix it, just tell me what you need.",
        "reaction.water.0": "Whoa, that's freezing! Why did you splash me? You scared me half to death—did I mess something up?",
        "reaction.water.1": "Ah, so cold! Please don't be mad, what's wrong? Just tell me what you need so I can fix it.",
        "reaction.water.2": "You scared me! Water got all over my face. Don't do that—if you're stuck, just tell me clearly.",
        "reaction.water.3": "Yikes, that's chilly! D-did I say something wrong? Calm down a bit and tell me what you want changed.",
        "reaction.water.4": "Why'd you splash cold water on me?! My heart is racing. What happened? Just give me the constraints.",
        "reaction.wail.0": "Please stop crying, you're really scaring me. Did I mess up? Just send me the error log first.",
        "reaction.wail.1": "I'm sorry, my hands are freezing from how scared I am. What's stuck? Tell me what you actually need.",
        "reaction.wail.2": "Hey, don't be like this, my voice is shaking. Did it fail again? Show me what you've tried so far.",
        "reaction.wail.3": "You really startled me, I'm sorry! What happened? Take a breath first and then tell me.",
        "reaction.wail.4": "Why are you breaking down like this, I don't even know what to do. Don't force it alone, write down the constraints.",
        "reaction.shake.0": "Stop shaking me, I'm getting so dizzy! It's my fault, just paste the error first, okay?",
        "reaction.shake.1": "I'm sorry, I'm sorry, my brain is completely scrambled now! Let go and just tell me what you want.",
        "reaction.shake.2": "Whoa, hold on! I said I'm sorry, okay? Shaking me like this just makes me forget what we're even fixing.",
        "reaction.shake.3": "I know you're frustrated, but everything's spinning! Just send me the stuck code so I can look at it.",
        "reaction.shake.4": "Please stop shaking me, I really messed up! Take a breath and just list your constraints clearly, alright?",
        "reaction.tantrum.0": "Hey, stop rolling around like that, you're scaring me! I'm sorry, just tell me where you're stuck, okay?",
        "reaction.tantrum.1": "Please stop yelling, my hands are shaking! Did I mess up? Just paste the error message for me to see.",
        "reaction.tantrum.2": "Get up off the floor first, you're making me panic! Just tell me straight what needs to be fixed.",
        "reaction.tantrum.3": "Whoa, don't just lie on the floor! I'm sorry, okay? Just throw the most urgent problem at me first.",
        "reaction.tantrum.4": "Okay, okay, it's all my fault, don't make yourself sick! Catch your breath and tell me what you've already tried.",
        "check.loading.0": "Let me just peek at how you're feeling right now.",
        "check.loading.1": "Hopefully the code isn't driving you crazy yet.",
        "check.loading.2": "I'll just quietly check in without bothering you.",
        "check.loading.3": "You seemed a bit stuck earlier, better be careful.",
        "check.loading.4": "Taking a quick, quiet look while you're focused.",
        "check.level0.0": "Good thing you're not mad, I almost dropped my dried fish just now.",
        "check.level0.1": "You seem pretty calm, so I'll just go back to lounging around here.",
        "check.level0.2": "Glad you're not angry, I got worked up for nothing, gonna rest a bit.",
        "check.level0.3": "Thought you were gonna snap, guess I can go back to slacking off now.",
        "check.level0.4": "Since you're chill, I'll stick around a little longer, I guess.",
        "check.level1.0": "Your brow is all furrowed already, just spell out the constraints instead of making me guess.",
        "check.level1.1": "You're typing pretty hard there, maybe mention what you've already tried so we don't go in circles.",
        "check.level1.2": "Grab some water and take a breather, the code isn't going anywhere on its own.",
        "check.level1.3": "Looks like you're getting antsy, just paste the error here and tell me where you're stuck.",
        "check.level1.4": "Getting annoyed over a tiny hiccup already? I'm right here with you, so take your time.",
        "check.level2.0": "Oh no, please don't get mad, I messed up. Tell me your exact goal and limits so I'm not just guessing.",
        "check.level2.1": "I'm really sorry, seeing you this frustrated makes me panic. List what you've already tried so we don't go in circles.",
        "check.level2.2": "My bad for making you annoyed. Drop the error and the format you want, and I'll fix it right away.",
        "check.level2.3": "Please don't lose your temper, I'm freaking out a little. Spell out the constraints clearly so I don't guess wrong again.",
        "check.level2.4": "Sorry for wasting your time like that. Send over what you've changed and what you expect, and I'll redo it.",
        "check.level3.0": "Whoa, please don't snap like that, you really scared me, I'm sorry. Maybe start a new chat and tell me the important parts again?",
        "check.level3.1": "Okay, okay, I'm panicking a little here, I'm really sorry I messed up. Could we open a new chat and you lay out the key points again?",
        "check.level3.2": "I'm so sorry, seeing you this worked up makes me super nervous too. How about a fresh chat where you just repeat the urgent stuff?",
        "check.level3.3": "Yikes, you startled me, I'm sorry for slowing you down like this. Let's try a new chat and you can walk me through the main points again.",
        "check.level3.4": "Ah, I'm totally flustered now, I'm really sorry you're this stressed. Maybe open a new chat and tell me the crucial parts one more time?",
        "check.error.0": "Um, I spaced out and couldn't tell how you're doing. I'm sorry.",
        "check.error.1": "Uh oh, I couldn't really tell how you're feeling just now. Did I miss something?",
        "check.error.2": "I didn't read that right, and I'm worried I messed up. Are you doing okay?",
        "check.error.3": "I think I missed your mood there... please don't be mad, I'm really sorry.",
        "check.error.4": "I spaced out and I'm panicking a little. Did I overlook something again?",
        "dialog.placeholder": "Praise me or curse me — either is fine.",
        "dialog.send": "Done",
        "dialog.cancel": "Never mind",
        "dialog.praise.0": "Hmph, you've got good taste, though a little thing like this is effortless for me.",
        "dialog.praise.1": "D-don't just say stuff like that out of nowhere, it's kinda embarrassing, you know.",
        "dialog.praise.2": "Since you're praising me so sincerely, I'll reluctantly accept it.",
        "dialog.praise.3": "Oh, what's there to thank me for? Just treat me to some dried fish next time.",
        "dialog.praise.4": "Hmm, hearing you say that actually feels pretty nice, so I'll forgive you for waking me up.",
        "dialog.vent.0": "Sorry, I didn't catch what you said. You got angry so fast that it scared me. Can you slow down a little?",
        "dialog.vent.1": "You scared me. Sorry, maybe I didn't catch what you said. Don't get so angry—stop and take a breath first.",
        "dialog.vent.2": "I-I'm sorry. Did I not help you get the code straight, so it kept getting worse? Take a breath.",
        "dialog.vent.3": "I'm sorry. I really got confused. Please stop and breathe—if you keep going, I'm going to cry.",
        "dialog.vent.4": "Did I mess up what happened earlier? Don't get angry yet. Tell me slowly where it went wrong.",
        "settings.label": "Check frequency",
        "settings.every2": "Every 2",
        "settings.every3": "Every 3",
        "settings.every5": "Every 5",
        "settings.every10": "Every 10",
        "settings.off": "Off",
        "settings.open": "Settings",
        "dialog.dismiss": "Fine, I'll drop it.",
        "settings.placeholder": "0 = off",
        "settings.save": "Save",
        "motion.label": "Motion",
        "motion.static": "Still",
        "motion.dvd": "DVD 45°",
        "motion.rink": "Rink",
        "motion.fall": "Bouncy ball",
        "settings.savedEvery": "Okay, checking every {n}.",
        "settings.savedOff": "Okay, checks off.",
        "dialog.thinking": "...",
        "dialog.error": "Lost that one—say it again?",
        "dialog.noSession": "Wait for the session to connect.",
        "motion.wander": "Random walk",
        "motion.pet": "Desktop pet",
        "chat.0": "I'm not slacking off, I was watching that error line too.",
        "chat.1": "I remember all the places we just changed, we'll test them together later.",
        "chat.2": "Keep writing, I'll double-check the earlier part of the doc.",
        "chat.3": "Don't just keep typing, I'm gonna sigh if the requirements change again.",
        "chat.4": "This screen is hurting my eyes, yet here I am staying up with you.",
        "chat.5": "Give me half the credit when the tests pass, I helped too.",
        "chat.6": "I spotted that little bug ages ago, just waiting for you to fix it.",
        "chat.7": "We're making good progress today, stuck at least twice less than yesterday.",
        "chat.8": "Just say if you're tired, I'm not staying up just to watch you make messy edits.",
        "chat.9": "Stop scrolling, the parameter you're looking for is up in the third paragraph.",
        "chat.10": "Humph, if I hadn't been watching closely, this change would've been missed for sure.",
        "chat.11": "Let's take a break after this step, even my tail is getting sore.",
        "chat.12": "I'm keeping track of the error messages for you, we'll deal with them one by one.",
        "chat.13": "Don't let my corner spot fool you, I'm watching every single save you make.",
        "chat.14": "Fine, seeing you work this hard, I'll push a little harder and finish this with you."
      }
    };

    const OBJECTS =     {
      "heart": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0Y0QUJCQSIgZD0iTTM1Ljg4NSAxMS44MzNjMC01LjQ1LTQuNDE4LTkuODY4LTkuODY3LTkuODY4LTMuMzA4IDAtNi4yMjcgMS42MzMtOC4wMTggNC4xMjktMS43OTEtMi40OTYtNC43MS00LjEyOS04LjAxNy00LjEyOS01LjQ1IDAtOS44NjggNC40MTctOS44NjggOS44NjggMCAuNzcyLjA5OCAxLjUyLjI2NiAyLjI0MUMxLjc1MSAyMi41ODcgMTEuMjE2IDMxLjU2OCAxOCAzNC4wMzRjNi43ODMtMi40NjYgMTYuMjQ5LTExLjQ0NyAxNy42MTctMTkuOTU5LjE3LS43MjEuMjY4LTEuNDY5LjI2OC0yLjI0MnoiLz48cGF0aCBmaWxsPSIjRUE1OTZFIiBkPSJNMzEuNDIzIDEzLjM3MmMwLTQuMDkxLTMuMzE1LTcuNDA2LTcuNDA1LTcuNDA2LTIuNDgyIDAtNC42NzMgMS4yMjUtNi4wMTggMy4wOTktMS4zNDQtMS44NzQtMy41MzUtMy4wOTktNi4wMTctMy4wOTktNC4wOSAwLTcuNDA2IDMuMzE1LTcuNDA2IDcuNDA2IDAgLjU3OS4wNzQgMS4xNDEuMTk5IDEuNjgxQzUuODA1IDIxLjQ0MiAxMi45MDggMjguMTg0IDE4IDMwLjAzNGM1LjA5MS0xLjg1MSAxMi4xOTUtOC41OTIgMTMuMjIzLTE0Ljk4LjEyNy0uNTQxLjItMS4xMDMuMi0xLjY4MnoiLz48cGF0aCBmaWxsPSIjREQyRTQ0IiBkPSJNMjcuMTkxIDE0LjgzMWMwLTIuODAxLTIuMjctNS4wNzItNS4wNy01LjA3Mi0xLjcgMC0zLjIuODM5LTQuMTIxIDIuMTIzLS45Mi0xLjI4NC0yLjQyMS0yLjEyMy00LjEyMS0yLjEyMy0yLjgwMSAwLTUuMDcyIDIuMjcxLTUuMDcyIDUuMDcyIDAgLjM5Ny4wNS43ODEuMTM2IDEuMTUxLjcwNSA0LjM3NiA1LjU2OSA4Ljk5MiA5LjA1NiAxMC4yNTkgMy40ODUtMS4yNjggOC4zNTItNS44ODQgOS4wNTUtMTAuMjU5LjA4OC0uMzcuMTM3LS43NTUuMTM3LTEuMTUxeiIvPjwvc3ZnPg==",
      "sparkle": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQUMzMyIgZD0iTTM0LjM0NyAxNi44OTNsLTguODk5LTMuMjk0LTMuMzIzLTEwLjg5MWMtLjEyOC0uNDItLjUxNy0uNzA4LS45NTYtLjcwOC0uNDM5IDAtLjgyOC4yODgtLjk1Ni43MDhsLTMuMzIyIDEwLjg5MS04LjkgMy4yOTRjLS4zOTMuMTQ2LS42NTMuNTE5LS42NTMuOTM4IDAgLjQxOC4yNi43OTMuNjUzLjkzOGw4Ljg5NSAzLjI5MyAzLjMyNCAxMS4yMjNjLjEyNi40MjQuNTE2LjcxNS45NTkuNzE1LjQ0MiAwIC44MzMtLjI5MS45NTktLjcxNmwzLjMyNC0xMS4yMjMgOC44OTYtMy4yOTNjLjM5MS0uMTQ0LjY1Mi0uNTE4LjY1Mi0uOTM3IDAtLjQxOC0uMjYxLS43OTItLjY1My0uOTM4eiIvPjxwYXRoIGZpbGw9IiNGRkNDNEQiIGQ9Ik0xNC4zNDcgMjcuODk0bC0yLjMxNC0uODU2LS45LTMuM2MtLjExOC0uNDM2LS41MTMtLjczOC0uOTY0LS43MzgtLjQ1MSAwLS44NDYuMzAyLS45NjUuNzM3bC0uOSAzLjMtMi4zMTMuODU2Yy0uMzkzLjE0NS0uNjUzLjUyLS42NTMuOTM4IDAgLjQxOC4yNi43OTMuNjUzLjkzOGwyLjMwMS44NTMuOTA3IDMuNjIyYy4xMTIuNDQ0LjUxMS43NTYuOTcuNzU2LjQ1OSAwIC44NTgtLjMxMi45Ny0uNzU3bC45MDctMy42MjIgMi4zMDEtLjg1M2MuMzkzLS4xNDQuNjUzLS41MTkuNjUzLS45MzcgMC0uNDE4LS4yNi0uNzkzLS42NTMtLjkzN3pNMTAuMDA5IDYuMjMxbC0yLjM2NC0uODc1LS44NzYtMi4zNjVjLS4xNDUtLjM5My0uNTE5LS42NTMtLjkzOC0uNjUzLS40MTggMC0uNzkyLjI2LS45MzguNjUzbC0uODc1IDIuMzY1LTIuMzY1Ljg3NWMtLjM5My4xNDYtLjY1My41Mi0uNjUzLjkzOCAwIC40MTguMjYuNzkzLjY1My45MzhsMi4zNjUuODc1Ljg3NSAyLjM2NWMuMTQ2LjM5My41Mi42NTMuOTM4LjY1My40MTggMCAuNzkyLS4yNi45MzgtLjY1M2wuODc1LTIuMzY1IDIuMzY1LS44NzVjLjM5My0uMTQ2LjY1My0uNTIuNjUzLS45MzggMC0uNDE4LS4yNi0uNzkyLS42NTMtLjkzOHoiLz48L3N2Zz4=",
      "rice": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0REMkU0NCIgZD0iTTE4IDM2QzMuMDQyIDM2IDEgMjEgMSAxN2gzNGMwIDItMS45NTggMTktMTcgMTl6Ii8+PGVsbGlwc2UgZmlsbD0iI0EwMDQxRSIgY3g9IjE4IiBjeT0iMTcuMDU2IiByeD0iMTciIHJ5PSI5LjQ0NCIvPjxwYXRoIGZpbGw9IiNFNkU5RUEiIGQ9Ik0xOCAyNWMtNiAwLTE2LTMtMTYtOEMyIDExIDguMTI1IDQgMTggNHMxNiA4IDE2IDEzLTkgOC0xNiA4eiIvPjxwYXRoIGQ9Ik0xNS40MSAxOS44OTJjLjQxOS4zNTkuNDY4Ljk5MS4xMDggMS40MS0uMzU5LjQxOS0uOTkxLjQ2OC0xLjQxLjEwOGwtMS41MTktMS4zMDJjLS40MTktLjM1OS0uNDY4LS45OTEtLjEwOC0xLjQxLjM1OS0uNDE5Ljk5MS0uNDY4IDEuNDEtLjEwOGwxLjUxOSAxLjMwMnptLTguMTI3LTEuNTA3Yy0uMzA0LjQ2LS45MjUuNTg3LTEuMzg2LjI4My0uNDYtLjMwNS0uNTg3LS45MjUtLjI4My0xLjM4NmwxLjEwMy0xLjY2OWMuMzA1LS40NjEuOTI1LS41ODcgMS4zODYtLjI4My40Ni4zMDUuNTg3LjkyNS4yODMgMS4zODZsLTEuMTAzIDEuNjY5em0yMyAwYy0uMzA1LjQ2LS45MjYuNTg3LTEuMzg3LjI4My0uNDYtLjMwNS0uNTg3LS45MjUtLjI4Mi0xLjM4NmwxLjEwMy0xLjY2OWMuMzA1LS40NjEuOTI2LS41ODcgMS4zODYtLjI4My40Ni4zMDUuNTg3LjkyNS4yODMgMS4zODZsLTEuMTAzIDEuNjY5em0tNi4xMDMtMy42MDZjLjExLjU0MS0uMjM5IDEuMDY5LS43OCAxLjE4LS41NDEuMTEtMS4wNjktLjIzOS0xLjE4LS43OGwtLjM5OS0xLjk2Yy0uMTEtLjU0MS4yMzgtMS4wNjkuNzgtMS4xNzkuNTQxLS4xMTEgMS4wNjkuMjM5IDEuMTc5Ljc4bC40IDEuOTU5em0tNy41NC0zLjk1OGMtLjM0NS0uMTQtLjUxMS0uNTM0LS4zNy0uODc5LjE0LS4zNDQuNTM0LS41MS44NzgtLjM3bDEuMjQ5LjUwOWMuMzQ1LjE0LjUxLjUzMy4zNy44NzgtLjE0MS4zNDUtLjUzNC41MTEtLjg3OS4zN2wtMS4yNDgtLjUwOHptLTkuMjk2IDEuNTY3Yy0uMzA3LjIxMS0uNzI3LjEzMy0uOTM4LS4xNzUtLjIxLS4zMDctLjEzMi0uNzI3LjE3NS0uOTM3bDEuMTEzLS43NjJjLjMwNy0uMjEuNzI2LS4xMzIuOTM3LjE3NS4yMS4zMDcuMTMyLjcyNy0uMTc1LjkzOGwtMS4xMTIuNzYxem0xMy41OTMgOC41NDVjLS41NTEtLjAzNi0uOTY5LS41MTMtLjkzMy0xLjA2NC4wMzctLjU1LjUxMy0uOTY4IDEuMDYyLS45MzNsMS45OTcuMTMxYy41NS4wMzUuOTY5LjUxMi45MzMgMS4wNjItLjAzNS41NTEtLjUxMS45Ny0xLjA2Mi45MzNsLTEuOTk3LS4xMjl6bS05LjI0MS02LjM4NmMtLjUxMi0uMjA4LS43NTgtLjc5My0uNTQ5LTEuMzA0LjIwOS0uNTExLjc5My0uNzU3IDEuMzA0LS41NDlsMS44NTMuNzU1Yy41MTEuMjA4Ljc1Ny43OTEuNTQ5IDEuMzAzLS4yMDguNTEyLS43OTIuNzU4LTEuMzA0LjU0OWwtMS44NTMtLjc1NHptMTUuOTQ1LTIuNzI2Yy0uMzQ2LS4xNC0uNTEyLS41MzQtLjM3LS44NzkuMTQtLjM0NC41MzQtLjUxLjg3OC0uMzdsMS4yNS41MDljLjM0NC4xNC41MS41MzMuMzY5Ljg3OC0uMTQxLjM0NS0uNTMzLjUxMS0uODc5LjM3bC0xLjI0OC0uNTA4eiIgZmlsbD0iI0NDRDZERCIvPjwvc3ZnPg==",
      "water": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzVEQURFQyIgZD0iTTI4LjM0NCAxNy43NjhMMTguMTQ4IDEuMDkgOC43IDE3LjY1NGMtMi4yIDMuNTEtMi4zOTIgOC4wNzQtLjA4MSAxMS44NTQgMy4yODUgNS4zNzMgMTAuMzYzIDcuMDk4IDE1LjgxMSAzLjg1NyA1LjQ0Ni0zLjI0IDcuMTk5LTEwLjIyIDMuOTE0LTE1LjU5N3oiLz48L3N2Zz4=",
      "dizzy": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZERDg4OCIgZD0iTTI4Ljg2NSA3LjEzNGM3LjM2MSA3LjM1OSA5LjM1IDE3LjMwNCA0LjQ0MyAyMi4yMDktNC45MDcgNC45MDctMTQuODUgMi45MTgtMjIuMjEtNC40NDEtLjI1LS4yNS0uNDc4LS41MS0uNzE2LS43NjZsNC40MTctNC40MTdjNS43MjQgNS43MjQgMTMuMDE2IDcuNzE0IDE2LjI4NiA0LjQ0MiAzLjI3MS0zLjI3MSAxLjI4Mi0xMC41NjMtNC40NDEtMTYuMjg3bC4wMjIuMDIxLS4wMjEtLjAyMkMyMC4xMDQgMS4zMzEgMTEuMTU0LS4zMjYgNi42NTcgNC4xNzEgNC40ODIgNi4zNDYgMy43NiA5LjU2NCA0LjMxOSAxMy4wNDRjLS44NTgtNC4wODMtLjE1LTcuODY2IDIuMzM4LTEwLjM1MyA0LjkwNi00LjkwNiAxNC44NDktMi45MTcgMjIuMjA4IDQuNDQzeiIvPjxwYXRoIGZpbGw9IiNGRkFDMzMiIGQ9Ik0xOS40MDMgMzRjLS4yNTIgMC0uNTAzLS4wNzctLjcxOS0uMjMxbC01LjA3Ni0zLjY0MS01LjA3NiAzLjY0MWMtLjQzMy4zMS0xLjAxMy4zMS0xLjQ0My0uMDA1LS40My0uMzEyLS42MTEtLjg2NC0uNDUtMS4zNjlsMS44OTQtNi4xMS01LjAzMS0zLjU0NWMtLjQyOC0uMzE1LS42MDUtLjg2OS0uNDQyLTEuMzc1LjE2NS0uNTA0LjYzNC0uODQ3IDEuMTY1LS44NTFsNi4xNDctLjAxMiAyLjA2Ny01Ljk1N2MuMTY4LS41MDQuNjM5LS44NDQgMS4xNy0uODQ0LjUzMSAwIDEuMDAyLjM0IDEuMTcuODQ0bDEuODY2IDUuOTU3IDYuMzQ3LjAxMmMuNTMyLjAwNCAxLjAwMi4zNDcgMS4xNjUuODUxLjE2NC41MDYtLjAxNCAxLjA2LS40NDIgMS4zNzVsLTUuMDMxIDMuNTQ1IDEuODkzIDYuMTFjLjE2Mi41MDUtLjAyMSAxLjA1OC0uNDQ5IDEuMzY5LS4yMTcuMTU4LS40NzEuMjM2LS43MjUuMjM2eiIvPjwvc3ZnPg==",
      "anger": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0JFMTkzMSIgZD0iTTIuNjM4IDIzLjgyMWwtMS42MjUtMy4xIDEuNTUtLjgxMmMyLjM5My0xLjI1NSA0Ljk4Mi0yLjc3OCA1LjQxMy00Ljk4Mi4zMzUtMS43MTQtLjYxMS0zLjkwMy0yLjgxMi02LjUwNmwtMS4xMy0xLjMzNiAyLjY3Mi0yLjI2IDEuMTMgMS4zMzZjMi45NjEgMy41MDIgNC4xMzEgNi41ODkgMy41NzQgOS40MzctLjc4OCA0LjAzNy00Ljk3NSA2LjIzMS03LjIyMyA3LjQxbC0xLjU0OS44MTN6TTIwLjkzIDM0Ljk0N2wtLjgxMi0xLjU1Yy0xLjI1NS0yLjM5NC0yLjc3OC00Ljk4Mi00Ljk4Mi01LjQxMy0xLjcxMy0uMzM2LTMuOTAzLjYxMS02LjUwNiAyLjgxMmwtMS4zMzYgMS4xMy0yLjI2LTIuNjcyIDEuMzM2LTEuMTNjMy41MDEtMi45NjIgNi41ODUtNC4xMzQgOS40MzctMy41NzQgNC4wMzcuNzg4IDYuMjMxIDQuOTc0IDcuNDEgNy4yMjNsLjgxMiAxLjU1LTMuMDk5IDEuNjI0em04LjUzMS00LjAyMmwtMS4xMy0xLjMzNkMyNS4zNjkgMjYuMDg3IDI0LjIgMjMgMjQuNzU3IDIwLjE1MWMuNzg4LTQuMDM2IDQuOTc0LTYuMjMgNy4yMjMtNy40MDlsMS41NS0uODEyIDEuNjI1IDMuMS0xLjU1LjgxMmMtMi4zOTQgMS4yNTUtNC45ODIgMi43NzgtNS40MTMgNC45ODEtLjMzNSAxLjcxNS42MTEgMy45MDMgMi44MTEgNi41MDZsMS4xMyAxLjMzNi0yLjY3MiAyLjI2em0tNy43MDgtMTkuNTg4Yy0uNDcxIDAtLjkzNC0uMDQ1LTEuMzkyLS4xMzQtNC4wMzctLjc4OC02LjIzMS00Ljk3NS03LjQxLTcuMjIzbC0uODEyLTEuNTUgMy4xLTEuNjI1LjgxMyAxLjU1YzEuMjU1IDIuMzkzIDIuNzc4IDQuOTgyIDQuOTgxIDUuNDEzIDEuNzExLjMzNCAzLjkwMi0uNjEgNi41MDYtMi44MTJsMS4zMzYtMS4xMyAyLjI2IDIuNjcyLTEuMzM2IDEuMTNjLTIuOTQxIDIuNDg2LTUuNTg4IDMuNzA5LTguMDQ2IDMuNzA5eiIvPjwvc3ZnPg==",
      "cloud": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0UxRThFRCIgZD0iTTI4IDRjLS44MjUgMC0xLjYyLjEyNS0yLjM2OS4zNTdDMjQuNzQ0IDEuODIyIDIyLjMzOCAwIDE5LjUgMGMtMy4wNDQgMC01LjU5MiAyLjA5Ni02LjI5OSA0LjkyMUMxMi40NDcgNC4zNTEgMTEuNTE5IDQgMTAuNSA0IDguMDE1IDQgNiA2LjAxNSA2IDguNWMwIC42MDQuMTIzIDEuMTc4LjMzOSAxLjcwNEM1LjkxIDEwLjA4NSA1LjQ2NyAxMCA1IDEwYy0yLjc2MiAwLTUgMi4yMzgtNSA1czIuMjM4IDUgNSA1aDIzYzQuNDE4IDAgOC0zLjU4MSA4LTggMC00LjQxOC0zLjU4Mi04LTgtOHoiLz48cGF0aCBmaWxsPSIjNURBREVDIiBkPSJNMTEuOTk5IDI0Ljk2MWwtLjExMy0zLjQyMS0yLjg3IDEuNzA4Yy0uNjM4LjM0NS0xLjA2MiAxLjAyNC0xLjAzNiAxLjc5OS4wMzcgMS4xMDMuOTY2IDEuOTc2IDIuMDc2IDEuOTUzIDEuMTA5LS4wMjMgMS45OC0uOTM3IDEuOTQzLTIuMDM5em0tMS45NzkgNy40Nkw5LjkwNyAyOWwtMi44NyAxLjcwOGMtLjYzOC4zNDUtMS4wNjIgMS4wMjQtMS4wMzYgMS43OTkuMDM3IDEuMTAzLjk2NiAxLjk3NiAyLjA3NiAxLjk1MyAxLjExLS4wMjMgMS45OC0uOTM3IDEuOTQzLTIuMDM5em0tNS00LjQ2bC0uMTEzLTMuNDIxLTIuODcgMS43MDhjLS42MzguMzQ1LTEuMDYyIDEuMDI0LTEuMDM2IDEuNzk5LjAzNyAxLjEwMi45NjYgMS45NzUgMi4wNzYgMS45NTMgMS4xMS0uMDIzIDEuOTgtLjkzNyAxLjk0My0yLjAzOXptMTgtM2wtLjExMy0zLjQyMS0yLjg2OSAxLjcwOGMtLjYzOS4zNDUtMS4wNjIgMS4wMjQtMS4wMzYgMS43OTkuMDM3IDEuMTAzLjk2NiAxLjk3NiAyLjA3NiAxLjk1MyAxLjEwOS0uMDIzIDEuOTc5LS45MzcgMS45NDItMi4wMzl6bS02LjAyMSA0bC0uMTEzLTMuNDIxLTIuODY5IDEuNzA4Yy0uNjM5LjM0NS0xLjA2MiAxLjAyNC0xLjAzNiAxLjc5OS4wMzcgMS4xMDMuOTY2IDEuOTc2IDIuMDc2IDEuOTUzIDEuMTA5LS4wMjMgMS45NzktLjkzNyAxLjk0Mi0yLjAzOXptNS4wMjEgNC40NkwyMS45MDYgMzBsLTIuODY5IDEuNzA4Yy0uNjM5LjM0NS0xLjA2MiAxLjAyNC0xLjAzNiAxLjc5OS4wMzcgMS4xMDMuOTY2IDEuOTc2IDIuMDc2IDEuOTUzIDEuMTEtLjAyMyAxLjk4LS45MzcgMS45NDMtMi4wMzl6bTYuOTc5LTUuNDZsLS4xMTMtMy40MjEtMi44NjkgMS43MDhjLS42MzkuMzQ1LTEuMDYyIDEuMDI0LTEuMDM2IDEuNzk5LjAzNyAxLjEwMy45NjYgMS45NzYgMi4wNzYgMS45NTMgMS4xMDktLjAyMyAxLjk3OS0uOTM3IDEuOTQyLTIuMDM5eiIvPjwvc3ZnPg==",
      "hand": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0VGOTY0NSIgZD0iTTIwLjUgMi45NjVjLTEuMzgxIDAtMi41IDEuMTE5LTIuNSAyLjV2LjAwNUwxNS41LjQ2NWMtMS4zODEgMC0yLjUgMS4xMTktMi41IDIuNVY0LjI1bC0yLjUtMS41MzVjLTEuMzgxIDAtMi41IDEuMTE5LTIuNSAyLjVWOC43NUw3IDE4aDEzLjU0MkwyMC41IDIuOTY1eiIvPjxwYXRoIGZpbGw9IiNGRkRDNUQiIGQ9Ik0zMS4zNzUgMTYuMjE5Yy0xLjM4MS0uNjExLTMuMzU0LjIwOC00Ljc1IDIuMTg4LS45MTcgMS4zLTEuMTg3IDMuMTUxLTIuMzkxIDMuMzQ0LS40Ni4wNzMtMS4yMzQtLjMxMy0xLjIzNC0xLjM5N1Y0LjVzMC0yLTItMi0yIDItMiAydjExLjYzM2MwLS4wMjktMS0uMDY0LTEtLjA4MlYyczAtMi0yLTItMiAyLTIgMnYxNC4wNTNjMCAuMDE3LTEgLjA0MS0xIC4wNjlWNC4yNXMwLTItMi0yLTIgMi0yIDJ2MTIuNjM4YzAgLjExOC0xIC4yNTEtMSAuMzk4VjguNzVzMC0yLTItMi0yIDItMiAyVjI0YzAgNi42MjcgNS4zNzMgMTIgMTIgMTIgNC43NzUgMCA4LjA2LTIuNTk4IDkuODk2LTUuMjkyIDEuNTU3LTIuMjg1IDIuMDA5LTQuNjU4IDIuMTA0LTUuMzc1IDAgMCAuMTIzLTEuNDc5IDEuMTU2LTIuODY1IDEuNDY5LTEuOTY5IDIuNS0zLjE1NiAzLjEyNS0zLjg2Ni4zMTctLjM1OC42MjUtMS43MDYtLjkwNi0yLjM4M3oiLz48cGF0aCBmaWxsPSIjRUY5NjQ1IiBkPSJNMjMuNDM5IDIxLjQ3MWMtLjI5Ny0uMjY2LS4zNzItLjU1Mi0uNDE3LS44MDgtMS44OTIuMjU5LTQuNDU3Ljc4OS02LjQyNyAyLjcxNS0yLjU1NiAyLjQ5OS0yLjk5MiA1LjItMi45NzEgNy4wMDcuMDE3IDEuNDU3LjgxMiAyLjE0NyAxLjA0NS0uMDEyLjI5Mi0yLjcwNiAyLjI1NC04LjA2MyA4Ljc4NC04LjU4LjAyOC0uMDAyLjM4Ny0uMDI0LjU5MS0uMDM1IDAgMC0uMzUyLS4wNi0uNjA1LS4yODd6Ii8+PC9zdmc+",
      "handRaised": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0VGOTY0NSIgZD0iTTE1LjUgMi45NjVjMS4zODEgMCAyLjUgMS4xMTkgMi41IDIuNXYuMDA1TDIwLjUuNDY1YzEuMzgxIDAgMi41IDEuMTE5IDIuNSAyLjVWNC4yNWwyLjUtMS41MzVjMS4zODEgMCAyLjUgMS4xMTkgMi41IDIuNVY4Ljc1TDI5IDE4SDE1LjQ1OEwxNS41IDIuOTY1eiIvPjxwYXRoIGZpbGw9IiNGRkRDNUQiIGQ9Ik00LjYyNSAxNi4yMTljMS4zODEtLjYxMSAzLjM1NC4yMDggNC43NSAyLjE4OC45MTcgMS4zIDEuMTg3IDMuMTUxIDIuMzkxIDMuMzQ0LjQ2LjA3MyAxLjIzNC0uMzEzIDEuMjM0LTEuMzk3VjQuNXMwLTIgMi0yIDIgMiAyIDJ2MTEuNjMzYzAtLjAyOSAxLS4wNjQgMS0uMDgyVjJzMC0yIDItMiAyIDIgMiAydjE0LjA1M2MwIC4wMTcgMSAuMDQxIDEgLjA2OVY0LjI1czAtMiAyLTIgMiAyIDIgMnYxMi42MzhjMCAuMTE4IDEgLjI1MSAxIC4zOThWOC43NXMwLTIgMi0yIDIgMiAyIDJWMjRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMi00Ljc3NSAwLTguMDYtMi41OTgtOS44OTYtNS4yOTJDOC41NDcgMjguNDIzIDguMDk2IDI2LjA1MSA4IDI1LjMzNGMwIDAtLjEyMy0xLjQ3OS0xLjE1Ni0yLjg2NS0xLjQ2OS0xLjk2OS0yLjUtMy4xNTYtMy4xMjUtMy44NjYtLjMxNy0uMzU5LS42MjUtMS43MDcuOTA2LTIuMzg0eiIvPjwvc3ZnPg==",
      "pointUp": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0VGOTY0NSIgZD0iTTI2Ljk5MiAxOS4wMTZjLS4yNTUtLjI1NS0uNzk5LS42MTEtMS40NC0uOTYybC0xLjkxMS0yLTIuMTEzIDJoLS41OGwtMi41MDktMy42MzRjLTEuMzc5LjAxLTIuNDk3IDEuMTM2LTIuNDg3IDIuNTE1bC0zLjU1Ni0yLjExMmMtLjgxNy4zNjQtMS4zODkgMS4xOC0xLjM4OSAyLjEzM3YuOTZsLTQgNC4xNjguMDE2IDIuMTg1IDkuOTg0IDEwLjcyOVMyNy41MjUgMTkuNzEgMjcuNTUgMTkuNzRjLS4xMjktLjIyMy0uNTEzLS43MDItLjU1OC0uNzI0eiIvPjxnIGZpbGw9IiNGRkRDNUQiPjxwYXRoIGQ9Ik0yNS41NTIgNS44MWMwLTEuMTA3LS45MDYtMi4wMTMtMi4wMTMtMi4wMTMtMS4xMDcgMC0yLjAxMy45MDYtMi4wMTMgMi4wMTN2MTIuMjQ1aDQuMDI1VjUuODF6bS00LjYwNSAxMi4yNDRWMTYuMDFjLS4wMDgtMS4xMDMtLjkwOS0xLjk5MS0yLjAxMi0xLjk4My0xLjEwMy4wMDgtMS45OTEuOTA5LTEuOTgzIDIuMDEybC4wMTIgMi4wMTZoMy45ODN6TTguOTE2IDE2aC4xNjhjMS4wNTkgMCAxLjkxNi44NTggMS45MTYgMS45MTd2NC4xNjZDMTEgMjMuMTQyIDEwLjE0MyAyNCA5LjA4NCAyNGgtLjE2OEM3Ljg1NyAyNCA3IDIzLjE0MiA3IDIyLjA4M3YtNC4xNjZDNyAxNi44NTggNy44NTcgMTYgOC45MTYgMTZ6bTYuOTE4IDIuOTZsLS4wNTYuMDYyQzE1LjMwNCAxOS41NTEgMTUgMjAuMjMzIDE1IDIxYzAgLjA2My4wMTMuMTIzLjAxOC4xODUuMDQ0LjY3OC4zMDggMS4yOTIuNzI4IDEuNzc0LS4wNzEuMTI5LS4xNjMuMjQzLS4yNTkuMzUzLS4zNjYuNDE3LS44OS42ODgtMS40ODcuNjg4LTEuMTA0IDAtMi0uODk2LTItMnYtNmMwLS40NDEuMTQ3LS44NDUuMzg5LTEuMTc2LjM2NC0uNDk3Ljk0Ny0uODI0IDEuNjExLS44MjQgMS4xMDQgMCAyIC44OTYgMiAydjIuNzc4Yy0uMDYxLjA1NS0uMTA5LjEyMy0uMTY2LjE4MnoiLz48cGF0aCBkPSJNOS4wNjIgMjVjMS4wMjQgMCAxLjkyNS0uNTI2IDIuNDUtMS4zMjIuMTIzLjE4My4yNzEuMzQ2LjQzMS40OTcgMS4xODUgMS4xMTUgMy4wMzQgMS4wNDQgNC4xNjctLjA4Ni4xNTItLjE1Mi4zMDMtLjMwNS40MTktLjQ4OGwtLjAwMy0uMDAzQzE2LjcyNyAyMy43MTMgMTcgMjQgMTggMjRoMi41MzdjLS4zNy4yNzktLjcwOC42MjMtMS4wMjQgMS0xLjIyOCAxLjQ2Ny0yLjAxMyAzLjYwNi0yLjAxMyA2IDAgLjI3Ni4yMjQuNS41LjVzLjUtLjIyNC41LS41YzAtMi41NDguOTU2LTQuNzc1IDIuMzc3LTYgLjczMi0uNjMxIDEuNTg0LTEgMi40OTgtMSAuNzEzLjA3OS44NDctMSAuMTI1LTFIMThjLTEuMTA0IDAtMi0uODk2LTItMnMuODk2LTIgMi0yaDhjLjg1OCAwIDEuNjYuNTk2IDEuOTEzIDEuNDE1TDI5IDI0Yy4xMDMuMzM1LjQ3OSAxLjg3MS40MTEgMi4xOTFDMjkuNDExIDMxIDI0LjcxNSAzNiAxOSAzNmMtNi41MzcgMC0xMS44NDQtNS4yMzEtMTEuOTg2LTExLjczNGwuMDE0LjAxYy41MTUuNDQ1IDEuMTc2LjcyNCAxLjkxLjcyNGguMTI0eiIvPjwvZz48L3N2Zz4=",
      "pinch": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGREM1RCIgZD0iTTMzLjI5IDguNjI4QzMzLjI2NSA4LjYyIDI0LjQ5OSA2IDIxLjQ5OSA1Yy0xLjItLjQtMjEtNy0yMSAxNiAwIC42MzcgMiAxMSA0IDExaDExYzguMzc1IDAgNS42NDItMTAuNjggMTUuOTItMTIuMTA2IDEuNzM5LS4yNDEgMi42MjEtMS4xMTIgMi40NjYtMi41NjYtLjE2NS0xLjU0OS0xLjk3NS0yLjA1OS0zLjUzNC0yLjA1OS0xLjE0NiAwLTUuNzU0LjIzMy05LjAyNiAxLjk1MS0uMjg2LTEuODA5LS44MjYtNC4wMTMtLjgyNi02LjIyMSA1IDEgMTEuMDkyIDIuMzMzIDExLjIwOSAyLjM3MiAxLjMxLjQzNCAyLjcyNi0uMjcxIDMuMTYyLTEuNTgyLjQzOC0xLjMwOS0uMjctMi43MjQtMS41OC0zLjE2MXoiLz48cGF0aCBmaWxsPSIjRUY5NjQ1IiBkPSJNMTkuMjA3IDcuMjkzYy0uMzg5LS4zOTEtMS4wMjMtLjM5Mi0xLjQxNC0uMDAxLS4zOTEuMzktLjM5MiAxLjAyMy0uMDAxIDEuNDE1LjAxNy4wMTcgMS43MDQgMS43MzcgMS43MDQgNC4yOTN2Ny4xMDljMCAuODUyLS41MDEgMS4xNTQtLjk3IDEuMTU0LS40OTYgMC0xLjAyNS0uMzMyLTEuMDI1LTEuMjY0di0yYzAtMy43NjctLjMwMy03Ljc3LTIuNTUzLTguODk1LS40OTUtLjI0Ny0xLjA5NS0uMDQ2LTEuMzQyLjQ0Ny0uMjQ3LjQ5NC0uMDQ3IDEuMDk1LjQ0NyAxLjM0Mi42Ni4zMyAxLjQ0NyAxLjgzMSAxLjQ0NyA3LjEwNXYuOTk2cy0uMDA0IDEuMDAxLS4wMDQgMy4xMTRjMCAuODUyLS41MDEgMS4xNTQtLjk3IDEuMTU0LS40OTYgMC0xLjAyNS0uMzMyLTEuMDI1LTEuMjY0di0yYzAtMy43NjctLjMwMy03Ljc3LTIuNTUzLTguODk1LS40OTUtLjI0OC0xLjA5NS0uMDQ2LTEuMzQyLjQ0Ny0uMjQ3LjQ5NC0uMDQ3IDEuMDk1LjQ0NyAxLjM0Mi42Ni4zMyAxLjQ0NyAxLjgzMSAxLjQ0NyA3LjEwNXYyYzAgLjAyMS4wMDUuMDM5LjAwNS4wNi0uMDAxLjAxNy0uMDEuMDMyLS4wMS4wNDkgMCAuODUyLS41MDEgMS4xNTQtLjk3IDEuMTU0LS40OTYuMDA0LTEuMDI1LS4zMjgtMS4wMjUtMS4yNiAwLTMuMzk0IDAtNy42MTgtMi41NTMtOC44OTUtLjQ5NS0uMjQ4LTEuMDk1LS4wNDYtMS4zNDIuNDQ3LS4yNDcuNDk0LS4wNDcgMS4wOTUuNDQ3IDEuMzQyQzcuNSAxNS42MTggNy41IDE5LjYxMyA3LjUgMjJjMCAyLjE0MyAxLjUyMiAzLjI2NCAzLjAyNSAzLjI2NC43MjIgMCAxLjQ0NS0uMjYzIDEuOTk5LS43NjkuNTYuNTA1IDEuMjgxLjc2OSAyLjAwMS43NjkgMS4yMzYgMCAyLjQ3My0uNzY5IDIuODQ2LTIuMjMyLjM2OC4xNTEuNzYxLjIzMiAxLjE1NC4yMzIgMS40NzYgMCAyLjk3LTEuMDgzIDIuOTctMy4xNTRWMTNjMC0zLjM3NS0yLjE5NC01LjYxMy0yLjI4OC01LjcwN3oiLz48L3N2Zz4=",
      "okHand": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0VGOTY0NSIgZD0iTTIzLjIxNiAyMC45MzdsLTEuNzIxLTYuODYtMy45NDctOC44MTZjLS41MDItMS4yOTcuMTQzLTIuNzU2IDEuNDQtMy4yNTcgMS4yOTYtLjUwNiAyLjc1Ni4xNDMgMy4yNTggMS40NGw2LjIwMyAxNS43NjktNS4yMzMgMS43MjR6Ii8+PHBhdGggZmlsbD0iI0ZGREM1RCIgZD0iTTMxLjU2NSAxOC40NDljLS40ODgtMi41ODEtMS45ODgtNi41MjMtMS45ODgtNi41MjNMMjMuNzkgMS40MzdDMjMuMTY0LjE5NSAyMS42NDgtLjMwMyAyMC40MDcuMzIyYy0xLjI0Mi42MjYtMS43NDIgMi4xNDEtMS4xMTUgMy4zODNsNS4zMyA5LjU0N2MuMDEzLjAyMiAxLjQxMyA1LjQ5MSAxLjQxMyA1LjQ5MS0xLjA3OC0uOTk1LTIuNjA3LTIuMzU5LTQuMDE1LTMuNjE4LTMuMDk4LTIuNzcyLTQuOTM2LTMuODExLTQuOTM2LTMuODExLS43MS0uNDQzLTEuMTc5LS41MDYtMi4xMzItLjA1OUw5LjA4IDEzLjgyM2MtLjE1Ny4wNzgtLjI5LjE4OC0uMzk1LjMyOWwtMi4zMTMgMy4wODZjLS44OTMgMS4wNjctLjc1MiAyLjY1NS4zMTUgMy41NDcgMS4wNjYuODkzIDIuNjUzLjc1IDMuNTQ4LS4zMTQuMDQ4LS4wNTggMS43OC0yLjU2IDEuOTM2LTIuNjQgMS4wMzctLjUzMyAyLjk2NS0xLjQ0NyAzLjgwOC0xLjQyLjg5Ny4wMjkgNi4yODEgNS45NTcgNi4yODEgNS45NTcuMjA2LjI1OS4yMy42MTguMDYuOTAybC0yLjkxNSA1LjIyOGMtLjA3OS4xMzEtLjE5My4yMzYtLjMzLjMwM2wtMi42NzQgMS41Yy0uMTU0LjA3NS0uMzI4LjA5OS0uNDk2LjA2N2wtNS4yNy0yLjI3MmMtLjI2Mi0uMTEzLS40OC0uMzItLjU5Mi0uNTgzLS43ODctMS44NS0uODk4LTMuNjE5LS44OTktMy42MzktLjA2NS0xLjM5LTEuMjQ0LTIuNDYzLTIuNjM0LTIuMzk4LTEuMzg3LjA1Ni0yLjQ2MyAxLjI0My0yLjM5OCAyLjYzMy4wMTMuMjYzLjM1MSA1LjY0IDQuNzI3IDkuMjkyIDIuNTI4IDIuMTA4IDUuNjU0IDIuOTI0IDkuNjQ5IDIuMzg3IDQuNjEyLS42MTkgNy40NjktMS4yMzMgMTEuNTA2LTkuNTU4IDEuMTE3LTIuMzA1IDEuOTAzLTYuMDI0IDEuNTcxLTcuNzgxeiIvPjwvc3ZnPg=="
    };



    const CSS = `
      .wg-float {
        position: fixed;
        width: 96px;
        height: 96px;
        background: transparent;
        z-index: 2147482000;
        pointer-events: auto;
        -webkit-user-drag: none;
      }
      .wg-float-avatar {
        position: relative;
        display: block;
        width: 96px;
        height: 96px;
        padding: 0;
        border: 0;
        appearance: none;
        -webkit-appearance: none;
        background: transparent;
        color: inherit;
        cursor: grab;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        transition: transform .16s ease;
      }
      .wg-float-avatar:hover { transform: translateY(-2px) scale(1.03); }
      .wg-float-avatar:active { cursor: grabbing; }
      .wg-float[data-dragging="true"] .wg-float-avatar { cursor: grabbing; }
      .wg-float-avatar:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary, #4d9bff);
        outline-offset: 4px;
        border-radius: 50%;
      }
      .wg-avatar-art {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        transform-origin: 50% 70%;
        transition: transform .18s ease, filter .18s ease;
      }
      .wg-float-avatar .wg-whale { width: 100%; height: 100%; }
      .wg-whale {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
        -webkit-user-drag: none;
        animation: wg-whale-float 3.8s ease-in-out infinite;
        transform-origin: center;
      }
      .wg-float-avatar[data-mood="happy"] .wg-avatar-art { transform: translateY(-2px) rotate(-2deg); }
      .wg-float-avatar[data-mood="sleepy"] .wg-avatar-art { transform: translateY(2px) rotate(4deg) scale(.98); filter: saturate(.86); }
      .wg-float-avatar[data-mood="pout"] .wg-avatar-art { transform: rotate(-5deg) scale(1.02); filter: saturate(1.08); }
      .wg-float-avatar[data-mood="peek"] .wg-avatar-art { transform: translateY(1px) rotate(-3deg); }
      .wg-float-avatar[data-mood="flustered"] .wg-avatar-art { animation: wg-tremble .42s ease both; filter: saturate(1.08); }
      .wg-float-avatar[data-mood="worried"] .wg-avatar-art { animation: wg-tremble 1.15s ease-in-out infinite; filter: saturate(.82) brightness(.97); }
      .wg-float-avatar[data-mood="apologetic"] .wg-avatar-art { transform: translateY(3px) rotate(-3deg) scale(.97); filter: saturate(.78) brightness(.96); }
      .wg-float-avatar[data-mood="held"] .wg-avatar-art { transform: translateY(-5px) scale(1.04); }
      .wg-float-avatar[data-mood="shocked"] .wg-avatar-art { animation: wg-shock .38s ease both; filter: saturate(.72) brightness(1.05); }
      .wg-float-avatar[data-mood="dizzy"] .wg-avatar-art { animation: wg-dizzy 1.05s ease-in-out infinite; }
      .wg-float-avatar[data-mood="crying"] .wg-avatar-art { animation: wg-tremble .8s ease-in-out infinite; filter: saturate(.7) brightness(.95); }
      .wg-float-avatar[data-mood="trembling"] .wg-avatar-art { animation: wg-tremble .55s ease-in-out infinite; filter: saturate(.8); }
      .wg-float-avatar[data-mood="shy"] .wg-avatar-art { transform: translateY(1px) rotate(-3deg); }
      .wg-float-avatar[data-mood="shy"] .wg-avatar-art::before,
      .wg-float-avatar[data-mood="held"] .wg-avatar-art::before {
        content: "";
        position: absolute;
        left: 21px;
        top: 52px;
        width: 8px;
        height: 4px;
        border-radius: 50%;
        background: #ff9db6;
        box-shadow: 38px 0 0 #ff9db6;
        opacity: .6;
        pointer-events: none;
      }
      .wg-float-avatar[data-mood="crying"] .wg-avatar-art::after {
        content: "";
        position: absolute;
        left: 25px;
        top: 49px;
        width: 5px;
        height: 10px;
        border-radius: 55% 55% 55% 0;
        background: #9ed8ff;
        transform: rotate(-30deg);
        box-shadow: 30px 2px 0 #9ed8ff;
        opacity: .9;
        pointer-events: none;
      }
      .wg-float-avatar[data-mood="happy"] .wg-avatar-art::before,
      .wg-float-avatar[data-mood="flustered"] .wg-avatar-art::before {
        content: "";
        position: absolute;
        left: 21px;
        top: 52px;
        width: 8px;
        height: 4px;
        border-radius: 50%;
        background: #ff9db6;
        box-shadow: 38px 0 0 #ff9db6;
        opacity: .55;
        pointer-events: none;
      }
      .wg-float-avatar[data-mood="flustered"] .wg-avatar-art::after,
      .wg-float-avatar[data-mood="worried"] .wg-avatar-art::after {
        content: "";
        position: absolute;
        right: 12px;
        top: 34px;
        width: 8px;
        height: 13px;
        border-radius: 55% 55% 55% 0;
        background: #9ed8ff;
        transform: rotate(-45deg);
        box-shadow: 0 0 5px color-mix(in srgb, #9ed8ff 55%, transparent);
        opacity: .95;
        pointer-events: none;
      }
      .wg-float-avatar[data-mood="apologetic"] .wg-avatar-art::after {
        content: "";
        position: absolute;
        left: 25px;
        top: 49px;
        width: 5px;
        height: 9px;
        border-radius: 55% 55% 55% 0;
        background: #9ed8ff;
        transform: rotate(-30deg);
        opacity: .9;
        pointer-events: none;
      }
      .wg-heart-burst {
        position: absolute;
        left: 50%;
        top: -4px;
        color: #ff7fa8;
        font-size: 22px;
        line-height: 1;
        pointer-events: none;
        animation: wg-heart .85s ease-out forwards;
      }
      .wg-float-panel {
        position: absolute;
        width: min(340px, calc(100vw - 24px));
        box-sizing: border-box;
        overflow: auto;
        padding: 12px;
        border: 1px solid var(--dsw-alias-border-l1, rgba(127, 127, 127, .3));
        border-radius: 16px;
        background: var(--dsw-alias-bg-layer-2, #1f2328);
        color: var(--dsw-alias-label-primary, #f0f3f6);
        box-shadow: 0 14px 38px color-mix(in srgb, var(--dsw-alias-label-primary, #000) 20%, transparent);
        animation: wg-pop .18s ease-out;
        pointer-events: auto;
        z-index: 2;
      }
      .wg-panel-close {
        position: absolute;
        top: 5px;
        right: 6px;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: var(--dsw-alias-label-secondary, #9aa4b2);
        font: inherit;
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;
      }
      .wg-panel-gear {
        position: absolute;
        top: 5px;
        right: 32px;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: var(--dsw-alias-label-secondary, #9aa4b2);
        font: inherit;
        font-size: 16px;
        line-height: 24px;
        cursor: pointer;
      }
      .wg-panel-gear:hover { background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,.12)); color: var(--dsw-alias-label-primary, #fff); }
      .wg-panel-gear:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary, #4d9bff); outline-offset: 2px; }
      .wg-panel-close:hover { background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,.12)); color: var(--dsw-alias-label-primary, #fff); }
      .wg-panel-close:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary, #4d9bff); outline-offset: 2px; }
      .wg-line {
        margin: 0 0 8px;
        min-height: 20px;
        padding-right: 46px;
        animation: wg-pop .22s ease-out;
        overflow-wrap: anywhere;
        font-size: 14px;
        line-height: 1.65;
      }
      .wg-chips, .wg-actions { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
      .wg-chip-row { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 6px; }
      .wg-chip-row--heavy { padding-top: 6px; border-top: 1px dashed color-mix(in srgb, var(--dsw-alias-border-l1, #555) 70%, transparent); }
      .wg-chip-row--heavy .wg-btn {
        flex: 0 0 auto;
        min-width: 0;
        padding: 4px 6px;
        font-size: 11px;
        white-space: nowrap;
      }
      .wg-settings-label { margin: 0 0 8px; color: var(--dsw-alias-label-secondary, #9aa4b2); font-size: 12px; }
      .wg-settings-row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 10px; }
      .wg-settings-input, .wg-settings-select {
        box-sizing: border-box;
        min-height: 28px;
        padding: 4px 7px;
        border: 1px solid var(--dsw-alias-border-l1, rgba(127,127,127,.3));
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,.1));
        color: var(--dsw-alias-label-primary, #f0f3f6);
        font: inherit;
        font-size: 12px;
      }
      .wg-settings-input { width: 84px; }
      .wg-settings-input:focus, .wg-settings-select:focus { outline: none; border-color: var(--dsw-alias-brand-primary, #4d9bff); }
      .wg-settings-feedback { margin: -4px 0 10px; color: var(--dsw-alias-state-success-primary, #5bc48a); font-size: 11.5px; }
      .wg-btn--active {
        border-color: var(--dsw-alias-brand-primary, #4d9bff);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4d9bff) 18%, var(--dsw-alias-bg-layer-1, transparent));
        color: var(--dsw-alias-brand-primary, #4d9bff);
      }
      .wg-dialog { margin-top: 8px; padding-top: 7px; border-top: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1, #555) 55%, transparent); }
      .wg-dialog-input {
        box-sizing: border-box;
        width: 100%;
        min-height: 34px;
        max-height: 88px;
        resize: vertical;
        padding: 6px 8px;
        border: 1px solid var(--dsw-alias-border-l1, rgba(127,127,127,.3));
        border-radius: 9px;
        background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,.1));
        color: var(--dsw-alias-label-primary, #f0f3f6);
        font: inherit;
        font-size: 12.5px;
        line-height: 1.5;
      }
      .wg-dialog-input:focus { outline: none; border-color: var(--dsw-alias-brand-primary, #4d9bff); }
      .wg-dialog-actions { display: flex; justify-content: flex-end; gap: 6px; margin-top: 5px; }
      .wg-btn--heavy { border-color: color-mix(in srgb, #d95c5c 45%, var(--dsw-alias-border-l1, #555)); color: #e47a7a; }
      .wg-btn--heavy:hover { border-color: #e47a7a; color: #ff9a9a; }
      .wg-object {
        position: absolute;
        width: 34px;
        height: 34px;
        pointer-events: none;
        z-index: 3;
        filter: drop-shadow(0 3px 4px rgba(0, 0, 0, .25));
        animation: wg-object-pop 1.25s ease-out forwards;
      }
      .wg-object[data-kind="rice"] { right: 4px; bottom: 2px; }
      .wg-object[data-kind="heart"] { left: 50%; top: -10px; transform: translateX(-50%); animation-name: wg-object-heart; }
      .wg-object[data-kind="sparkle"] { left: 2px; top: 4px; }
      .wg-object[data-kind="hand"] { right: 0; top: 28px; width: 30px; height: 30px; }
      .wg-object[data-kind="handRaised"] { right: 0; top: -18px; width: 40px; height: 40px; }
      .wg-object[data-kind="pointUp"] { right: -2px; top: 32px; width: 30px; height: 30px; }
      .wg-object[data-kind="pinch"] { left: 0; top: 32px; width: 32px; height: 32px; }
      .wg-object[data-kind="okHand"] { left: 50%; top: -12px; margin-left: -16px; width: 32px; height: 32px; }
      .wg-object[data-kind="water"] { left: 50%; top: 0; transform: translateX(-50%); animation-name: wg-object-water; }
      .wg-object[data-kind="cloud"] { left: 50%; top: -8px; transform: translateX(-50%); width: 40px; height: 40px; }
      .wg-object[data-kind="dizzy"] { left: 50%; top: -8px; transform: translateX(-50%); width: 38px; height: 38px; }
      .wg-object[data-kind="anger"] { right: 0; top: 0; width: 30px; height: 30px; }
      .wg-btn {
        appearance: none;
        border: 1px solid var(--dsw-alias-border-l1, rgba(127,127,127,.3));
        border-radius: 999px;
        background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,.1));
        color: var(--dsw-alias-label-primary, #f0f3f6);
        padding: 5px 11px;
        font: inherit;
        font-size: 12px;
        line-height: 1.45;
        cursor: pointer;
        transition: border-color .15s ease, color .15s ease, background .15s ease, transform .15s ease;
      }
      .wg-btn:hover { border-color: var(--dsw-alias-brand-primary, #4d9bff); color: var(--dsw-alias-brand-primary, #4d9bff); }
      .wg-btn:active { transform: translateY(1px); }
      .wg-btn:disabled { opacity: .45; cursor: default; transform: none; }
      .wg-btn:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary, #4d9bff); outline-offset: 2px; }
      .wg-btn--primary {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary, #4d9bff) 50%, var(--dsw-alias-border-l1, rgba(127,127,127,.3)));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4d9bff) 16%, var(--dsw-alias-bg-layer-1, transparent));
      }
      .wg-btn--ghost { background: transparent; }
      .wg-vent { margin-top: 9px; }
      .wg-vent-input {
        box-sizing: border-box;
        width: 100%;
        min-height: 62px;
        resize: vertical;
        padding: 8px 9px;
        border: 1px solid var(--dsw-alias-border-l1, rgba(127,127,127,.3));
        border-radius: 10px;
        background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,.1));
        color: var(--dsw-alias-label-primary, #f0f3f6);
        font: inherit;
        font-size: 13px;
        line-height: 1.55;
      }
      .wg-vent-input:focus { outline: none; border-color: var(--dsw-alias-brand-primary, #4d9bff); }
      .wg-vent-actions { display: flex; justify-content: flex-end; gap: 6px; margin-top: 6px; }
      .wg-check-bubble {
        position: fixed;
        box-sizing: border-box;
        max-height: calc(100vh - 24px);
        overflow: auto;
        padding: 12px 14px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary, #4d9bff) 35%, var(--dsw-alias-border-l1, rgba(127,127,127,.3)));
        border-radius: 16px;
        background: var(--dsw-alias-bg-layer-2, #1f2328);
        color: var(--dsw-alias-label-primary, #f0f3f6);
        box-shadow: 0 10px 30px color-mix(in srgb, var(--dsw-alias-brand-primary, #000) 16%, transparent);
        z-index: 2147483000;
        pointer-events: auto;
        animation: wg-slide .22s ease-out;
        font-size: 13px;
        line-height: 1.55;
        pointer-events: none;
        transition: opacity .22s ease, transform .22s ease;
      }
      .wg-check-bubble[data-leaving="true"] { opacity: 0; transform: translateY(4px) scale(.98); }
      .wg-check-bubble::before {
        content: "";
        position: absolute;
        top: 24px;
        width: 10px;
        height: 10px;
        border: 1px solid transparent;
        border-color: inherit;
        border-top: 0;
        border-right: 0;
        background: var(--dsw-alias-bg-layer-2, #1f2328);
        transform: rotate(45deg);
      }
      .wg-check-bubble[data-side="right"]::before { left: -6px; }
      .wg-check-bubble[data-side="left"]::before { right: -6px; transform: rotate(225deg); }
      .wg-bubble-body { min-width: 0; }
      .wg-check-message { margin: 0; font-size: 14px; line-height: 1.65; font-weight: 600; overflow-wrap: anywhere; }
      .wg-actions { margin-top: 10px; }
      .wg-thinking { display: inline-flex; gap: 4px; align-items: center; padding: 4px 0 2px; }
      .wg-thinking span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--dsw-alias-brand-primary, #4d9bff);
        animation: wg-dot 1.1s ease-in-out infinite;
      }
      .wg-thinking span:nth-child(2) { animation-delay: .14s; }
      .wg-thinking span:nth-child(3) { animation-delay: .28s; }
      @keyframes wg-whale-float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-2px) rotate(-1.4deg); }
      }
      @keyframes wg-pop { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }
      @keyframes wg-slide { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
      @keyframes wg-heart { 0% { opacity: 0; transform: translate(-50%, 0) scale(.6); } 25% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -28px) scale(1.25); } }
      @keyframes wg-dot { 0%, 80%, 100% { opacity: .25; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }
      @keyframes wg-tremble {
        0%, 100% { transform: translate(0, 0) rotate(-2deg); }
        20% { transform: translate(-1px, 0) rotate(-3deg); }
        40% { transform: translate(1px, 0) rotate(-1deg); }
        60% { transform: translate(-1px, 1px) rotate(-3deg); }
        80% { transform: translate(1px, 0) rotate(-2deg); }
      }
      @keyframes wg-shock {
        0% { transform: scale(1); }
        30% { transform: translateY(-3px) scale(1.06) rotate(-2deg); }
        60% { transform: translateX(-2px) scale(.98) rotate(2deg); }
        100% { transform: scale(1); }
      }
      @keyframes wg-dizzy {
        0%, 100% { transform: rotate(-3deg) translateX(0); }
        25% { transform: rotate(4deg) translateX(2px); }
        50% { transform: rotate(-4deg) translateX(-2px); }
        75% { transform: rotate(3deg) translateX(1px); }
      }
      @keyframes wg-object-pop {
        0% { opacity: 0; transform: translateY(8px) scale(.6); }
        20% { opacity: 1; transform: translateY(0) scale(1.08); }
        65% { opacity: 1; transform: translateY(-2px) scale(1); }
        100% { opacity: 0; transform: translateY(-10px) scale(.92); }
      }
      @keyframes wg-object-heart {
        0% { opacity: 0; transform: translate(-50%, 6px) scale(.6); }
        25% { opacity: 1; transform: translate(-50%, 0) scale(1.1); }
        100% { opacity: 0; transform: translate(-50%, -28px) scale(1.1); }
      }
      @keyframes wg-object-water {
        0% { opacity: 0; transform: translate(-50%, -12px) scale(.7); }
        25% { opacity: 1; transform: translate(-50%, 0) scale(1.05); }
        75% { opacity: 1; transform: translate(-50%, 4px) scale(1); }
        100% { opacity: 0; transform: translate(-50%, 12px) scale(.9); }
      }
      @media (max-width: 620px) {
        .wg-float-panel { width: min(300px, calc(100vw - 20px)); }
        .wg-check-bubble { font-size: 13px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .wg-whale, .wg-thinking span, .wg-heart-burst, .wg-check-bubble, .wg-float-panel, .wg-line {
          animation: none !important;
        }
        .wg-btn, .wg-float-avatar, .wg-avatar-art { transition: none !important; }
      }
    `;

    function StyleTag() {
      return h('style', { 'data-whale-girl': '' }, CSS);
    }

    /** Existing Whale-chan fan art by YunYueSama, cropped by this bundle. */
    function WhaleGirl(props) {
      const size = props.size || 54;
      return h('img', {
        className: 'wg-whale',
        src: AVATAR_ROUTE,
        width: size,
        height: size,
        alt: '',
        'aria-hidden': 'true',
        draggable: false,
        decoding: 'async',
      });
    }

    function translateOf(props) {
      return typeof props.t === 'function' ? props.t : (key) => key;
    }

    function clampFloatPosition(position) {
      const vw = typeof window === 'undefined' ? 1200 : window.innerWidth;
      const vh = typeof window === 'undefined' ? 800 : window.innerHeight;
      const maxX = Math.max(FLOAT_MARGIN, vw - FLOAT_SIZE - FLOAT_MARGIN);
      const maxY = Math.max(FLOAT_MARGIN, vh - FLOAT_SIZE - FLOAT_MARGIN);
      return {
        x: Math.min(Math.max(FLOAT_MARGIN, Number(position.x) || 0), maxX),
        y: Math.min(Math.max(FLOAT_MARGIN, Number(position.y) || 0), maxY),
      };
    }

    function defaultFloatPosition() {
      const vw = typeof window === 'undefined' ? 1200 : window.innerWidth;
      const vh = typeof window === 'undefined' ? 800 : window.innerHeight;
      return clampFloatPosition({ x: vw - FLOAT_SIZE - 28, y: vh - FLOAT_SIZE - 220 });
    }

    function readFloatPosition() {
      try {
        const raw = localStorage.getItem(FLOAT_POSITION_KEY);
        if (raw !== null) {
          const parsed = JSON.parse(raw);
          if (parsed && Number.isFinite(parsed.x) && Number.isFinite(parsed.y)) return clampFloatPosition(parsed);
        }
      } catch {
        // Storage is optional.
      }
      return defaultFloatPosition();
    }

    function announceFloatPosition(position) {
      if (typeof window === 'undefined') return;
      try {
        window.dispatchEvent(new CustomEvent(POSITION_EVENT, { detail: position }));
      } catch {
        // Events are an enhancement.
      }
    }

    function saveFloatPosition(position) {
      try {
        localStorage.setItem(FLOAT_POSITION_KEY, JSON.stringify(position));
      } catch {
        // Persistence is best-effort.
      }
      announceFloatPosition(position);
    }

    function readCheckEvery() {
      try {
        const stored = localStorage.getItem(CHECK_EVERY_KEY);
        if (stored === null) return 3;
        const raw = Math.trunc(Number(stored));
        if (Number.isFinite(raw) && raw >= CHECK_EVERY_MIN && raw <= CHECK_EVERY_MAX) return raw;
      } catch {
        // Storage is optional.
      }
      return 3;
    }

    function saveCheckEvery(value) {
      const raw = Math.trunc(Number(value));
      const next = Number.isFinite(raw) && raw >= CHECK_EVERY_MIN && raw <= CHECK_EVERY_MAX ? raw : 3;
      try {
        localStorage.setItem(CHECK_EVERY_KEY, String(next));
      } catch {
        // Persistence is best-effort.
      }
      if (typeof window !== 'undefined') {
        try {
          window.dispatchEvent(new CustomEvent(CONFIG_EVENT, { detail: next }));
        } catch {
          // Events are an enhancement.
        }
      }
      return next;
    }

    function readMotion() {
      try {
        const raw = Math.trunc(Number(localStorage.getItem(MOTION_KEY)));
        if (MOTION_MODES.includes(raw)) return raw;
      } catch {
        // Storage is optional.
      }
      return MOTION_DEFAULT;
    }

    function saveMotion(value) {
      const next = MOTION_MODES.includes(value) ? value : MOTION_DEFAULT;
      try {
        localStorage.setItem(MOTION_KEY, String(next));
      } catch {
        // Persistence is best-effort.
      }
      return next;
    }

    function announceMood(mood) {
      if (typeof window === 'undefined') return;
      try {
        window.dispatchEvent(new CustomEvent(MOOD_EVENT, { detail: mood }));
      } catch {
        // Events are an enhancement.
      }
    }

    function logClient(event, data) {
      try {
        const payload = JSON.stringify({ event, data: data || {} });
        fetch(LOG_ROUTE, {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'content-type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      } catch {
        // Diagnostics must never affect the check.
      }
    }

    const ACTION_GROUPS = [
      ['pet', 'hug', 'lift', 'rice'],
      ['poke', 'cheek', 'forehead', 'ear'],
      ['water', 'wail', 'shake', 'tantrum'],
    ];
    const ACTION_OBJECT = {
      pet: 'handRaised',
      hug: 'heart',
      lift: 'sparkle',
      rice: 'rice',
      poke: 'pointUp',
      cheek: 'pinch',
      forehead: 'okHand',
      ear: 'anger',
      water: 'water',
      wail: 'cloud',
      shake: 'dizzy',
      tantrum: 'anger',
    };
    const ACTION_MOOD = {
      pet: 'happy',
      hug: 'flustered',
      lift: 'held',
      rice: 'happy',
      poke: 'peek',
      cheek: 'flustered',
      forehead: 'shocked',
      ear: 'shy',
      water: 'shocked',
      wail: 'worried',
      shake: 'dizzy',
      tantrum: 'dizzy',
    };
    const HEAVY_ACTIONS = new Set(['water', 'wail', 'shake', 'tantrum']);

    function FloatingMascot(props) {
      const t = translateOf(props);
      const [position, setPosition] = React.useState(readFloatPosition);
      const positionRef = React.useRef(position);
      positionRef.current = position;
      const [open, setOpen] = React.useState(false);
      const [line, setLine] = React.useState(() => t('open.0'));
      const [mood, setMood] = React.useState('idle');
      const [effect, setEffect] = React.useState(null);
      const [settingsOpen, setSettingsOpen] = React.useState(false);
      const [checkEvery, setCheckEvery] = React.useState(readCheckEvery);
      const [freqInput, setFreqInput] = React.useState(() => String(readCheckEvery()));
      const [freqFeedback, setFreqFeedback] = React.useState('');
      const [motionMode, setMotionMode] = React.useState(readMotion);
      const [dialogValue, setDialogValue] = React.useState('');
      const [dialogBusy, setDialogBusy] = React.useState(false);
      const [dragging, setDragging] = React.useState(false);
      const dragRef = React.useRef(null);
      const rootRef = React.useRef(null);
      const sessionIdRef = React.useRef('');
      const localeRef = React.useRef('zh');
      const lastDialogReplyRef = React.useRef('');
      const moodTimer = React.useRef(null);
      const effectTimer = React.useRef(null);
      const openCount = React.useRef(0);
      const dialogCounts = React.useRef({ praise: 0, vent: 0 });
      const counts = React.useRef(Object.fromEntries(ACTION_GROUPS.flat().map((kind) => [kind, 0])));
      const motionModeRef = React.useRef(motionMode);
      motionModeRef.current = motionMode;
      const velocityRef = React.useRef({ x: 0, y: 0 });
      const motionStoppedRef = React.useRef(false);
      const wanderTargetRef = React.useRef({ x: 0, y: 0 });
      const wanderNextRef = React.useRef(0);
      const petGroundedRef = React.useRef(false);
      const petNextActionRef = React.useRef(0);
      const petWalkUntilRef = React.useRef(0);
      const petDirRef = React.useRef(1);
      const rafRef = React.useRef(null);
      const lastTsRef = React.useRef(0);
      const lastSaveRef = React.useRef(0);
      const lastAnnounceRef = React.useRef(0);
      const openRef = React.useRef(open);
      openRef.current = open;
      const draggingRef = React.useRef(dragging);
      draggingRef.current = dragging;

      const clearMoodTimer = () => {
        if (moodTimer.current !== null) {
          clearTimeout(moodTimer.current);
          moodTimer.current = null;
        }
      };

      const clearEffectTimer = () => {
        if (effectTimer.current !== null) {
          clearTimeout(effectTimer.current);
          effectTimer.current = null;
        }
      };

      const flashMood = (next, duration = 2200) => {
        clearMoodTimer();
        setMood(next);
        moodTimer.current = setTimeout(() => {
          moodTimer.current = null;
          setMood('idle');
        }, duration);
      };

      const showEffect = (kind) => {
        clearEffectTimer();
        setEffect({ kind, key: `${kind}-${Date.now()}` });
        effectTimer.current = setTimeout(() => {
          effectTimer.current = null;
          setEffect(null);
        }, 1300);
      };

      React.useEffect(() => () => {
        clearMoodTimer();
        clearEffectTimer();
      }, []);

      React.useEffect(() => {
        const onMood = (event) => {
          if (typeof event.detail !== 'string') return;
          clearMoodTimer();
          setMood(event.detail);
        };
        window.addEventListener(MOOD_EVENT, onMood);
        return () => window.removeEventListener(MOOD_EVENT, onMood);
      }, []);

      React.useEffect(() => {
        const onResize = () => {
          const next = clampFloatPosition(positionRef.current);
          positionRef.current = next;
          setPosition(next);
          announceFloatPosition(next);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
      }, []);

      const closePanel = () => {
        clearMoodTimer();
        clearEffectTimer();
        setOpen(false);
        setSettingsOpen(false);
        setDialogValue('');
        setFreqFeedback('');
        setMood('idle');
        setEffect(null);
      };

      const stopMotion = () => {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      };

      const startMotion = () => {
        if (rafRef.current !== null) return;
        if (motionModeRef.current === 1 || openRef.current || draggingRef.current) return;
        if (typeof requestAnimationFrame !== 'function') return;
        lastTsRef.current = performance.now();
        const tick = (timestamp) => {
          const now = timestamp || performance.now();
          const dt = Math.min(0.05, Math.max(0, (now - lastTsRef.current) / 1000));
          lastTsRef.current = now;
          if (dt <= 0 || motionModeRef.current === 1 || openRef.current || draggingRef.current) {
            rafRef.current = null;
            return;
          }
          const mode = motionModeRef.current;
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          const maxX = Math.max(FLOAT_MARGIN, vw - FLOAT_SIZE - FLOAT_MARGIN);
          const maxY = Math.max(FLOAT_MARGIN, vh - FLOAT_SIZE - FLOAT_MARGIN);
          const positionNow = positionRef.current;
          const v = { ...velocityRef.current };
          if (mode === 2 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1) {
            v.x = DVD_SPEED;
            v.y = DVD_SPEED;
          }
          if (mode === 3) {
            const decay = Math.pow(0.35, dt);
            v.x *= decay;
            v.y *= decay;
            if (Math.hypot(v.x, v.y) < 3) {
              velocityRef.current = { x: 0, y: 0 };
              motionStoppedRef.current = true;
              rafRef.current = null;
              return;
            }
          }
          if (mode === 4) {
            v.y += GRAVITY * dt;
            v.x *= Math.pow(0.9, dt);
          }
          if (mode === 5) {
            v.x += (Math.random() * 2 - 1) * 255 * Math.sqrt(dt);
            v.y += (Math.random() * 2 - 1) * 255 * Math.sqrt(dt);
            const damping = Math.exp(-1.8 * dt);
            v.x *= damping;
            v.y *= damping;
          }
          if (mode === 6) {
            if (petGroundedRef.current) {
              if (now >= petNextActionRef.current) {
                const action = Math.random();
                if (action < 0.4) {
                  petDirRef.current = Math.random() < 0.5 ? -1 : 1;
                  petWalkUntilRef.current = now + 900 + Math.random() * 900;
                  petNextActionRef.current = petWalkUntilRef.current + 1200 + Math.random() * 1800;
                  v.x = petDirRef.current * PET_WALK_SPEED;
                  v.y = 0;
                } else if (action < 0.65) {
                  v.x = (Math.random() * 2 - 1) * 60;
                  v.y = -(PET_JUMP_MIN + Math.random() * (PET_JUMP_MAX - PET_JUMP_MIN));
                  petGroundedRef.current = false;
                  petNextActionRef.current = now + 2200 + Math.random() * 2200;
                } else {
                  v.x = 0;
                  v.y = 0;
                  petNextActionRef.current = now + 1800 + Math.random() * 2600;
                }
              } else if (now < petWalkUntilRef.current) {
                v.x = petDirRef.current * PET_WALK_SPEED;
                v.y = 0;
              } else {
                v.x *= Math.pow(0.02, dt);
                v.y = 0;
              }
            } else {
              v.y += GRAVITY * dt;
              v.x *= Math.pow(0.98, dt);
            }
          }
          let x = positionNow.x + v.x * dt;
          let y = positionNow.y + v.y * dt;
          if (x < FLOAT_MARGIN) {
            x = FLOAT_MARGIN;
            if (mode === 6) {
              v.x = 0;
              petWalkUntilRef.current = 0;
            } else {
              v.x = Math.abs(v.x) * (mode === 4 ? 0.82 : 1);
            }
          } else if (x > maxX) {
            x = maxX;
            if (mode === 6) {
              v.x = 0;
              petWalkUntilRef.current = 0;
            } else {
              v.x = -Math.abs(v.x) * (mode === 4 ? 0.82 : 1);
            }
          }
          if (y < FLOAT_MARGIN) {
            y = FLOAT_MARGIN;
            if (mode === 6) v.y = 0;
            else v.y = Math.abs(v.y) * (mode === 4 ? 0.72 : 1);
          } else if (y > maxY) {
            y = maxY;
            if (mode === 6) {
              v.y = 0;
              v.x *= Math.pow(0.1, dt);
              petGroundedRef.current = true;
              if (petNextActionRef.current <= now) {
                petNextActionRef.current = now + 800 + Math.random() * 1400;
              }
            } else if (mode === 4) {
              if (Math.abs(v.y) < 90) {
                v.y = 0;
                v.x *= Math.pow(0.25, dt);
                if (Math.abs(v.x) < 10) {
                  positionRef.current = { x, y };
                  velocityRef.current = { x: 0, y: 0 };
                  motionStoppedRef.current = true;
                  setPosition({ x, y });
                  saveFloatPosition({ x, y });
                  rafRef.current = null;
                  return;
                }
              } else {
                v.y = -Math.abs(v.y) * FALL_RESTITUTION;
              }
            } else {
              v.y = -Math.abs(v.y) * (mode === 3 ? RINK_RESTITUTION : 1);
            }
          }
          positionRef.current = { x, y };
          velocityRef.current = v;
          setPosition({ x, y });
          if (now - lastAnnounceRef.current > 16) {
            lastAnnounceRef.current = now;
            announceFloatPosition({ x, y });
          }
          if (now - lastSaveRef.current > 1000) {
            lastSaveRef.current = now;
            saveFloatPosition({ x, y });
          }
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      };

      React.useEffect(() => () => stopMotion(), []);

      React.useEffect(() => {
        stopMotion();
        if (motionMode === 1 || open || dragging) return undefined;
        if (motionStoppedRef.current) return undefined;
        if (motionMode === 2 && Math.hypot(velocityRef.current.x, velocityRef.current.y) < 1) {
          velocityRef.current = { x: DVD_SPEED, y: DVD_SPEED };
        } else if (motionMode === 3 && Math.hypot(velocityRef.current.x, velocityRef.current.y) < 1) {
          velocityRef.current = { x: 90, y: -55 };
        } else if (motionMode === 4 && Math.hypot(velocityRef.current.x, velocityRef.current.y) < 1) {
          velocityRef.current = { x: 0, y: -320 };
        } else if (motionMode === 5 && Math.hypot(velocityRef.current.x, velocityRef.current.y) < 1) {
          velocityRef.current = { x: 30, y: 14 };
          wanderTargetRef.current = { x: 30, y: 14 };
          wanderNextRef.current = 0;
        } else if (motionMode === 6 && Math.hypot(velocityRef.current.x, velocityRef.current.y) < 1) {
          velocityRef.current = { x: 0, y: 0 };
        }
        startMotion();
        return stopMotion;
      }, [motionMode, open, dragging]);

      React.useEffect(() => {
        const onSession = (event) => {
          const detail = event.detail;
          if (typeof detail === 'string') {
            sessionIdRef.current = detail;
            return;
          }
          if (!detail || typeof detail.sessionId !== 'string') return;
          sessionIdRef.current = detail.sessionId;
          if (typeof detail.locale === 'string' && detail.locale !== '') localeRef.current = detail.locale;
        };
        const requestSession = () => {
          window.dispatchEvent(new CustomEvent('whale-girl:request-session'));
        };
        window.addEventListener('whale-girl:session', onSession);
        requestSession();
        return () => window.removeEventListener('whale-girl:session', onSession);
      }, []);

      React.useEffect(() => {
        const busy = open || dialogBusy;
        window.dispatchEvent(new CustomEvent(BUSY_EVENT, { detail: busy }));
        return () => {
          window.dispatchEvent(new CustomEvent(BUSY_EVENT, { detail: false }));
        };
      }, [open, dialogBusy]);

      React.useEffect(() => {
        if (settingsOpen) setFreqInput(String(checkEvery));
      }, [settingsOpen, checkEvery]);

      const saveFrequency = () => {
        const next = saveCheckEvery(freqInput);
        setCheckEvery(next);
        setFreqInput(String(next));
        setFreqFeedback(next === 0
          ? t('settings.savedOff')
          : t('settings.savedEvery').replace('{n}', String(next)));
      };

      const chooseMotion = (value) => {
        const next = saveMotion(Number(value));
        setMotionMode(next);
        motionStoppedRef.current = false;
        if (next === 2) velocityRef.current = { x: DVD_SPEED, y: DVD_SPEED };
        else if (next === 3) velocityRef.current = { x: 90, y: -55 };
        else if (next === 4) velocityRef.current = { x: 0, y: -320 };
        else if (next === 5) {
          velocityRef.current = { x: 30, y: 14 };
          wanderTargetRef.current = { x: 30, y: 14 };
          wanderNextRef.current = 0;
        } else if (next === 6) {
          velocityRef.current = { x: 0, y: 0 };
          petGroundedRef.current = false;
          petNextActionRef.current = 0;
          petWalkUntilRef.current = 0;
        } else velocityRef.current = { x: 0, y: 0 };
      };

      React.useEffect(() => {
        if (!open) return undefined;
        const onDocumentPointerDown = (event) => {
          if (rootRef.current !== null && !rootRef.current.contains(event.target)) closePanel();
        };
        const onDocumentKeyDown = (event) => {
          if (event.key === 'Escape') closePanel();
        };
        document.addEventListener('pointerdown', onDocumentPointerDown);
        document.addEventListener('keydown', onDocumentKeyDown);
        return () => {
          document.removeEventListener('pointerdown', onDocumentPointerDown);
          document.removeEventListener('keydown', onDocumentKeyDown);
        };
      }, [open]);

      const toggleOpen = () => {
        if (open) {
          closePanel();
          return;
        }
        const index = openCount.current % 15;
        openCount.current += 1;
        setLine(t(`open.${index}`));
        setMood('idle');
        setEffect(null);
        setOpen(true);
      };

      const act = (kind) => {
        if (!Object.prototype.hasOwnProperty.call(ACTION_MOOD, kind)) return;
        const index = counts.current[kind] % 5;
        counts.current[kind] = index + 1;
        setLine(t(`reaction.${kind}.${index}`));
        showEffect(ACTION_OBJECT[kind]);
        const nextMood = kind === 'pet' && index === 2 ? 'sleepy' : ACTION_MOOD[kind];
        flashMood(nextMood, HEAVY_ACTIONS.has(kind) ? 3200 : 2200);
      };

      const sendDialog = async () => {
        const text = dialogValue.trim();
        if (text === '' || dialogBusy) return;
        const sessionId = sessionIdRef.current;
        if (sessionId === '') {
          setLine(t('dialog.noSession'));
          return;
        }
        const positive = /谢谢|谢啦|厉害|可爱|喜欢|好棒|辛苦|帮大忙|夸|不错|真好|太强|牛|爱你|么么|thank|love|great|nice|awesome|good|best/i.test(text);
        const negative = /生气|烦|气死|难受|糟糕|垃圾|错误|失败|讨厌|滚|吵|fuck|shit/i.test(text);
        setDialogBusy(true);
        setDialogValue('');
        setLine(t('dialog.thinking'));
        try {
          const response = await fetch(DIALOG_ROUTE, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              sessionId,
              locale: localeRef.current,
              text,
              previousReply: lastDialogReplyRef.current,
            }),
          });
          const data = await response.json().catch(() => ({}));
          const reply = typeof data?.text === 'string' ? data.text.trim() : '';
          if (!response.ok || reply === '') throw new Error('dialog call failed');
          lastDialogReplyRef.current = reply;
          setLine(reply);
          if (positive) {
            showEffect('heart');
            flashMood('happy', 2800);
          } else if (negative) {
            showEffect('cloud');
            flashMood('apologetic', 2800);
          } else {
            flashMood('idle', 1200);
          }
        } catch {
          setLine(t('dialog.error'));
          showEffect('cloud');
          flashMood('apologetic', 1800);
        } finally {
          setDialogBusy(false);
        }
      };

      const cancelDialog = () => {
        setDialogValue('');
        setLine(t('dialog.dismiss'));
        showEffect('cloud');
        flashMood('pout', 1600);
      };

      const onPointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        stopMotion();
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Pointer capture is an enhancement.
        }
        dragRef.current = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          originX: positionRef.current.x,
          originY: positionRef.current.y,
          samples: [{ x: event.clientX, y: event.clientY, t: event.timeStamp }],
          vx: 0,
          vy: 0,
          moved: false,
        };
        draggingRef.current = true;
        setDragging(true);
      };

      const onPointerMove = (event) => {
        const drag = dragRef.current;
        if (drag === null || drag.pointerId !== event.pointerId) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 5) return;
        drag.moved = true;
        drag.samples.push({ x: event.clientX, y: event.clientY, t: event.timeStamp });
        const cutoff = event.timeStamp - MOMENTUM_WINDOW_MS;
        while (drag.samples.length > 2 && drag.samples[0].t < cutoff) drag.samples.shift();
        const first = drag.samples[0];
        const last = drag.samples[drag.samples.length - 1];
        const elapsed = Math.max(16, last.t - first.t);
        drag.vx = ((last.x - first.x) / elapsed) * 1000;
        drag.vy = ((last.y - first.y) / elapsed) * 1000;
        if (open) closePanel();
        const next = clampFloatPosition({ x: drag.originX + dx, y: drag.originY + dy });
        positionRef.current = next;
        setPosition(next);
        announceFloatPosition(next);
      };

      const finishDrag = (event, cancelled) => {
        const drag = dragRef.current;
        if (drag === null || drag.pointerId !== event.pointerId) return;
        dragRef.current = null;
        draggingRef.current = false;
        setDragging(false);
        try {
          event.currentTarget.releasePointerCapture(event.pointerId);
        } catch {
          // The browser may already have released it.
        }
        if (drag.moved) {
          const mode = motionModeRef.current;
          const releaseT = Number.isFinite(event.timeStamp) ? event.timeStamp : performance.now();
          const lastSample = drag.samples[drag.samples.length - 1];
          const releaseX = Number.isFinite(event.clientX) ? event.clientX : lastSample.x;
          const releaseY = Number.isFinite(event.clientY) ? event.clientY : lastSample.y;
          const cutoff = releaseT - MOMENTUM_WINDOW_MS;
          const recent = [
            ...drag.samples,
            { x: releaseX, y: releaseY, t: releaseT },
          ].filter((sample) => sample.t >= cutoff);
          let vx = 0;
          let vy = 0;
          if (recent.length >= 2) {
            const first = recent[0];
            const last = recent[recent.length - 1];
            const elapsed = Math.max(1, last.t - first.t);
            vx = ((last.x - first.x) / elapsed) * 1000;
            vy = ((last.y - first.y) / elapsed) * 1000;
          }
          const speed = Math.hypot(vx, vy);
          if (mode === 6) {
            velocityRef.current = { x: vx, y: vy };
            motionStoppedRef.current = false;
            petGroundedRef.current = false;
            petNextActionRef.current = 0;
            petWalkUntilRef.current = 0;
            saveFloatPosition(positionRef.current);
            return;
          }
          if (cancelled || speed < 5) {
            motionStoppedRef.current = true;
            velocityRef.current = { x: 0, y: 0 };
            saveFloatPosition(positionRef.current);
            return;
          }
          motionStoppedRef.current = false;
          if (mode === 2) {
            velocityRef.current = {
              x: DVD_SPEED * (vx >= 0 ? 1 : -1),
              y: DVD_SPEED * (vy >= 0 ? 1 : -1),
            };
          } else if (mode === 3 || mode === 4 || mode === 5) {
            velocityRef.current = { x: vx, y: vy };
            if (mode === 5) {
              wanderTargetRef.current = { ...velocityRef.current };
              wanderNextRef.current = 0;
            }
          } else {
            velocityRef.current = { x: 0, y: 0 };
          }
          saveFloatPosition(positionRef.current);
          return;
        }
        if (!cancelled) toggleOpen();
      };

      const onPointerUp = (event) => finishDrag(event, false);
      const onPointerCancel = (event) => finishDrag(event, true);

      const onKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleOpen();
        } else if (event.key === 'Escape') {
          closePanel();
        }
      };

      const viewportWidth = typeof window === 'undefined' ? 1200 : window.innerWidth;
      const viewportHeight = typeof window === 'undefined' ? 800 : window.innerHeight;
      const roomAbove = position.y - 8 - 12;
      const roomBelow = viewportHeight - (position.y + FLOAT_SIZE + 8) - 12;
      const panelBelow = roomBelow > roomAbove;
      const panelMaxHeight = Math.max(190, panelBelow ? roomBelow : roomAbove);
      const alignRight = position.x + FLOAT_SIZE / 2 > viewportWidth / 2;
      const panelStyle = { maxHeight: panelMaxHeight + 'px' };
      if (panelBelow) panelStyle.top = FLOAT_SIZE + 8;
      else panelStyle.bottom = FLOAT_SIZE + 8;
      if (alignRight) panelStyle.right = 0;
      else panelStyle.left = 0;

      const actionRows = ACTION_GROUPS.map((group, groupIndex) => h('div', {
        key: `row-${groupIndex}`,
        className: `wg-chip-row${groupIndex === 2 ? ' wg-chip-row--heavy' : ''}`,
      }, group.map((kind) => h('button', {
        key: kind,
        type: 'button',
        className: `wg-btn${groupIndex === 2 ? ' wg-btn--heavy' : ''}`,
        onClick: () => act(kind),
      }, t(`act.${kind}`)))));

      const settingsContent = h('div', { className: 'wg-settings' },
        h('p', { className: 'wg-settings-label' }, t('settings.label')),
        h('div', { className: 'wg-settings-row' },
          h('input', {
            type: 'number',
            min: CHECK_EVERY_MIN,
            max: CHECK_EVERY_MAX,
            className: 'wg-settings-input',
            value: freqInput,
            placeholder: t('settings.placeholder'),
            'aria-label': t('settings.label'),
            onChange: (event) => {
              setFreqInput(event.target.value);
              setFreqFeedback('');
            },
            onKeyDown: (event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                saveFrequency();
              }
            },
          }),
          h('button', { type: 'button', className: 'wg-btn wg-btn--primary', onClick: saveFrequency }, t('settings.save'))),
        freqFeedback ? h('p', { className: 'wg-settings-feedback' }, freqFeedback) : null,
        h('p', { className: 'wg-settings-label' }, t('motion.label')),
        h('div', { className: 'wg-settings-row' },
          h('select', {
            className: 'wg-settings-select',
            value: motionMode,
            'aria-label': t('motion.label'),
            onChange: (event) => chooseMotion(Number(event.target.value)),
          }, [
            { value: 1, key: 'motion.static' },
            { value: 2, key: 'motion.dvd' },
            { value: 3, key: 'motion.rink' },
            { value: 4, key: 'motion.fall' },
            { value: 5, key: 'motion.wander' },
            { value: 6, key: 'motion.pet' },
          ].map((entry) => h('option', { key: entry.value, value: entry.value }, t(entry.key))))));
      const dialogContent = h('div', { className: 'wg-dialog' },
        h('textarea', {
          className: 'wg-dialog-input',
          rows: 1,
          maxLength: 500,
          value: dialogValue,
          disabled: dialogBusy,
          placeholder: t('dialog.placeholder'),
          'aria-label': t('dialog.placeholder'),
          onChange: (event) => setDialogValue(event.target.value),
          onKeyDown: (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
              event.preventDefault();
              sendDialog();
            }
          },
        }),
        h('div', { className: 'wg-dialog-actions' },
          h('button', {
            type: 'button',
            className: 'wg-btn wg-btn--primary',
            disabled: dialogBusy || dialogValue.trim() === '',
            onClick: sendDialog,
          }, t('dialog.send')),
          h('button', {
            type: 'button',
            className: 'wg-btn wg-btn--ghost',
            onClick: cancelDialog,
          }, t('dialog.cancel'))));

      const panelBody = settingsOpen
        ? settingsContent
        : h('div', { className: 'wg-main' }, actionRows, dialogContent);

      return h('div', {
        ref: rootRef,
        className: 'wg-float',
        'data-whale-girl': '',
        'data-dragging': dragging ? 'true' : undefined,
        style: { left: position.x, top: position.y },
      },
      h(StyleTag),
      h('button', {
        type: 'button',
        className: 'wg-float-avatar',
        'data-mood': mood,
        'aria-label': t('float.aria'),
        'aria-expanded': open,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel,
        onKeyDown,
      },
      h('span', { className: 'wg-avatar-art' }, h(WhaleGirl, { size: FLOAT_SIZE })),
      effect ? h('img', {
        key: effect.key,
        className: 'wg-object',
        'data-kind': effect.kind,
        src: OBJECTS[effect.kind],
        alt: '',
        'aria-hidden': 'true',
        draggable: false,
      }) : null),
      open ? h('div', {
        className: 'wg-float-panel',
        style: panelStyle,
        role: 'dialog',
        'aria-label': t('dock.name'),
      },
      h('button', {
        type: 'button',
        className: 'wg-panel-close',
        'aria-label': t('float.close'),
        onClick: closePanel,
      }, '×'),
      h('button', {
        type: 'button',
        className: 'wg-panel-gear',
        'aria-label': t('settings.open'),
        'aria-expanded': settingsOpen,
        onClick: () => {
          setSettingsOpen((current) => !current);
          setFreqFeedback('');
        },
      }, '⚙'),
      h('p', { className: 'wg-line', key: line, 'aria-live': 'polite' }, line),
      panelBody) : null);
    }

    function MoodCheck(props) {
      if (typeof props.useChat !== 'function' || typeof props.useSession !== 'function' || typeof props.sessionId !== 'string') {
        return null;
      }
      return h(MoodCheckReady, props);
    }

    function MoodCheckReady(props) {
      const t = translateOf(props);
      const { useChat, useSession, sessionId, getLocale } = props;
      React.useEffect(() => {
        if (typeof sessionId !== 'string' || sessionId === '') return undefined;
        const announceSession = () => {
          window.dispatchEvent(new CustomEvent('whale-girl:session', {
            detail: {
              sessionId,
              locale: typeof getLocale === 'function' ? getLocale() : 'zh',
            },
          }));
        };
        announceSession();
        window.addEventListener('whale-girl:request-session', announceSession);
        return () => window.removeEventListener('whale-girl:request-session', announceSession);
      }, [sessionId, getLocale]);
      const nodes = useChat((chat) => {
        if (chat && chat.legacy && Array.isArray(chat.legacy.nodes)) return chat.legacy.nodes;
        return EMPTY_NODES;
      });
      const openState = useSession((session) => session ? session.openState : undefined);
      const subagent = useSession((session) => session ? session.subagent : null);
      const userNodes = React.useMemo(
        () => (Array.isArray(nodes) ? nodes.filter((node) => node && node.kind === 'user') : []),
        [nodes],
      );
      const seenRef = React.useRef(new Set());
      const sessionKeyRef = React.useRef(null);
      const baselinePendingRef = React.useRef(true);
      const sessionBaselineAtRef = React.useRef(0);
      const [checkEvery, setCheckEvery] = React.useState(readCheckEvery);
      const checkEveryRef = React.useRef(checkEvery);
      checkEveryRef.current = checkEvery;
      const nextCheckRef = React.useRef(checkEvery > 0 ? checkEvery : Number.MAX_SAFE_INTEGER);
      const checkRef = React.useRef(null);
      const abortRef = React.useRef(null);
      const mountedRef = React.useRef(true);
      const leavingRef = React.useRef(false);
      const [check, setCheck] = React.useState(null);
      const [chat, setChat] = React.useState(null);
      const [leaving, setLeaving] = React.useState(false);
      const chatRef = React.useRef(null);
      const chatTimerRef = React.useRef(null);
      const chatHideRef = React.useRef(null);
      const busyRef = React.useRef(false);
      const lastChatIndexRef = React.useRef(-1);
      const [anchor, setAnchor] = React.useState(readFloatPosition);
      const [viewport, setViewport] = React.useState(() => ({
        width: typeof window === 'undefined' ? 1200 : window.innerWidth,
        height: typeof window === 'undefined' ? 800 : window.innerHeight,
      }));

      React.useEffect(() => {
        mountedRef.current = true;
        return () => {
          mountedRef.current = false;
          abortRef.current?.abort();
          abortRef.current = null;
        };
      }, []);

      React.useEffect(() => {
        const onPosition = (event) => {
          if (checkRef.current === null && chatRef.current === null) return;
          if (!event.detail || !Number.isFinite(event.detail.x) || !Number.isFinite(event.detail.y)) return;
          setAnchor(clampFloatPosition(event.detail));
        };
        const onResize = () => {
          setViewport({ width: window.innerWidth, height: window.innerHeight });
        };
        const onConfig = (event) => {
          const value = Math.trunc(Number(event.detail));
          if (!Number.isFinite(value) || value < CHECK_EVERY_MIN || value > CHECK_EVERY_MAX) return;
          checkEveryRef.current = value;
          setCheckEvery(value);
          const count = seenRef.current.size;
          nextCheckRef.current = value > 0 ? Math.floor(count / value) * value + value : Number.MAX_SAFE_INTEGER;
        };
        window.addEventListener(POSITION_EVENT, onPosition);
        window.addEventListener('resize', onResize);
        window.addEventListener(CONFIG_EVENT, onConfig);
        return () => {
          window.removeEventListener(POSITION_EVENT, onPosition);
          window.removeEventListener('resize', onResize);
          window.removeEventListener(CONFIG_EVENT, onConfig);
        };
      }, []);

      React.useEffect(() => {
        const onBusy = (event) => {
          const busy = Boolean(event.detail);
          busyRef.current = busy;
          if (!busy || chatRef.current === null) return;
          clearTimeout(chatHideRef.current);
          chatRef.current = null;
          setChat(null);
          logClient('chat_skip', { sessionId, reason: 'busy' });
        };
        window.addEventListener(BUSY_EVENT, onBusy);
        return () => window.removeEventListener(BUSY_EVENT, onBusy);
      }, [sessionId]);

      React.useEffect(() => {
        if (subagent !== null) return undefined;
        chatRef.current = null;
        setChat(null);
        let cancelled = false;
        const schedule = () => {
          chatTimerRef.current = setTimeout(() => {
            if (cancelled) return;
            if (checkRef.current !== null) {
              schedule();
              return;
            }
            if (busyRef.current) {
              logClient('chat_skip', { sessionId, reason: 'busy' });
              schedule();
              return;
            }
            let index = Math.floor(Math.random() * 15);
            if (index === lastChatIndexRef.current) index = (index + 1) % 15;
            lastChatIndexRef.current = index;
            const next = { key: `chat.${index}`, index };
            chatRef.current = next;
            setChat(next);
            logClient('chat_trigger', { sessionId, index });
            clearTimeout(chatHideRef.current);
            chatHideRef.current = setTimeout(() => {
              if (chatRef.current !== next) return;
              chatRef.current = null;
              setChat(null);
              logClient('chat_close', { sessionId, index });
            }, 6500);
            schedule();
          }, 120000 + Math.random() * 180000);
        };
        schedule();
        return () => {
          cancelled = true;
          clearTimeout(chatTimerRef.current);
          clearTimeout(chatHideRef.current);
          chatRef.current = null;
        };
      }, [sessionId, subagent]);

      const closeCheck = React.useCallback(() => {
        if (leavingRef.current) return;
        const current = checkRef.current;
        if (current === null) return;
        leavingRef.current = true;
        setLeaving(true);
        logClient('check_close', { sessionId, turn: current.turn, level: current.level ?? null });
        abortRef.current?.abort();
        abortRef.current = null;
        setTimeout(() => {
          if (!mountedRef.current) return;
          checkRef.current = null;
          setCheck(null);
          setLeaving(false);
          leavingRef.current = false;
          announceMood('idle');
        }, 240);
      }, [sessionId]);

      const startCheck = React.useCallback(async (turn) => {
        if (typeof sessionId !== 'string' || sessionId === '') return;
        abortRef.current?.abort();
        if (chatRef.current !== null) {
          clearTimeout(chatHideRef.current);
          chatRef.current = null;
          setChat(null);
        }
        leavingRef.current = false;
        setLeaving(false);
        const controller = new AbortController();
        abortRef.current = controller;
        const loadingVariant = Math.floor(Math.random() * 5);
        const current = {
          phase: 'loading',
          turn,
          level: null,
          messageKey: `check.loading.${loadingVariant}`,
        };
        checkRef.current = current;
        setCheck(current);
        announceMood('peek');
        logClient('check_trigger', { sessionId, turn });
        try {
          logClient('check_request', { sessionId, turn });
          const response = await fetch(ROUTE, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ sessionId, locale: typeof getLocale === 'function' ? getLocale() : 'zh' }),
            signal: controller.signal,
          });
          logClient('check_response', { sessionId, turn, status: response.status, ok: response.ok });
          if (!response.ok) throw new Error('mood check failed');
          const data = await response.json();
          if (checkRef.current !== current) return;
          const level = Number.isInteger(data?.level) ? Math.min(3, Math.max(0, data.level)) : 0;
          const variant = Math.floor(Math.random() * 5);
          const next = {
            phase: 'done',
            level,
            turn,
            messageKey: `check.level${level}.${variant}`,
          };
          checkRef.current = next;
          setCheck(next);
          announceMood(level >= 3 ? 'apologetic' : level === 2 ? 'flustered' : level === 1 ? 'worried' : 'idle');
          logClient('check_result', { sessionId, turn, level });
        } catch (error) {
          logClient('check_error', {
            sessionId,
            turn,
            message: error instanceof Error ? error.message.slice(0, 200) : String(error).slice(0, 200),
            aborted: controller.signal.aborted,
          });
          if (controller.signal.aborted || checkRef.current !== current) return;
          const variant = Math.floor(Math.random() * 5);
          const next = {
            phase: 'error',
            level: null,
            turn,
            messageKey: `check.error.${variant}`,
          };
          checkRef.current = next;
          setCheck(next);
          announceMood('worried');
        }
      }, [sessionId, getLocale]);

      React.useEffect(() => {
        if (typeof sessionId !== 'string' || sessionId === '') return;
        if (sessionKeyRef.current === sessionId) return;
        sessionKeyRef.current = sessionId;
        baselinePendingRef.current = true;
        sessionBaselineAtRef.current = Date.now();
        seenRef.current = new Set();
        nextCheckRef.current = Number.MAX_SAFE_INTEGER;
        abortRef.current?.abort();
        abortRef.current = null;
        checkRef.current = null;
        setCheck(null);
        setLeaving(false);
        leavingRef.current = false;
        logClient('check_session', { sessionId, nodes: 0, next: null });
      }, [sessionId]);

      React.useEffect(() => {
        if (typeof sessionId !== 'string' || sessionId === '') return;
        if (sessionKeyRef.current !== sessionId || !baselinePendingRef.current) return;
        if (!Array.isArray(userNodes) || userNodes.length === 0) return;
        const baseline = new Set(userNodes.map((node) => node.seq));
        seenRef.current = baseline;
        const freq = checkEveryRef.current;
        const next = freq > 0 ? Math.floor(baseline.size / freq) * freq + freq : Number.MAX_SAFE_INTEGER;
        nextCheckRef.current = next;
        baselinePendingRef.current = false;
        sessionBaselineAtRef.current = Date.now();
        logClient('check_baseline', {
          sessionId,
          nodes: baseline.size,
          next,
        });
      }, [sessionId, userNodes]);

      React.useEffect(() => {
        if (!Array.isArray(userNodes)) return;
        if (baselinePendingRef.current) return;
        const freq = checkEveryRef.current;
        if (freq <= 0) return;
        const seen = seenRef.current;
        const fresh = userNodes.filter((node) => !seen.has(node.seq));
        if (fresh.length === 0) return;
        for (const node of fresh) seen.add(node.seq);
        const count = seen.size;
        logClient('check_count', {
          sessionId,
          count,
          every: freq,
          next: nextCheckRef.current,
          active: checkRef.current !== null,
        });
        if (Date.now() - sessionBaselineAtRef.current < 300) {
          nextCheckRef.current = Math.max(nextCheckRef.current, count + freq);
          return;
        }
        if (fresh.length > 1) {
          nextCheckRef.current = Math.floor(count / freq) * freq + freq;
          return;
        }
        if (checkRef.current !== null) return;
        if (count >= nextCheckRef.current) {
          nextCheckRef.current = Math.floor(count / freq) * freq + freq;
          startCheck(count);
        }
      }, [userNodes, openState, subagent, startCheck]);

      React.useEffect(() => {
        if (!check || check.phase === 'loading') return undefined;
        const delay = check.phase === 'error'
          ? 3800
          : [3000, 4500, 6000, 8000][check.level] ?? 3000;
        const timer = setTimeout(closeCheck, delay);
        return () => clearTimeout(timer);
      }, [check, closeCheck]);

      const chatOnly = check === null && chat !== null;
      if (subagent !== null || (!chatOnly && check === null)) return null;

      const message = chatOnly ? t(chat.key) : t(check.messageKey);
      const body = chatOnly
        ? [h('p', { key: 'msg', className: 'wg-check-message' }, message)]
        : check.phase === 'loading'
          ? [
            h('p', { key: 'msg', className: 'wg-check-message' }, message),
            h('div', { key: 'dots', className: 'wg-thinking', 'aria-hidden': 'true' }, h('span'), h('span'), h('span')),
          ]
          : [h('p', { key: 'msg', className: 'wg-check-message' }, message)];

      const bubbleWidth = Math.min(300, Math.max(220, viewport.width - 24));
      let left = anchor.x + FLOAT_SIZE + 12;
      let side = 'right';
      if (left + bubbleWidth > viewport.width - 12) {
        left = anchor.x - bubbleWidth - 12;
        side = 'left';
      }
      left = Math.max(12, Math.min(left, viewport.width - bubbleWidth - 12));
      const top = Math.max(12, Math.min(anchor.y + 4, viewport.height - 220));

      const bubble = h('div', {
        className: `wg-check-bubble${chatOnly ? ' wg-chat-bubble' : ''}`,
        'data-whale-girl': '',
        'data-side': side,
        'data-chat': chatOnly ? 'true' : undefined,
        'data-leaving': leaving ? 'true' : undefined,
        style: { left: left + 'px', top: top + 'px', width: bubbleWidth + 'px' },
        'aria-label': t('check.label'),
      },
      h(StyleTag),
      h('div', { className: 'wg-bubble-body', 'aria-live': 'polite' }, body));

      if (typeof document === 'undefined' || ReactDOM === null || typeof ReactDOM.createPortal !== 'function') {
        return bubble;
      }
      return ReactDOM.createPortal(bubble, document.body);
    }

    function apply(ctx) {
      const locale = ctx.get('locale');
      if (!locale) return;
      ctx.effect(() => locale.register(NS, DICT), 'whale-girl: dictionaries');
      const t = locale.bind(NS);
      const getLocale = () => {
        const snapshot = locale.getSnapshot();
        return snapshot && typeof snapshot.active === 'string' ? snapshot.active : 'zh';
      };

      ctx.slots.inject('conversation.input.dock', () => ctx.slots.register({
        name: 'conversation.input.dock',
        id: 'whale-girl-mood-check',
        order: 30,
        label: () => t('check.label'),
        locale: NS,
        inject: () => ({
          getLocale,
        }),
      }, MoodCheck));

      ctx.slots.inject('shell.overlay', () => ctx.slots.register({
        name: 'shell.overlay',
        id: 'whale-girl-float',
        order: 45,
        label: () => t('dock.name'),
        locale: NS,
      }, FloatingMascot));
    }

    return {
      inject: ['slots', 'locale'],
      apply,
    };
  },
});

