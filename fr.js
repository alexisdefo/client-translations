export default {
  self: 'xroom',
  on: 'ouvert',
  off: 'fermé',
  title: 'Besoin d’une salle de conférence?',
  buttons: {
    ok: 'OK',
    yes: 'Oui',
    no: 'Non',
    cancel: 'Annuler',
    retry: 'Réessayer',
    chooseWindow: 'Choisir une fenêtre',
    wholeScreen: 'Plein écran',
    install: 'Ajouter',
    uninstall: 'Enlever',
    send: 'Envoyer',
    close: 'Fermer',
    hide: 'Cacher',
    knock: 'Toc-Toc-Toc',
    allowIn: 'Permettre d’entrer',
    deny: 'Refuser',
    enterAnyway: 'Entrer quand même',
    enterHost: 'Entrer comme hôte',
    details: 'Details',
  },
  mbox: {
    notSupported: 'Il semble que ce navigateur ne prenne pas en charge notre service ou WebRTC est désactivé. 😢',
    success: 'Opération réussie',
    failure: 'Opération échouée',
    enterRoomName: 'Entrez un nom de salle s’il vous plaît',
    isCamOn: 'Est-ce que votre caméra est activée ?',
    isCamOnText: 'Veuillez vérifier que vous n’avez pas accidentellement bloqué votre caméra / micro sur ce site et appuyez sur "Réessayer".',
    isMicOn: 'Est-ce que votre microphone est activé ?',
    isMicOnText: 'Si vous prévoyez de parler, nous avons besoin de votre autorisation d accès au micro. Autorisez-le sur cette page et appuyez sur "Réessayer".',
    iWillOnlyWatch: 'Je veux juste regarder',
    iWillOnlyListen: 'Je veux juste écouter',
    screenSharingText: 'Le partage d’écran n’est pas autorisé. Veuillez vous assurer qu’il n’est pas bloqué pour cette page.<br><br>Cette fonctionnalité n’est prise en charge que par les navigateurs modernes comme Chrome ou Firefox.',
    cannotFile: 'Étant donné que nous n avons pas accès aux fichiers, nous ne pouvons pas les délivrer juste après la connexion d un utilisateur. Vous devez le faire lorsque les utilisateurs sont présent.',
    cannotMessage: 'Étant donné que nous ne stockons pas vos messages, nous ne pouvons pas les délivrer après la connexion d un utilisateur. Vous devez le faire lorsque les utilisateurs sont présent.',
    roomLockedText: 'Cette salle est verrouilée',
    oops: 'Désolé',
    kickedOutText: 'Vous avez été expulsé(e)',
    areYouSure: 'Êtes-vous sur ?',
    restartRequiredText: 'Ce paramètre affecte trop de choses, un rechargement de la page est donc nécessaire. C’est rapide, ne vous inquiétez pas!',
    onlySafariOnIOS: 'Sur iOS, seul Safari est pris en charge.',
    cannotLoadPlugin: 'Le plugin "% s" n est pas pris en charge par votre navigateur',
    confirmFileSend: 'Voulez-vous envoyer ça?',
    whatIsYourName: 'Entrer votre nom',
    setVideoVolume: 'Ajuster le volume pour cette utilisateur',
    roomLockedTryKnockText: 'La salle est actuellement verrouillée. Vous pouvez demander la permission d’entrer.',
    knockingFailedText: 'La tentative d accès à la salle a échouée',
    doYouWantToKick: 'Voulez-vous éjecter cet utilisateur?',
    deviceChanged: 'Vous avez connecté / supprimé un nouveau périphérique d’entrée. Si cela ne fonctionne pas, choisissez-le manuellement dans Paramètres.',
    allowCameraPlz: 'Après avoir appuyé sur OK, veuillez <b>autoriser</b> le service à utiliser votre appareil photo.<br><br>Ne vous inquiétez pas! Vous pourrez le désactiver à nouveau avant d’entrer dans la pièce à partir du menu en bas si vous souhaitez rester invisible.',
    tooOldBrowser: 'Votre navigateur est trop ancien. De nombreuses fonctionnalités peuvent manquer.',
    pluginsLoadFailed: 'Échec du chargement des plugins',
    protoExpired: 'Version client trop ancienne. Veuillez appuyer sur Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 pour recharger. Si vous voyez à nouveau ce message, veuillez vider manuellement le cache du navigateur.',
    peerError: 'Quelque chose s’est mal passé lors de l’échange de données avec vos interlocuteurs. Nous vous suggérons de recharger la page.',
    enterpriseOnly: 'Il s’agit d’une fonction réservée aux entreprises.',
    pluginSuggested: 'L’utilisateur %s vous a suggéré d’installer le plugin %s. Voulez-vous le faire?',
    hostRoleRequired: 'Le rôle d’hôte est requis pour cette action.',
    alreadyHosted: 'La reunion est déjà ouverte. N’entrez pas dans la même reunion à partir de 2 onglets du navigateur. 😉',
    roomLockedPassword: 'La salle est actuellement verrouillée avec un mot de passe. Entrez-le ci-dessous si vous le connaissez.',
    roomDestroyed: 'La salle a été supprimée. Vous serez redirigé(e) vers la page de démarrage.',
    roomBooked: 'La salle a été programmée et ne peut pas être accessible avant la fin de l écheance.',
    nameRequired: 'Votre nom est requis pour accèder à la reunion.',
    pipNotSupported: 'Votre navigateur supporte le "picture-in-picture" mais il semble désactivé dans vos réglages.',
    copyFailed: 'La copie a échouée, cela peux être du aux restrictions de votre système.',
    noCryptoWarning: 'Votre navigateur ne supporte pas le chiffrement. Il n est pas prudent de continuer.',
    bigFileDecryptWarn: 'Votre téléchargement a débuté. Le déchiffrement est en cours.',
    noSTUN: 'Nous avons détécté une erreur de connexion. Il se peut qu il s agisse d un incident de connexion local ou d un réglage de pare-feu. Notre système est actif, merci de réessayer ou d utiliser un autre navigateur ou le mode navigation privée.<br><br>Please read the <a href="https://xroom.app/en/blog/2020-08-07-experiencing-network-or-connection-issues" target="_blank">following article</a> for more information here.',
  },
  notify: {
    slowPlugins: 'Les plugins prennent trop de temps à charger. Pensez à désactiver le plus lourd.',
  },
  home: {
    nisdos: 'Nous n’utilisons pas de cookies',
    title: 'Votre salle personnelle de conférence',
    btnGo: 'Go!',
    knowMore: 'À propos de xroom',
    nameRoom: 'nom de votre salle:',
    placeholder: 'écrivez ici',
    rejoinRoom: 'rejoindre',
  },
  wl: {
    poweredBy: 'Propulsé par ',
  },
  modes: {
    1: 'Conférence',
    2: 'Webinaire',
  },
  pre: {
    selectMode: 'Chosi ton type de salle',
    checkIt: 'Êtes-vous prêt ?',
    btnGo: 'Entrer',
    knockDenied: 'Vous ne pouvez pas entrer dans la salle. Votre demande a été refusée :(',
    knockRequested: 'En attente d’une autorisation. Les utilisateurs peuvent vous voir. 👀',
    noAudio: '⚠️ Aucun signal micro détecté',
    roomIsBusyWebinar: 'Un webinaire est en cours d’exécution (%s × 🙂)',
    roomIsBusyConference: 'Une conférence est en cours d’exécution (%s × 🙂)',
    sizeLimitReached: 'Le nombre d utilisateurs est limité. Celle-ci est atteinte',
    roomBooked: 'Une reunion aura bientôt lieu ici: <b>%s</b>.',
  },
  videoMenu: {
    hint: 'Accèder au menu',
    expand: 'Agrandir',
    pip: 'Être mis en avant',
    fullscreen: 'Plein écran',
    volume: 'Volume ±',
    restore: 'Restaurer',
    kick: 'Exclure',
    mute: 'Muet',
  },
  controls: {
    ss: 'Partage %s d’écran',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Sortir',
    destroy: 'Éliminer',
    xroom: 'Propulsé par xroom',
    settings: 'Réglages',
    plugins: 'Plugins',
    media: 'Média',
    more: 'Plus',
    letMeSpeak: 'Lever la main',
    lock: 'Verrouiller',
  },
  lockStatus: {
    locked: 'La salle est verrouillée',
    open: 'La salle est ouverte',
    protected: 'La salle est protégée par un mot de passe',
    placeholder: 'Mot de passe d accès',
  },
  reactions: {
    letMeSpeak: 'Je souhaite parler',
  },
  waiting: {
    invite: 'Inviter les participants',
    beforeCopy: 'cliquez pour copier',
    afterCopy: 'Copié. Vous pouvez maintenant partager!',
    webinar: 'Le Webinaire n’a pas encore commencé',
  },
  video: {
    you: 'Vous (cliquez pour renommer)',
    someone: 'Quelqu’un',
    knocking: 'frappe pour entrer...',
    poorNet: 'connexion faible',
  },
  chat: {
    fileSending: 'Envoyer un fichier: ',
    fileReceived: 'Fichier reçu: ',
    inputPlaceholder: 'tapez un message et appuyez sur entrée ...',
    me: 'moi',
    dropMe: 'Déposer ici !',
  },
  webinar: {
    peersCount: '%s personne(s) actuellement en ligne',
  },
  settings: {
    experimental: '*) fonction bêta, fonctionnement instable',
    screenFace: 'Afficher la caméra pendant le partage d’écran (BETA)',
    flipFace: 'Caméra miroir',
    audioQ: 'Qualité audio',
    videoQ: 'Qualité vidéo',
    screenQ: 'Qualité du partage d écran',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: 'Démarrer des chats sans aperçu',
    soundEffects: 'Effets sonores',
    noisyBackground: 'Je suis dans un endroit bruyant',
    rtcDebug: 'Debogue RTC',
    audioDevices: 'Sources audio',
    videoDevices: 'Sources vidéo',
    language: 'Langue',
    theme: 'Couleur du thème',
    server: 'Serveur',
    keepControls: 'Garder le menu contrôle visible',
  },
  plugins: {
    by: 'par',
    size: 'Taille: %s kB',
    searchPlaceholder: 'cherche...',
    source: 'Code source:',
    apiDocs: 'API docs',
    vendor: 'Éditeur:',
    add: {
      title: 'Ajouter un nouveau plugin',
      descr: '⚙️ Vous développez un nouveau plugin? Ajoutez-le ici pour tester. Il n’est pas enregistré, le rechargement de la page la supprime de la mémoire.',
      name: 'Quel est le nom du plugin?',
      rootUrl: 'Ou est la racine du plugin?',
      loaded: 'SUPER!! Tout a marché!',
      loadFailed: 'Échec du chargement du plugin',
    }
  },
}
