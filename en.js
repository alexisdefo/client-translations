module.exports = {
  self: 'xroom',
  title: 'Your secure workspace',
  goToDash: 'Go to Dashboard',
  netStatus: 'Connection',
  buttons: {
    ok: 'Okay',
    cancel: 'Cancel',
    yes: 'Yes',
    no: 'No',
    chN: 'Choice %s',
    install: 'Install',
    uninstall: 'Uninstall',
    details: 'View details',
    close: 'Close',
    next: 'Next',
    back: 'Back',
  },
  mbox: {
    protoExpired: 'Too old client version. Please press Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 to reload. If you then see this message again, please clear browser cache manually.',
    areYouSure: 'Are you sure?',
    noPermission: 'Cannot acquire permissions from your browser. Please check that you did not accidentally block them.',
    mediaBlocked: 'Camera is blocked. Please check that you are not using it in another browser or program.',
    mediaError: 'We could not identify the problem, but something is wrong. Just in case check the browser permissions.',
    whatIsYourName: 'What is your name?',
    noPeers: 'As we do not touch your messages we cannot deliver them after someone connects. You need to do it when people are in.',
    password: 'Set room password',
    roomLocked: 'This room is locked. You cannot enter.',
    roomProtected: 'This room is protected with a password. Please enter it below.',
    roomIsFull: 'This room is full. You cannot enter.',
    alreadyHosted: 'You are already in the room. Probably you are testing with several browser tabs. Do you want to enter? Host features may not work here.',
    youAreKicked: 'You have been removed from this room.',
    setQFailed: 'Failed to set the requested quality. Probably your browser does not support it.',
    bookingEnded: 'This booking is now over. The room is booked for another event, so you will now be redirected to another room to be able to finish your meeting.',
    bookingEndedHost: 'The current booking for this room is soon complete. A choice must now be made as another booking has been scheduled using the same room name.<br/><br/>1. Go to a new meeting. We will direct you to the dashboard to enter the meeting with a new host key.<br/><br/>2. Stay in the meeting. We will create a new room for you to finish this call.',
    pluginsLoadFailed: 'Failed loading plugins',
    roomDestroyed: 'Room has been deleted. You will be redirected to the starting page.',
    encInfo: 'Encryption: end-to-end, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Encryption not supported',
  },
  notify: {
    slowPlugins: 'Plugins take too much time to load. Consider removing the heaviest.',
    peerLost: 'You lost %s. Reconnecting...',
    roomLocked: 'Room locked 🔒',
    roomUnlocked: 'Room unlocked 🔓',
    roomPwdSet: 'Room password set 🔑',
    roomPwdReset: 'Room password cleared',
    devicesChanged: 'Devices changed',
  },
  modes: {
    1: 'Conference — everyone can speak',
    2: 'Webinar — one speaks, others listen',
  },
  placements: {
    1: 'Grid view',
    2: 'Mini-me',
    3: 'Spotlight',
  },
  perm: {
    head: 'Allow browser permissions',
    video: 'Video',
    audio: 'Audio',
    notif: 'Notifications',
  },
  videoMenu: {
    hint: 'Toggle menu',
    expand: 'Expand',
    pip: 'Keep on top',
    fullscreen: 'Full screen',
    fullscreenOff: 'Exit full screen',
    volume: 'Volume',
    restore: 'Restore',
    kick: 'Remove participant',
    mute: 'Mute (only for you)',
    pm: 'Private chat',
    makeHost: 'Pass host role',
  },
  controls: {
    sharing: 'Sharing',
    cam: 'Camera',
    mic: 'Microphone',
    chat: 'Chat',
    exit: 'Leave',
    destroy: 'End meeting',
    settings: 'Settings',
    plugin: 'Plugins',
    dots: 'Context menu',
    invite: 'Invite',
    ss: 'Share screen',
    stopSharing: 'Stop sharing',
    board: 'Whiteboard',
    hand: 'Raise hand',
    lock: 'Locking',
    layouts: 'Placement',
    emoji: 'Emojis',
    attach: 'Attach a file',
    setLock: 'Lock the room',
    resetLock: 'Unlock the room',
    setPwd: 'Set a password',
    rotate: 'Back/Front camera',
    more: 'More',
  },
  reactions: {
    handRaised: 'User %s wants to speak 🎤',
  },
  video: {
    you: 'You (click to name)',
  },
  settings: {
    tabs: {
      audio: 'Audio',
      video: 'Video',
      general: 'General',
      help: 'Help',
      chat: 'Chat',
      peers: 'Participants',
      lobby: 'Lobby',
    },
    audioQ: 'Max sample rate',
    videoQ: 'Max video quality',
    screenQ: 'Max screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    soundEffects: 'Sound effects',
    audioDevices: 'Audio sources',
    videoDevices: 'Video sources',
    language: 'Language',
    theme: 'Color theme',
    requestAudio: 'Request audio permission',
    requestVideo: 'Request video permission',
    testOutput: 'Test audio output',
    flipFace: 'Mirror your camera preview',
    requireName: 'Require name',
    rtcDebug: 'Debug RTC',
    noPreview: 'Start chats without preview',
    menuPos: 'Menu placement',
    menuPosO: {
      1: 'top',
      2: 'bottom',
    },
  },
  home: {
    title: 'Your personal conference room',
    btnGo: 'Go!',
    nameRoom: 'name your room:',
    placeholder: 'type here',
    rejoinRoom: 'or rejoin',
    poweredBy: 'Powered by ',
    roomHint: 'Enter room name please',
  },
  pre: {
    selectMode: 'Choose meeting type',
    selectedMode: 'Meeting type',
    btnGo: 'Get in',
    btnPreview: 'Preview',
    allSettings: 'Open all settings',
    avaPicker: 'Choose avatar (shows when video is off)',
    sizeLimitReached: 'This room was limited by size and the limit is already reached',
    roomBooked: 'There is going to be an event in this room soon: <span>%s</span>.<br/>Please stand by until the meeting begins.',
    roomInfo: 'Room info',
    phInfo: 'Enter room info',
  },
  inviter: {
    info: 'Share the link below with someone to invite to your meeting.',
    head: 'Room link:',
    btnCopy: 'Copy link',
    ntfCopied: 'Link copied!',
  },
  chat: {
    publicChat: 'Public chat',
    chatWith: 'Chat with %s',
    fileSending: 'Sending file: ',
    fileReceived: 'File received: ',
    phInput: 'Write a message...',
    me: 'me',
    dropMe: 'Drop me!',
    atTime: 'at %s',
  },
  webinar: {
    peersCount: {
      one: '%s person is watching',
      many: '%s persons are watching',
    },
  },
  plugins: {
    by: 'by',
    size: 'Size: %s kB',
    phSearch: 'search...',
    source: 'Source code: ',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    add: {
      title: 'Add new plugin',
      descr: '⚙️ Developing a new plugin? Add it here to test. It is not saved anywhere, but in your browser.',
      name: 'What\'s the plugin name?',
      rootUrl: 'Where is the plugin root?',
      loaded: 'Yaay! It\'s loaded!',
      loadFailed: 'Failed loading plugin',
    }
  },
  help: {
    sevenTips: 'Read 7 “fix” tips',
    faq: 'Go to FAQ',
    submitFeature: 'Submit a feature',
  },
}
