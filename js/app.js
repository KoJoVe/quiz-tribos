var app = angular.module('QuizApp', ['mongolabResource'])

app.constant('API_KEY', 'Mg3dX4xGqwJWmkFJz6AwaDeR8VGuD-2R');
app.constant('DB_NAME', 'tribos-dev');

app.factory('Entrada', function($mongolabResource) {
    return $mongolabResource('entradas');
});

app.controller('QuizCtrl', function($scope, Entrada) {

  $scope.perguntaAtual = 0
  $scope.opcoesSelecionadas = [] //atualizada por updateOpcoesSelecionadas
  $scope.triboPontos = [] //atualizada por updateTriboPontos
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

  $scope.updateOpcoesSelecionadas = function() {
    $scope.opcoesSelecionadas = []
    var length = $scope.tribos.length
    for(var i = 0; i<length; i++){
      $scope.opcoesSelecionadas[i] = $scope.perguntas[i].selecionada
    }
  }

  $scope.updateTriboPontos = function() {
    //inicializa array de votos
    $scope.triboPontos = []
    var length = $scope.tribos.length
    for(var i = 0; i<length; i++){
      $scope.triboPontos[i] = 0
    }

    //adiciona votos as respostas
    $scope.perguntas.forEach(function(pergunta) {
      var selecionada = pergunta.selecionada
      var valores = pergunta.respostas[selecionada].valores
      for(var i = 0; i<length; i++){
        $scope.triboPontos[i] += valores[i]
      }
    })
  }

  $scope.updateTriboPorc = function() {
    $scope.triboPorc = []
    var length = $scope.triboPontos.length
    var soma = eval($scope.triboPontos.join('+'))

    if(soma == 0)
      return;

    for(var i = 0; i<length; i++){
      $scope.triboPorc[i] = $scope.triboPontos[i]*100/soma
    }
  }

  $scope.fim = function() {
    $scope.updateOpcoesSelecionadas()
    $scope.updateTriboPontos()
    $scope.updateTriboPorc()

    var entrada = new Entrada({session: window.session, opcoes: $scope.opcoesSelecionadas, pontos: $scope.triboPontos, porcentagens: $scope.triboPorc})
    entrada.saveOrUpdate()
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
    {texto: 'Minha prioridade na hora de gastar o meu dinheiro é com:', respostas: [   
      {texto: 'Roupas/meu carro,  aparência é o cartão de visitas.', valores: [0,2,0,0,0,0,0,0,0]},
      {texto: 'Jogos, claro!', valores: [0,0,0,0,2,0,0,0,0]},
      {texto: 'Suplemento, não adianta só se matar de malhar.', valores: [0,0,0,0,0,0,0,2,0]},
      {texto: 'Shows de rock. Nunca perderia a oportunidade de ver uma  lenda ao vivo.', valores: [0,0,0,0,0,2,0,0,0]},
      {texto: 'Parafina. Impossível é ficar sem surfar por um dia.', valores: [1,0,0,0,0,0,0,0,0]},
      {texto: 'Equipamentos para o meu skate estar sempre preparado para as manobras.', valores: [0,0,0,0,0,0,0,0,2]},
      {texto: 'Mostra de filmes. Não é fácil encontrar filmes de qualidade nos cinemas.', valores: [0,0,0,2,0,0,0,0,0]},
      {texto: 'Não gasto meu dinheiro, acredito em um mundo sustentável.', valores: [0,0,2,0,0,0,0,0,0]},
      {texto: 'Com baile funk. Se joga!', valores: [0,0,0,0,0,0,2,0,0]}
    ]},
    {texto: 'O que mais me irrita é::', respostas: [   
      {texto: 'Quando a compra não é autorizada.', valores: [0,1,0,0,0,0,0,0,0]},
      {texto: 'Ficar preso numa fase.', valores: [0,0,0,0,0,0,0,0,0]},
      {texto: 'Ser chamado(a) de magrelo(a).', valores: [0,0,0,0,1,0,0,1,0]},
      {texto: 'Quando os ídolos do rock brigam e acabam com uma banda.', valores: [0,0,0,0,0,1,0,0,0]},
      {texto: 'Mar flat.', valores: [2,0,0,0,0,0,0,0,0]},
      {texto: 'Pedra portuguesa.', valores: [0,0,0,0,0,0,0,0,1]},
      {texto: 'Não saber opinar sobre um assunto.', valores: [0,0,0,1,0,0,0,0,0]},
      {texto: 'Discórdia.', valores: [0,0,1,0,0,0,0,0,0]},
      {texto: 'O fim da furacão.', valores: [0,0,0,0,0,0,1,0,0]}
    ]},
    {texto: 'Acordar cedo pra mim é:', respostas: [    
      {texto: 'Moleza, eu curto a manhã', valores: [1,0,1,0,0,0,0,1,0]},
      {texto: 'Impossível, eu durmo muito tarde.', valores: [0,1,0,1,1,1,0,0,0]},
      {texto: 'Aceitável, dependendo do que vou fazer.', valores: [0,0,0,0,0,0,1,0,1]}
    ]},
    {texto: 'Celular pra mim serve para:', respostas: [    
      {texto: 'Conversar com a galera.', valores: [0,1,0,0,0,0,0,0,0]},
      {texto: 'Tirar foto.', valores: [0,0,0,1,0,0,0,1,0]},
      {texto: 'Só ligar e olhe lá.', valores: [1,0,1,0,0,0,0,0,0]},
      {texto: 'Ouvir música.', valores: [0,0,0,0,0,1,1,0,1]},
      {texto: 'Testando novos aplicativos.', valores: [0,0,0,0,1,0,0,0,0]}
    ]},
    {texto: 'Uso muito a expressão:', respostas: [   
      {texto: 'Relaxa ai.', valores: [1,0,0,0,0,0,0,0,1]},
      {texto: 'Coé', valores: [0,0,0,0,0,0,1,1,0]},
      {texto: 'Como você nunca ouviu falar de ...', valores: [0,1,0,1,0,1,0,0,0]},
      {texto: 'LOL', valores: [0,0,0,0,1,0,0,0,0]},
      {texto: 'Energia muito boa.', valores: [0,0,1,0,0,0,0,0,0]}
    ]},
    {texto: 'Meu sapato ideal é:', respostas: [    
      {texto: 'All-star preto.', valores: [0,0,0,0,1,1,0,0,0]},
      {texto: 'Descalço ou de chinelo.', valores: [1,0,1,0,0,0,0,0,0]},
      {texto: 'Salto ou topsider.', valores: [0,1,0,0,0,0,0,0,0]},
      {texto: 'Tênis de cano alto.', valores: [0,0,0,1,0,0,0,0,1]},
      {texto: 'Tênis ou salto plataforma.', valores: [0,0,0,0,0,0,1,1,0]}
    ]},
    {texto: 'Gosto de comer:', respostas: [    
      {texto: 'Japonês.', valores: [0,1,0,0,0,0,0,0,0]},
      {texto: 'Saladinha.', valores: [0,0,0,0,0,0,0,1,0]},
      {texto: 'Sanduba natural.', valores: [1,0,1,0,0,0,0,0,0]},
      {texto: 'Fast food.', valores: [0,0,0,0,1,1,0,0,1]},
      {texto: 'Fondue.', valores: [0,0,0,1,0,0,0,0,0]},
      {texto: 'Churrasco.', valores: [0,0,0,0,0,0,1,0,0]}
    ]},
    {texto: 'Aproveito os feriadões para:', respostas: [   
      {texto: 'Fazer atividades ao ar livre.', valores: [1,0,1,0,0,0,0,0,1]},
      {texto: 'Ir para um festival de rock.', valores: [0,0,0,0,1,1,0,0,0]},
      {texto: 'Ler um bom livro.', valores: [0,0,0,1,0,0,0,0,0]},
      {texto: 'Ir pra night.', valores: [0,1,0,0,0,0,1,1,0]}
    ]},
    {texto: 'Quando não estou dormindo eu estou:', respostas: [    
      {texto: 'No computador.', valores: [0,0,0,1,1,0,0,0,0]},
      {texto: 'Me exercitanto.', valores: [1,0,0,0,0,0,0,1,0]},
      {texto: 'Na rua.', valores: [0,0,0,0,0,0,1,0,1]},
      {texto: 'Ouvindo música.', valores: [0,0,0,0,0,1,0,0,0]},
      {texto: 'No meio do mato.', valores: [0,0,1,0,0,0,0,0,0]},
      {texto: 'Fazendo compras.', valores: [0,1,0,0,0,0,0,0,0]}
    ]},
    {texto: 'Que estilo não falta na sua playlist', respostas: [   
      {texto: 'Rap.', valores: [0,0,0,0,0,0,0,0,1]},
      {texto: 'Rock.', valores: [0,0,0,0,1,1,0,0,0]},
      {texto: 'Funk.', valores: [0,0,0,0,0,0,1,0,0]},
      {texto: 'Eletrônica / Hip Hop.', valores: [0,1,0,0,0,0,0,1,0]},
      {texto: 'Jazz.', valores: [0,0,0,1,0,0,0,0,0]},
      {texto: 'Reggae.', valores: [1,0,1,0,0,0,0,0,0]}
    ]},
    {texto: 'Festa boa pra mim tem:', respostas: [   
      {texto: 'Gente bonita.', valores: [0,1,0,0,0,0,0,1,0]},
      {texto: 'Open bar.', valores: [0,0,0,0,0,0,1,0,0]},
      {texto: 'Energia boa.', valores: [1,0,1,0,0,0,0,0,1]},
      {texto: 'Música de qualidade.', valores: [0,0,0,1,0,1,0,0,0]},
      {texto: 'O conforto da minha casa.', valores: [0,0,0,0,1,0,0,0,0]}
    ]},
    {texto: 'Se o mundo acabasse hoje, eu:', respostas: [    
      {texto: 'Morreria lindo(a).', valores: [0,1,0,0,0,0,1,1,0]},
      {texto: 'Não pensei no assunto.', valores: [1,0,0,0,0,0,0,0,1]},
      {texto: 'Não seria nada. Nós somos apenas parte de um grande incerto.', valores: [0,0,1,1,0,0,0,0,0]},
      {texto: 'Seria guardado pra eternidade.', valores: [0,0,0,0,1,1,0,0,0]},
    ]}
  ]

})