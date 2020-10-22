export default {
  self: 'xroom',
  on: '开',
  off: '关',
  title: '需要一间会议室吗？',
  buttons: {
    ok: 'OK',
    yes: '是',
    no: '否',
    cancel: '取消',
    retry: '重试',
    chooseWindow: '请选择屏幕',
    wholeScreen: '全屏',
    install: '安装',
    uninstall: '卸载',
    send: '发送',
    close: '关闭',
    hide: '隐藏',
    knock: '敲敲',
    allowIn: '允许',
    deny: '拒绝',
    enterAnyway: 'Enter anyway',
    details: 'Details',
  },
  mbox: {
    notSupported: '该浏览器似乎不支持XROOM或WebRTC已禁用。😢',
    success: '操作成功',
    failure: '操作失败',
    enterRoomName: '请输入名称',
    isCamOn: '相机是否有开?',
    isCamOnText: '请检查您是否有意外地阻止此浏览器上的相机/麦克风设备，然后再按“重试”。',
    isMicOn: '麦克风是否打开？',
    isMicOnText: '如果您打算讲话，我们需要您的麦克风许可。在此页面上允许它，然后再按“重试”。',
    iWillOnlyWatch: '我只需看',
    iWillOnlyListen: '我只需听',
    screenSharingText: '不允许屏幕共享。请确保此页面未被阻止。<br><br>此功能仅受现代浏览器（例如Chrome或Firefox）支持。',
    cannotFile: '由于我们不会侵入您的文件，因此我们无法在有人连接后将其交付。您需要在线进行。',
    cannotMessage: '由于我们不会侵入您的讯息，因此我们无法在有人连接后将其交付。您需要在线进行。',
    roomLockedText: '此房间已上锁',
    oops: '抱歉',
    kickedOutText: '您已被踢出',
    areYouSure: '是否确定？',
    restartRequiredText: '此设置影响了多方面，因此需要重新加载。很快，不用担心！',
    onlySafariOnIOS: '在iOS上，仅支持Safari。 “谢谢“你，苹果！',
    cannotLoadPlugin: '插件 "%s" 不支持您的浏览器',
    confirmFileSend: '您确定要发送吗？',
    whatIsYourName: '请输入名字',
    setVideoVolume: '设置此视频的音量',
    roomLockedTryKnockText: '房间目前处于锁定状态。您可以通过“敲门”来寻求进入许可。',
    knockingFailedText: '敲门尝试失败',
    doYouWantToKick: '您要把此用户踢出去吗？',
    deviceChanged: '您已安装/卸载了新的输入设备。如果不起作用，请从“设置”中亲自选择。',
    allowCameraPlz: '按“确定”后，请<b>允许</b>xroom使用您的相机。<br><br>别担心！如果您想保持隐身状态，则可以再次关闭它，然后从下方的选项中进入房间。',
    tooOldBrowser: '您的浏览器太旧或是由Microsoft生产。许多功能可能无法操作。',
    pluginsLoadFailed: '安装插件失败',
    protoExpired: '客户端版本太旧。请按 Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 重新加载。若您再次看到此消息，请自己清除浏览器缓存。',
    peerError: '与同伴交换数据时出现了问题。我们建议重新加载页面。',
    enterpriseOnly: 'This is an enterprise only feature.',
    pluginSuggested: 'User %s suggested you to install plugin %s. Do you wish to do it?',
    hostRoleRequired: 'Host role is required for this action.',
    alreadyHosted: 'Room is already hosted. Do not enter the same room from 2 browser tabs. 😉',
    roomLockedPassword: 'Room is currently locked with a password. Enter it below if you know it.',
    roomDestroyed: 'Room has been destroyed. You will be redirected to the starting page.',
    roomBooked: 'Room has been booked and cannot be created through the interface until booking expires.',
    nameRequired: 'Room host requires you to set your name first.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
  },
  notify: {
    slowPlugins: 'Plugins take too much time to load. Consider removing the heaviest.',
  },
  home: {
    nisdos: '我们不使用cookies',
    title: '您的私人会议室',
    btnGo: '继续!',
    knowMore: '关于xroom',
    nameRoom: '命名您的聊天室：',
    placeholder: '在此输入',
    rejoinRoom: '或重新加入',
  },
  wl: {
    poweredBy: '供应为 ',
  },
  modes: {
    1: 'Conference',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Choose room type',
    checkIt: '请检查您的麦克风和发型',
    btnGo: '进入',
    knockDenied: '您的敲门请求已被拒绝。您无法进入此聊天室。:(',
    knockRequested: '等待许可。其他人可以通过窥视孔看到您。👀',
    noAudio: '⚠️ 未检测到麦克风信号',
    roomIsBusyWebinar: '网络研讨会/视频正在进行 (%s×🙂 / %s×🤖)',
    roomIsBusyConference: '会议正在进行 (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'This room was limited by size and the limit is reached',
    roomBooked: 'There is going to be an event in this room at <b>%s</b>, but it has not started yet.',
  },
  videoMenu: {
    hint: '切换选项',
    expand: '扩大',
    pip: 'Keep on top',
    fullscreen: '全屏',
    volume: '音量±',
    restore: '恢复',
    kick: '踢',
    mute: 'Mute',
  },
  controls: {
    ss: '屏幕共享%s',
    cam: '相机%s',
    mic: '麦克风%s',
    chat: '聊天室%s',
    exit: '登出',
    destroy: 'Destroy',
    xroom: '由xroom提供支持',
    settings: '设定值',
    plugins: '插件',
    media: '介质',
    more: '更多',
    letMeSpeak: '请让我说',
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Room is locked',
    open: 'Room is open',
    protected: 'Room is password-protected',
    placeholder: 'room password',
  },
  reactions: {
    letMeSpeak: '我想说话！',
  },
  waiting: {
    invite: '邀请您的同事',
    beforeCopy: '点击复制',
    afterCopy: '复制成功!',
    webinar: '网络研讨会尚未开始',
  },
  video: {
    you: '您',
    someone: '有人',
    knocking: '在敲...',
    poorNet: '连接不良',
  },
  chat: {
    fileSending: '发送文件：',
    fileReceived: '收到的文件：',
    inputPlaceholder: '输入信息，然后按进入...',
    me: '我',
    dropMe: '请给我!',
  },
  webinar: {
    peersCount: '%s人们在看',
  },
  settings: {
    experimental: '*) 实验性，还是不稳定',
    showCameraWithScreen: '在屏幕共享期间显示相机',
    audioQ: 'Audio quality',
    videoQ: 'Video quality',
    screenQ: 'Screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: '在没有预览的情况下开始聊天',
    soundEffects: '声音特效',
    noisyBackground: '我在嘈杂的地方',
    rtcDebug: '调试RTC',
    audioDevices: '音源',
    videoDevices: '视讯来源',
    language: '语言',
    theme: '主题',
    server: '伺服器',
    keepControls: 'Keep controls visible',
  },
  plugins: {
    by: '通过',
    size: '大小：％s kB',
    searchPlaceholder: '搜索中...',
    source: '源代码:',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    add: {
      title: '添加新插件',
      descr: '⚙️ 开发新插件？将其添加到此处进行测试。它不会保存，重新加载页面会将其从内存中删除。',
      name: '插件名称是什么？',
      rootUrl: '插件目录在哪里？',
      loaded: '耶！已加载！',
      loadFailed: '加载插件失败',
    }
  },
  tips: {
    prefix: '每日提示：',
    lines: [
      '经常静音/取消静音？有一个热键"m"可使用。',
      '双击远程视频以使其全屏显示。',
      '需要锁上聊天室吗？只需在下方的插件中添加聊天室锁定功能即可。',
      '使用Slack并想节省更多时间吗？试用我们的<a href="//xroom.app/en/library/slack-bot" target="_blank">Slack机器人</a>。',
      '错过了Telegram中的视频通话吗？我们的<a href="//xroom.app/en/library/telegram-bot" target="_blank">Telegram机器人</a>可以为您提供帮助。',
      '需要共享复制的图像吗？在聊天中按Ctrl + V，我们将为您服务。',
      '单击您的名字将可以更改您及您的同伴所显示的名字。',
      '想单击几下便可以记录屏幕吗？试试我们的屏幕录像插件。',
    ]
  },
}
