var app = angular.module('QuizApp', []);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: 'templates/nome.html'})
    .when('/inicio', { templateUrl: 'templates/inicio.html' })
    .when('/teste', { templateUrl: 'templates/teste.html' })
    .when('/resultados', { templateUrl: 'templates/resultado.html' })
  $locationProvider.html5Mode(true);
});

app.controller('QuizCtrl', function($scope, $http, $location) {

  $scope.init = function() {
    $http.get('/api/dados').success(function(res) {
      $scope.tribos = res.tribos 
      $scope.perguntas = res.perguntas
    })

    $scope.nome = ''
    $scope.perguntaAtual = 0
  }

  $scope.init()

  $scope.atualizaOpcaoSelecionada = function(i){
    $scope.perguntas[$scope.perguntaAtual].selecionada = i
  }

  $scope.proximaPergunta = function(){
    if($scope.perguntaAtual == $scope.perguntas.length - 1){
      $scope.enviaResultados()
    } else {
      $scope.perguntaAtual += 1
    }
  }

  $scope.calcOpcoesSelecionadas = function() {
    return $scope.perguntas.map(function(pergunta) {
      return pergunta.selecionada
    })
  }

  $scope.calcPontos = function() {
    //inicializa array de pontos
    var pontos = []
    var length = $scope.tribos.length
    for(var i = 0; i<length; i++) {
      pontos[i] = 0;
    }

    //adiciona pontos as respostas
    $scope.perguntas.forEach(function(pergunta) {
      var selecionada = pergunta.selecionada
      var valores = pergunta.respostas[selecionada].valores
      for(var i = 0; i<length; i++){
        pontos[i] += valores[i]
      }
    })

    return pontos
  }

  $scope.calcPorcentagens = function(pontos) {
    var porcentagens = []
    var length = $scope.tribos.length
    var soma = eval(pontos.join('+'))

    if(soma == 0)
      return;

    for(var i = 0; i<length; i++){
      porcentagens[i] = pontos[i]*100/soma
    }

    return porcentagens
  }

  $scope.calcResultadoOrdenado = function(porcentagens) {
    var resultado = []
    var length = $scope.tribos.length
    for(var i = 0; i<length; i++) {
      resultado[i] = {
        nome: $scope.tribos[i].nome,
        porc: Math.round(porcentagens[i])
      }
    }
    resultado.sort(function(a, b) {return b.porcentagens - a.porcentagens})
    return resultado
  }

  $scope.enviaResultados = function() {
    var opcoesSelecionadas = $scope.calcOpcoesSelecionadas()
    var pontos = $scope.calcPontos()
    var porcentagens = $scope.calcPorcentagens(pontos)
    $scope.resultFinal = $scope.calcResultadoOrdenado(porcentagens)

    var entrada = {
      session: window.session, 
      opcoes: opcoesSelecionadas, 
      pontos: pontos, porcentagens: 
      porcentagens, nome: $scope.nome
    }
    $http.post('/api/entradas', entrada).success(function() {
      alert('sucesso!')
    })
    
    $location.path('/resultados')
  }
})