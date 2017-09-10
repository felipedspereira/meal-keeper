angular.module('meal-keeper').controller('RefeicaoController', ['$scope', 'RefeicaoService', '$routeParams',
    function ($scope, RefeicaoService, $routeParams) {
        $scope.refeicao = {};
        $scope.mensagem = '';

        $scope.onPress = (produto) => {

            console.log('chegou ate aqui..')

          };

        if ($routeParams.idRefeicao) {
            $scope.refeicao = RefeicaoService.getRefeicao();

            /*.then((resp) => {
                console.log(resp);
                $scope.refeicao = resp;
            })
            .catch((err) => {
                console.log(err);
            });*/

        }

    }]);