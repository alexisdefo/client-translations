export default {
  self: 'xroom',
  on: 'prendido',
  off: 'apagado',
  title: '¿Quieres una conferencia?',
  buttons: {
    ok: 'OK',
    yes: 'Sí',
    no: 'No',
    cancel: 'Cancelar',
    retry: 'Reintentar',
    chooseWindow: 'Elegir ventana',
    wholeScreen: 'Pantalla completa',
    install: 'Agregar',
    uninstall: 'Desinstalar',
    send: 'Enviar',
    close: 'Cerrar',
    hide: 'Esconder',
    knock: 'Tocar',
    allowIn: 'Admitir',
    deny: 'Denegar',
    enterAnyway: 'Entrar de todos modos',
    enterHost: 'Enter as a host',
    details: 'Detalles',
  },
  mbox: {
    notSupported: 'Parece que este navegador no soporta XROOM o WebRTC está deshabilitado. 😢',
    success: 'Operación exitosa',
    failure: 'Operación fallida',
    enterRoomName: 'Ingresa un nombre de sala',
    isCamOn: '¿Cámara encendida?',
    isCamOnText: 'Revisa si la cámara/el mic no están bloqueados para este sitio y presiona "Reintentar".',
    isMicOn: '¿Micrófono encendido?',
    isMicOnText: 'Si deseas hablar, debes habilitar el mic. Habilítalo para esta página y presiona "Reintentar".',
    iWillOnlyWatch: 'Solo miraré',
    iWillOnlyListen: 'Solo escucharé',
    screenSharingText: 'No es posible compartir la pantalla. Asegúrate de que la función no esté bloqueada para esta página.<br><br>La función sólo está disponible en navegadores modernos como Chrome o Firefox.',
    cannotFile: 'Como no guardamos tus archivos, no podemos entregarlos despues de que alguien se conecta. Debes mandarlos cuando tus invitados estan conectados.',
    cannotMessage: 'Como no guardamos tus mensajes, entregarlos despues de que alguien se conecta. Debes mandarlos cuando tus invitados estan conectados.',
    roomLockedText: 'Esta sala está cerrado con llave',
    oops: 'Lo sentimos',
    kickedOutText: 'Te han expulsado',
    areYouSure: '¿Estás seguro?',
    restartRequiredText: 'Esta opcion afecta muchas cosas, así que hay que recargar la pagina. ¡Es rápido, no te preocupes!',
    onlySafariOnIOS: 'En iOS nomas Safari es sostenido . ¡"Gracias", Apple!',
    cannotLoadPlugin: 'El plugin "%s" no es compatible con tu navegador',
    confirmFileSend: '¿Deseas enviar esto?',
    whatIsYourName: 'Ingresa un nuevo nombre',
    setVideoVolume: 'Establece el volumen del video',
    roomLockedTryKnockText: 'Por ahora, la sala está bloqueada. Puedes pedir permiso para entrar tocando la puerta.',
    knockingFailedText: 'Intento de tocar fallo',
    doYouWantToKick: '¿Deseas expulsar a este usuario?',
    deviceChanged: 'Has añadido/quitado un dispositivo de entrada. Si no funciona, elígelo manualmente en las opciones.',
    allowCameraPlz: 'Despues de presionar OK, <b>permite</b> que xroom use la cámara.<br><br>¡No te preocupes! Podrás apagarla antes de entrar a la sala desde la barra de opciones si deseas que otros no te vean.',
    tooOldBrowser: 'Tu navegador es muy antiguo o es de Microsoft. Perderás varias funciones.',
    pluginsLoadFailed: 'Error al cargar los plugins',
    protoExpired: 'Versión del cliente es muy antigua. Presione Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 para volver a reiniciar. Si luego vuelve a ver este mensaje, borre la memoria caché del navegador manualmente.',
    peerError: 'Algo salió mal al intercambiar datos con sus compañeros. Sugerimos volver a reiniciar la página.',
    enterpriseOnly: 'Esto es una función que solo se encuentra en enterprise.',
    pluginSuggested: 'El usuario %s sugirió instalar el %s completo. ¿Desea hacerlo?',
    hostRoleRequired: 'Se requiere que tu seas el host para esta acción.',
    alreadyHosted: 'El cuarto ya esta hospedado. No ingrese al cuarto desde 2 pestañas seperadas 😉',
    roomLockedPassword: 'El cuarto está cerrado con contraseña. Si conoces la contraseña, escríbela para entrar.',
    roomDestroyed: 'El cuarto ha sido cancelado. Serás redirigido a la página de inicio.',
    roomBooked: 'El cuarto esta reservado y no se puede crear hasta que expire la reservación.',
    nameRequired: 'El anfitrión del cuarto requiere que establezcas tu nombre primero..',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
    copyFailed: 'Copying failed. This may be a result of your device restrictions.',
    noCryptoWarning: 'This browser does not support cryptography. It is not safe to continue.',
    bigFileDecryptWarn: 'Downloading has started. It may take a few seconds to decrypt the file.',
    noSTUN: 'We have detected that you were unable to connect to your meeting. This is likely due to a local connection or firewall issue. Our systems are validated as currently working. Try to test using another browser, use incognito mode or switch to another network before reconnecting.<br><br>Please read the <a href="https://xroom.app/en/blog/2020-08-07-experiencing-network-or-connection-issues" target="_blank">following article</a> for more information here.',
  },
  notify: {
    slowPlugins: 'Plugins Plugins toman demasiado tiempo para cargar. Considere quitar los más grandes.',
  },
  home: {
    nisdos: 'No usamos cookies',
    title: 'Tu propio cuarto de conferencias',
    btnGo: '¡OK!',
    knowMore: 'Saber mas de xroom',
    nameRoom: 'nombra tu cuarto:',
    placeholder: 'escribe aquí',
    rejoinRoom: 'o reingresar',
  },
  wl: {
    poweredBy: 'Activado por',
  },
  modes: {
    1: 'Conferencia',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Elija el tipo de cuarto',
    checkIt: 'Verifica el mic y tu corte de cabello',
    btnGo: 'Entrar',
    knockDenied: 'Tu solicitud de acceso fue denegada. No puedes entrar al cuarto. ☹️',
    knockRequested: 'Esperando permiso. Espera un momento. 👀',
    noAudio: '⚠️ No se detecta señal de mic',
    roomIsBusyWebinar: 'Un webinar/stream esta corriendo (%s × 🙂)',  // validate translation
    roomIsBusyConference: 'Una conferencia está corriendo (%s × 🙂)',  // validate translation
    sizeLimitReached: 'Esta cuarto esta limitada por tamaño y ya se alcanzó el límite',
    roomBooked: 'Va a haber un evento en esta cuarto pronto: <b>%s</b>',
  },
  videoMenu: {
    hint: 'Cambiar barra de opciones',
    expand: 'Expandir',
    pip: 'Keep on top',
    fullscreen: 'Pantalla completa',
    volume: 'Volumen ±',
    restore: 'Restaurar',
    kick: 'Expulsar',
    mute: 'Silenciar',
  },
  controls: {
    ss: 'Compartir pantalla %s',
    cam: 'Cámara %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Salir',
    destroy: 'Cancelar chat',
    xroom: 'Desarrollado por xroom',
    settings: 'Opciones',
    plugins: 'Plugins',
    media: 'Media',
    more: 'Más',
    letMeSpeak: '¡Déjame hablar!',
    lock: 'Cerrar con llave',
  },
  lockStatus: {
    locked: 'El cuarto esta cerrado',
    open: 'El cuarto esta abierto',
    protected: 'El cuarto esta cerrado con llave',
    placeholder: 'Contraseña del cuarto',
  },
  reactions: {
    letMeSpeak: '¡Quiero hablar!',
  },
  waiting: {
    invite: 'Invita a tus colegas',
    beforeCopy: 'clic para copiar',
    afterCopy: 'Copiado ¡Compártelo!',
    webinar: 'El webinar aún no ha empezado',
  },
  video: {
    you: 'Tú (clic para nombrar)',
    someone: 'Alguien',
    knocking: 'Tocar la puerta...',
    poorNet: 'conexión débil',
  },
  chat: {
    fileSending: 'Enviando archivo: ',
    fileReceived: 'Archivo recibido: ',
    inputPlaceholder: 'Escribe un mensaje y presiona enter...',
    me: 'yo',
    dropMe: '¡Suéltalo aquí!',
  },
  webinar: {
    peersCount: '%s personas mirando',
  },
  settings: {
    experimental: '*) experimental, trabaja inestable',
    screenFace: 'Mostrar cámara al compartir pantalla (BETA)',
    flipFace: 'Mirror your camera',
    audioQ: 'Calidad de audio',
    videoQ: 'Calidad de video',
    screenQ: 'Calidad de pantalla compartida',
    bandwidthQ: 'perfil de banda ancha ',
    autoGetIn: 'Empezar chat sin previsualización',
    soundEffects: 'Efectos de sonido',
    noisyBackground: 'Estoy en un lugar ruidoso',
    rtcDebug: 'Depurar RTC',
    audioDevices: 'Aparato de audio',
    videoDevices: 'Aparato de video',
    language: 'Idioma',
    theme: 'Opciones de color',
    server: 'Servidor webb',
    keepControls: 'Mantener la barra de opciones visible',
  },
  plugins: {
    by: 'de',
    size: 'Tamaño: %s kB',
    searchPlaceholder: 'buscar...',
    source: 'Código fuente:',
    apiDocs: 'Docs API',
    vendor: 'Vendedor:',
    add: {
      title: 'Agregar plugin nuevo',
      descr: '⚙️ ¿Desarrollando un plugin nuevo? Agrégalo aquí para probar. No se guarda, al reinciar la página se borra de la memoria.',
      name: '¿Nombre del plugin?',
      rootUrl: '¿Dónde está la fuente del plugin?',
      loaded: '¡Sí! ¡Se cargó!',
      loadFailed: 'Falló la carga del plugin',
    },
  },
}
