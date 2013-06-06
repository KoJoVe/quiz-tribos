var app = angular.module('QuizApp', ['mongolabResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'inicio.html'
  }).when('/resultados', {
    templateUrl: 'resultado.html'
  }).when('/teste', {
    templateUrl: 'teste.html'
  });
  $locationProvider.html5Mode(true);
}]);

app.constant('API_KEY', 'Mg3dX4xGqwJWmkFJz6AwaDeR8VGuD-2R');
app.constant('DB_NAME', 'tribos-dev');

app.factory('Entrada', function($mongolabResource) {
    return $mongolabResource('entradas');
});

app.controller('QuizCtrl', function($scope, $http, $location, Entrada) {

  $http.get('/api/dados').success(function(res) {
    $scope.tribos = res.tribos 
    $scope.perguntas = res.perguntas
  })
  $scope.perguntaAtual = 0
  $scope.opcoesSelecionadas = [] //atualizada por updateOpcoesSelecionadas
  $scope.triboPontos = [] //atualizada por updateTriboPontos
  $scope.triboPorc = [] //atualizada por updatetriboPorc
  $scope.resultFinal = [
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
    {nome: "", porc: 0},
  ]

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

    var porc = $scope.triboPorc
    $scope.ordena(porc)
    $location.path('/resultados')
    
  }

  $scope.ordena = function(porc) {
    var length = $scope.tribos.length
    for(var i = 0; i<length; i++) {
      $scope.resultFinal[i].nome = $scope.tribos[i].nome
      $scope.resultFinal[i].porc = porc[i]
      $scope.resultFinal[i].porc = Math.round($scope.resultFinal[i].porc)
    }
    $scope.resultFinal.sort(function(a, b) {return b.porc - a.porc})
  }
})