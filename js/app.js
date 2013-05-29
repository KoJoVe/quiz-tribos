function QuizCtrl($scope){

  $scope.perguntaAtual = 0
  $scope.respostas = []

  $scope.atualizaOpcao = function(i){
    $scope.quiz[$scope.perguntaAtual].selecionada = i
  }

  $scope.proximaPergunta = function(){
    alert($scope.quiz[$scope.perguntaAtual].selecionada)
    $scope.respostas[$scope.perguntaAtual] = $scope.quiz[$scope.perguntaAtual].selecionada
    $scope.perguntaAtual += 1
  }

  $scope.tribos = [
    {nome: "surfista"},
    {nome: "patricinha"},
    {nome: "hippie"},
    {nome: "cult"},
    {nome: "nerd"},
    {nome: "rockeiro"},
    {nome: "funkeiro"},
    {nome: "rato de academia"},
    {nome: "skatista"},
  ]

  $scope.quiz = [
    {pergunta: 'Minha prioridade na hora de gastar o meu dinheiro é com:', respostas: [   
      {resposta: 'roupas/meu carro,  aparência é o cartão de visitas.', valores: [0,2,0,0,0,0,0,0,0]},
      {resposta: 'jogos, claro!', valores: [0,0,0,0,2,0,0,0,0]},
      {resposta: 'suplemento, não adianta só se matar de malhar.', valores: [0,0,0,0,0,0,0,2,0]},
      {resposta: 'shows de rock. Nunca perderia a oportunidade de ver uma  lenda ao vivo.', valores: [0,0,0,0,0,2,0,0,0]},
      {resposta: 'parafina. Impossível é ficar sem surfar por um dia.', valores: [1,0,0,0,0,0,0,0,0]},
      {resposta: 'equipamentos para o meu skate estar sempre preparado para as manobras.', valores: [0,0,0,0,0,0,0,0,2]},
      {resposta: 'mostra de filmes. Não é fácil encontrar filmes de qualidade nos cinemas.', valores: [0,0,0,2,0,0,0,0,0]},
      {resposta: 'Não gasto meu dinheiro, acredito em um mundo sustentável.', valores: [0,0,2,0,0,0,0,0,0]},
      {resposta: 'com baile funk. Se joga!', valores: [0,0,0,0,0,0,2,0,0]}
    ]},
    {pergunta: 'O que mais me irrita é::', respostas: [   
      {resposta: 'Quando a compra não é autorizada.', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'Ficar preso numa fase.', valores: [0,0,0,0,0,0,0,0,0]},
      {resposta: 'Ser chamado(a) de magrelo(a).', valores: [0,0,0,0,1,0,0,1,0]},
      {resposta: 'Quando os ídolos do rock brigam e acabam com uma banda.', valores: [0,0,0,0,0,1,0,0,0]},
      {resposta: 'Mar flat.', valores: [2,0,0,0,0,0,0,0,0]},
      {resposta: 'Pedra portuguesa.', valores: [0,0,0,0,0,0,0,0,1]},
      {resposta: 'Não saber opinar sobre um assunto.', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'Discórdia.', valores: [0,0,1,0,0,0,0,0,0]},
      {resposta: 'O fim da furacão.', valores: [0,0,0,0,0,0,1,0,0]}
    ]},
    {pergunta: 'Acordar cedo pra mim é:', respostas: [    
      {resposta: 'moleza, eu curto a manhã', valores: [1,0,1,0,0,0,0,1,0]},
      {resposta: 'impossível, eu durmo muito tarde', valores: [0,1,0,1,1,1,0,0,0]},
      {resposta: 'aceitável, dependendo do que vou fazer', valores: [0,0,0,0,0,0,1,0,1]}
    ]},
    {pergunta: 'Celular pra mim serve para:', respostas: [    
      {resposta: 'conversar com a galera', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'tirar foto', valores: [0,0,0,1,0,0,0,1,0]},
      {resposta: 'só ligar e olhe lá', valores: [1,0,1,0,0,0,0,0,0]},
      {resposta: 'ouvir música', valores: [0,0,0,0,0,1,1,0,1]},
      {resposta: 'testando novos aplicativos', valores: [0,0,0,0,1,0,0,0,0]}
    ]},
    {pergunta: 'Uso muito a expressão:', respostas: [   
      {resposta: 'relaxa ai', valores: [1,0,0,0,0,0,0,0,1]},
      {resposta: 'coé', valores: [0,0,0,0,0,0,1,1,0]},
      {resposta: 'como você nunca ouviu falar de ...', valores: [0,1,0,1,0,1,0,0,0]},
      {resposta: 'LOL', valores: [0,0,0,0,1,0,0,0,0]},
      {resposta: 'energia muito boa', valores: [0,0,1,0,0,0,0,0,0]}
    ]},
    {pergunta: 'Meu sapato ideal é:', respostas: [    
      {resposta: 'all-star preto', valores: [0,0,0,0,1,1,0,0,0]},
      {resposta: 'descalço/ chinelo', valores: [1,0,1,0,0,0,0,0,0]},
      {resposta: 'salto/topsider', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'tenis de cano alto', valores: [0,0,0,1,0,0,0,0,1]},
      {resposta: 'tenis/salto plataforma', valores: [0,0,0,0,0,0,1,1,0]}
    ]},
    {pergunta: 'Gosto de comer:', respostas: [    
      {resposta: 'japonês', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'saladinha', valores: [0,0,0,0,0,0,0,1,0]},
      {resposta: 'sanduba natural', valores: [1,0,1,0,0,0,0,0,0]},
      {resposta: 'fast food', valores: [0,0,0,0,1,1,0,0,1]},
      {resposta: 'fondue', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'churrasco', valores: [0,0,0,0,0,0,1,0,0]}
    ]},
    {pergunta: 'Aproveito os feriadões para:', respostas: [   
      {resposta: 'fazer atividades ao ar livre', valores: [1,0,1,0,0,0,0,0,1]},
      {resposta: 'ir para um festival de rock', valores: [0,0,0,0,1,1,0,0,0]},
      {resposta: 'ler um bom livro.', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'ir pra night', valores: [0,1,0,0,0,0,1,1,0]}
    ]},
    {pergunta: 'Quando não estou dormindo eu estou:', respostas: [    
      {resposta: 'no computador', valores: [0,0,0,1,1,0,0,0,0]},
      {resposta: 'me exercitanto', valores: [1,0,0,0,0,0,0,1,0]},
      {resposta: 'na rua', valores: [0,0,0,0,0,0,1,0,1]},
      {resposta: 'ouvindo música', valores: [0,0,0,0,0,1,0,0,0]},
      {resposta: 'no meio do mato', valores: [0,0,1,0,0,0,0,0,0]},
      {resposta: 'fazendo compras', valores: [0,1,0,0,0,0,0,0,0]}
    ]},
    {pergunta: 'Que estilo não falta na sua playlist', respostas: [   
      {resposta: 'Rap', valores: [0,0,0,0,0,0,0,0,1]},
      {resposta: 'Rock', valores: [0,0,0,0,1,1,0,0,0]},
      {resposta: 'Funk', valores: [0,0,0,0,0,0,1,0,0]},
      {resposta: 'Eletrônica / Hip Hop', valores: [0,1,0,0,0,0,0,1,0]},
      {resposta: 'Jazz', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'Reggae', valores: [1,0,1,0,0,0,0,0,0]}
    ]},
    {pergunta: 'Festa boa pra mim tem:', respostas: [   
      {resposta: 'Gente bonita', valores: [0,1,0,0,0,0,0,1,0]},
      {resposta: 'Open bar', valores: [0,0,0,0,0,0,1,0,0]},
      {resposta: 'Energia boa', valores: [1,0,1,0,0,0,0,0,1]},
      {resposta: 'Música de qualidade', valores: [0,0,0,1,0,1,0,0,0]},
      {resposta: 'O conforto da minha casa', valores: [0,0,0,0,1,0,0,0,0]}
    ]},
    {pergunta: 'Se o mundo acabasse hoje, eu:', respostas: [    
      {resposta: 'Morreria lindo (a)', valores: [0,1,0,0,0,0,1,1,0]},
      {resposta: 'Não pensei no assunto', valores: [1,0,0,0,0,0,0,0,1]},
      {resposta: 'não seria nada. Nós somos apenas parte de um grande incerto', valores: [0,0,1,1,0,0,0,0,0]},
      {resposta: 'seria guardado pra eternidade.', valores: [0,0,0,0,1,1,0,0,0]},
    ]}
  ]

}