angular.module('meal-keeper').controller('RefeicaoController', ['$scope', 'RefeicaoService', '$routeParams',
    function ($scope, RefeicaoService, $routeParams) {
        $scope.produtos = [];
        $scope.mensagem = '';

        $scope.onPress = (produto) => {

            console.log('chegou ate aqui..')

          };

        if ($routeParams.idRefeicao) {
            $scope.produtos = RefeicaoService.getRefeicao();

            /*.then((resp) => {
                console.log(resp);
                $scope.refeicao = resp;
            })
            .catch((err) => {
                console.log(err);
            });*/

        }

    }]);