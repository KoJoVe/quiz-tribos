function QuizCtrl($scope){

  $scope.perguntaAtual = 0
  $scope.triboVotos = [] //atualizada por updateTriboVotos
  $scope.triboPorc = [] //atualizada por updatetriboPorc

  $scope.atualizaOpcao = function(i){
    $scope.perguntas[$scope.perguntaAtual].selecionada = i
  }

  $scope.proximaPergunta = function(){
    if($scope.perguntaAtual == $scope.perguntas.length - 1){
      $scope.fim()
    } else {
      $scope.perguntaAtual += 1
    }
  }

  $scope.updateTriboVotos = function() {
    //inicializa array de votos
    $scope.triboVotos = []
    var length = $scope.tribos.length
    for(var i = 0; i<length; i++){
      $scope.triboVotos[i] = 0
    }

    //adiciona votos as respostas
    $scope.perguntas.forEach(function(pergunta) {
      var selecionada = pergunta.selecionada
      var valores = pergunta.respostas[selecionada].valores
      for(var i = 0; i<length; i++){
        $scope.triboVotos[i] += valores[i]
      }
    })
  }

  $scope.updateTriboPorc = function() {
    $scope.triboPorc = []
    var length = $scope.triboVotos.length
    var soma = eval($scope.triboVotos.join('+'))

    if(soma == 0)
      return;

    for(var i = 0; i<length; i++){
      $scope.triboPorc[i] = $scope.triboVotos[i]*100/soma
    }
  }

  $scope.fim = function() {
    $scope.updateTriboVotos()
    $scope.updateTriboPorc()

    alert(JSON.stringify($scope.triboPorc))
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

  $scope.perguntas = [
    {pergunta: 'Minha prioridade na hora de gastar o meu dinheiro é com:', respostas: [   
      {resposta: 'Roupas/meu carro,  aparência é o cartão de visitas.', valores: [0,2,0,0,0,0,0,0,0]},
      {resposta: 'Jogos, claro!', valores: [0,0,0,0,2,0,0,0,0]},
      {resposta: 'Suplemento, não adianta só se matar de malhar.', valores: [0,0,0,0,0,0,0,2,0]},
      {resposta: 'Shows de rock. Nunca perderia a oportunidade de ver uma  lenda ao vivo.', valores: [0,0,0,0,0,2,0,0,0]},
      {resposta: 'Parafina. Impossível é ficar sem surfar por um dia.', valores: [1,0,0,0,0,0,0,0,0]},
      {resposta: 'Equipamentos para o meu skate estar sempre preparado para as manobras.', valores: [0,0,0,0,0,0,0,0,2]},
      {resposta: 'Mostra de filmes. Não é fácil encontrar filmes de qualidade nos cinemas.', valores: [0,0,0,2,0,0,0,0,0]},
      {resposta: 'Não gasto meu dinheiro, acredito em um mundo sustentável.', valores: [0,0,2,0,0,0,0,0,0]},
      {resposta: 'Com baile funk. Se joga!', valores: [0,0,0,0,0,0,2,0,0]}
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
      {resposta: 'Moleza, eu curto a manhã', valores: [1,0,1,0,0,0,0,1,0]},
      {resposta: 'Impossível, eu durmo muito tarde.', valores: [0,1,0,1,1,1,0,0,0]},
      {resposta: 'Aceitável, dependendo do que vou fazer.', valores: [0,0,0,0,0,0,1,0,1]}
    ]},
    {pergunta: 'Celular pra mim serve para:', respostas: [    
      {resposta: 'Conversar com a galera.', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'Tirar foto.', valores: [0,0,0,1,0,0,0,1,0]},
      {resposta: 'Só ligar e olhe lá.', valores: [1,0,1,0,0,0,0,0,0]},
      {resposta: 'Ouvir música.', valores: [0,0,0,0,0,1,1,0,1]},
      {resposta: 'Testando novos aplicativos.', valores: [0,0,0,0,1,0,0,0,0]}
    ]},
    {pergunta: 'Uso muito a expressão:', respostas: [   
      {resposta: 'Relaxa ai.', valores: [1,0,0,0,0,0,0,0,1]},
      {resposta: 'Coé', valores: [0,0,0,0,0,0,1,1,0]},
      {resposta: 'Como você nunca ouviu falar de ...', valores: [0,1,0,1,0,1,0,0,0]},
      {resposta: 'LOL', valores: [0,0,0,0,1,0,0,0,0]},
      {resposta: 'Energia muito boa.', valores: [0,0,1,0,0,0,0,0,0]}
    ]},
    {pergunta: 'Meu sapato ideal é:', respostas: [    
      {resposta: 'All-star preto.', valores: [0,0,0,0,1,1,0,0,0]},
      {resposta: 'Descalço ou de chinelo.', valores: [1,0,1,0,0,0,0,0,0]},
      {resposta: 'Salto ou topsider.', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'Tênis de cano alto.', valores: [0,0,0,1,0,0,0,0,1]},
      {resposta: 'Tênis ou salto plataforma.', valores: [0,0,0,0,0,0,1,1,0]}
    ]},
    {pergunta: 'Gosto de comer:', respostas: [    
      {resposta: 'Japonês.', valores: [0,1,0,0,0,0,0,0,0]},
      {resposta: 'Saladinha.', valores: [0,0,0,0,0,0,0,1,0]},
      {resposta: 'Sanduba natural.', valores: [1,0,1,0,0,0,0,0,0]},
      {resposta: 'Fast food.', valores: [0,0,0,0,1,1,0,0,1]},
      {resposta: 'Fondue.', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'Churrasco.', valores: [0,0,0,0,0,0,1,0,0]}
    ]},
    {pergunta: 'Aproveito os feriadões para:', respostas: [   
      {resposta: 'Fazer atividades ao ar livre.', valores: [1,0,1,0,0,0,0,0,1]},
      {resposta: 'Ir para um festival de rock.', valores: [0,0,0,0,1,1,0,0,0]},
      {resposta: 'Ler um bom livro.', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'Ir pra night.', valores: [0,1,0,0,0,0,1,1,0]}
    ]},
    {pergunta: 'Quando não estou dormindo eu estou:', respostas: [    
      {resposta: 'No computador.', valores: [0,0,0,1,1,0,0,0,0]},
      {resposta: 'Me exercitanto.', valores: [1,0,0,0,0,0,0,1,0]},
      {resposta: 'Na rua.', valores: [0,0,0,0,0,0,1,0,1]},
      {resposta: 'Ouvindo música.', valores: [0,0,0,0,0,1,0,0,0]},
      {resposta: 'No meio do mato.', valores: [0,0,1,0,0,0,0,0,0]},
      {resposta: 'Fazendo compras.', valores: [0,1,0,0,0,0,0,0,0]}
    ]},
    {pergunta: 'Que estilo não falta na sua playlist', respostas: [   
      {resposta: 'Rap.', valores: [0,0,0,0,0,0,0,0,1]},
      {resposta: 'Rock.', valores: [0,0,0,0,1,1,0,0,0]},
      {resposta: 'Funk.', valores: [0,0,0,0,0,0,1,0,0]},
      {resposta: 'Eletrônica / Hip Hop.', valores: [0,1,0,0,0,0,0,1,0]},
      {resposta: 'Jazz.', valores: [0,0,0,1,0,0,0,0,0]},
      {resposta: 'Reggae.', valores: [1,0,1,0,0,0,0,0,0]}
    ]},
    {pergunta: 'Festa boa pra mim tem:', respostas: [   
      {resposta: 'Gente bonita.', valores: [0,1,0,0,0,0,0,1,0]},
      {resposta: 'Open bar.', valores: [0,0,0,0,0,0,1,0,0]},
      {resposta: 'Energia boa.', valores: [1,0,1,0,0,0,0,0,1]},
      {resposta: 'Música de qualidade.', valores: [0,0,0,1,0,1,0,0,0]},
      {resposta: 'O conforto da minha casa.', valores: [0,0,0,0,1,0,0,0,0]}
    ]},
    {pergunta: 'Se o mundo acabasse hoje, eu:', respostas: [    
      {resposta: 'Morreria lindo(a).', valores: [0,1,0,0,0,0,1,1,0]},
      {resposta: 'Não pensei no assunto.', valores: [1,0,0,0,0,0,0,0,1]},
      {resposta: 'Não seria nada. Nós somos apenas parte de um grande incerto.', valores: [0,0,1,1,0,0,0,0,0]},
      {resposta: 'Seria guardado pra eternidade.', valores: [0,0,0,0,1,1,0,0,0]},
    ]}
  ]

}