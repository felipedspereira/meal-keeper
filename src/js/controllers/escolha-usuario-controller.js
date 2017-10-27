angular.module('nutrikeeper').controller('EscolhaUsuarioController', ['$scope', 'RefeicaoService', '$location', function ($scope, RefeicaoService, $location) {
    $scope.iniciarDb = usuario => {
        RefeicaoService.initDatabase(usuario);
        $location.path('/refeicoes');
    };
}]);