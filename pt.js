export default {
  self: 'xroom',
  on: 'Ligado',
  off: 'Desligado',
  title: 'Precisa de uma sala de conferência?',
  buttons: {
    ok: 'OK',
    yes: 'Sim',
    no: 'Não',
    cancel: 'Cancelar',
    retry: 'De novo',
    chooseWindow: 'Escolher janela',
    wholeScreen: 'Ecrã inteiro',
    install: 'Adicionar',
    uninstall: 'Remover',
    send: 'Enviar',
    close: 'Fechar',
    hide: 'Esconder',
    knock: 'Truz-Truz',
    allowIn: 'Permitir entrar',
    deny: 'Negar',
    enterAnyway: 'Entrar de qualquer forma',
    enterHost: 'Enter as a host',
    details: 'Details',
  },
  mbox: {
    notSupported: 'Parece que este navegador não suporta XROOM ou o WebRTC está desativado. 😢',
    success: 'Operação bem sucedida',
    failure: 'Operação falhou',
    enterRoomName: 'Digite o nome da sala',
    isCamOn: 'A camera está ligada?',
    isCamOnText: 'Verifique por favor se não bloqueou acidentalmente a camera e aperte "Repetir".',
    isMicOn: 'Microfone está ligado?',
    isMicOnText: 'Se deseja conversar, de permissão ao microfone. Apos dar permissão, aperte em "Repetir".',
    iWillOnlyWatch: 'Apenas irei assistir',
    iWillOnlyListen: 'Apenas irei ouvir',
    screenSharingText: 'Partilha de ecrã não permitida. Please ensure it is not blocked for this page.<br><br>Also this feature is only supported by modern browsers like Chrome or Firefox.',
    cannotFile: 'Como não recebemos seu ficheiro, não conseguimos envia-lo após diversas tentativas. Precisa o fazer aonde tem participantes.',
    cannotMessage: 'Como não recebemos sua mensage, não conseguimos envia-la após diversas tentativas. Precisa o fazer aonde tem participantes.',
    roomLockedText: 'Sala trancada',
    oops: 'Desculpe',
    kickedOutText: 'Você foi expulso',
    areYouSure: 'Tem certeza?',
    restartRequiredText: 'Esta alteração afecta muitos participantes, reniciação necessária, não se preocupe, será rápido!',
    onlySafariOnIOS: 'Em iOS apenas Safari é compativel. "Obrigado", Apple!',
    cannotLoadPlugin: 'Plugin "%s" não é compativel com o browser',
    confirmFileSend: 'Deseja enviar?',
    whatIsYourName: 'Digite seu nome',
    setVideoVolume: 'Definir volume para este vídeo',
    roomLockedTryKnockText: 'Sala bloqueada de momento. Peça permissão para entrar "batendo" a porta.',
    knockingFailedText: 'Tentativa de bater falhou',
    doYouWantToKick: 'Quer expulsar este utilizador?',
    deviceChanged: 'Adicionou/Removeu novo dispositivo. Se não estiver a funcionar, escolha manualmente a partir das definições.',
    allowCameraPlz: 'Após apertar OK <b>pertmitirá o</b> xroom a usar sua camera.<br><br>Não se preocupe! Poderá desligar novamente antes de entrar em uma sala a partir do menu inferior se quer permanecer invisivel.',
    tooOldBrowser: 'Navegador muito antigo ou produzido pela Microsoft. Muitas funcionalidades podem não estar disponiveis.',
    pluginsLoadFailed: 'Falha ao carregar plugin',
    protoExpired: 'Versão muito antiga. Aperte por favor Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 para recarregar. Se voltar a ver esta imagem, por favor limpe o chache.',
    peerError: 'Ocorreu um erro ao trocar informações com o ponto de acesso. Sugerimos que recarregue a página.',
    enterpriseOnly: 'Funcionalidades apenas para empresas.',
    pluginSuggested: 'Utilizador %s sugeriu para instalar o plugin %s. Proceder?',
    hostRoleRequired: 'Funcionalidades de afitrião necessária para esta operação.',
    alreadyHosted: 'Sala virtual com este nome já em uso. Não crie salas identivas em navegadores diferentes. 😉',
    roomLockedPassword: 'Sala protegida com senha. Insere a senha se tem acesso.',
    roomDestroyed: 'Sala foi removida. Será redirecionado para a página inicial.',
    roomBooked: 'Sala virtual agendada, não poderá ser criada até que agendamento expire ou seja removida.',
    nameRequired: 'Room host requires you to set your name first.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
    copyFailed: 'Copying failed. This may be a result of your device restrictions.',
    noCryptoWarning: 'This browser does not support cryptography. It is not safe to continue.',
    bigFileDecryptWarn: 'Downloading has started. It may take a few seconds to decrypt the file.',
    noSTUN: 'We have detected that you were unable to connect to your meeting. This is likely due to a local connection or firewall issue. Our systems are validated as currently working. Try to test using another browser, use incognito mode or switch to another network before reconnecting.<br><br>Please read the <a href="https://xroom.app/en/blog/2020-08-07-experiencing-network-or-connection-issues" target="_blank">following article</a> for more information here.',
  },
  notify: {
    slowPlugins: 'Os plugins levam muito tempo para carregar. Considere remover o mais pesado.',
  },
  home: {
    nisdos: 'Não utilizamos cockies',
    title: 'Your personal conference room',
    btnGo: 'Criar!',
    knowMore: 'Sobre xroom',
    nameRoom: 'nome da sala:',
    placeholder: 'escreva aqui',
    rejoinRoom: 'ou juntar-se novamente',
  },
  wl: {
    poweredBy: 'Desenvolvido por ',
  },
  modes: {
    1: 'Conferencia',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Escolha a tipo de sala',
    checkIt: 'Verifique seu microfone e pentado',
    btnGo: 'Entrar',
    knockDenied: 'Seu pedido para entrar foi negado. Não pode entrar na sala. :(',
    knockRequested: 'A aguardar permissão. As pessoas podem vê-lo a partir do olho mágico. 👀',
    noAudio: '⚠️ Nenhum sinal de microfone detectado',
    roomIsBusyWebinar: 'A webinar/stream está em decorrer (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'A conference is now running (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Sala virtual limitada para uma quanidade de participantes que ja foi atingida',
    roomBooked: 'There\'s going to be an event in this room soon: <b>%s</b>.',
  },
  videoMenu: {
    hint: 'Alterar menu',
    expand: 'Expandir',
    pip: 'Keep on top',
    fullscreen: 'Tela inteira',
    volume: 'Volume ±',
    restore: 'Restaurar',
    kick: 'Expulsar',
    mute: 'Mudo',
  },
  controls: {
    ss: 'Partilha de ecrã %s',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Sair',
    destroy: 'Destruir',
    xroom: 'Desenvolvido por xroom',
    settings: 'Definições',
    plugins: 'Plugins',
    media: 'Media',
    more: 'Mais',
    letMeSpeak: 'Deixe-me falar',
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Room is locked',
    open: 'Room is open',
    protected: 'Room is password-protected',
    placeholder: 'room password',
  },
  reactions: {
    letMeSpeak: 'Quero falar!',
  },
  waiting: {
    invite: 'Convide seus colegas',
    beforeCopy: 'click para copiar',
    afterCopy: 'Copiado. Agora partilhe!',
    webinar: 'Webinar não foi iniciado',
  },
  video: {
    you: 'Voce (click para editar nome)',
    someone: 'Alguem',
    knocking: 'está a bater...',
    poorNet: 'Conexão probre',
  },
  chat: {
    fileSending: 'A enviar ficheiro: ',
    fileReceived: 'Ficheiro recebido: ',
    inputPlaceholder: 'escreva sua mensagem e aperte "enter" ...',
    me: 'eu',
    dropMe: 'Largar!',
  },
  webinar: {
    peersCount: '%s pessoas a assistir',
  },
  settings: {
    experimental: '*) experimental, works unstably',
    screenFace: 'Mostrar camera durante a partilhad e ecrã (BETA)',
    flipFace: 'Mirror your camera',
    audioQ: 'Audio quality',
    videoQ: 'Video quality',
    screenQ: 'Screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: 'Iniciar chat sem previsualização',
    soundEffects: 'Efeitos sonoros',
    noisyBackground: 'Estou em um local com barulho',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Recursos de áudio',
    videoDevices: 'Recursos de vídeo',
    language: 'Idioma',
    theme: 'Cor do tema',
    server: 'Servidor',
    keepControls: 'Manter controlos visíveis',
  },
  plugins: {
    by: 'por',
    size: 'Tamanho: %s kB',
    searchPlaceholder: 'procurar...',
    source: 'Código fonte:',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    add: {
      title: 'Adicionar novo plugin',
      descr: '⚙️ A desenvolver novo plugin? Adicione aqui para testar. Não foi salvo, Ao recarregar a página removerá da memória.',
      name: 'Qual nome do plugin?',
      rootUrl: 'Qual o root do plugin?',
      loaded: 'Sim! Foi descarregado!',
      loadFailed: 'Falhou descarregamento do plugin',
    }
  },
}
