angular.module('meal-keeper').controller('ProdutoController', ['$scope', 'ProdutoService', '$routeParams',
    function ($scope, ProdutoService, $routeParams) {
        $scope.produto = {};
        $scope.mensagem = '';

        if ($routeParams.idProduto) {
            $scope.produto = ProdutoService.getProduto();
            
                /*.then((resp) => {
                    console.log(resp);
                    $scope.produto = resp;
                })
                .catch((err) => {
                    console.log(err);
                });*/

        }

    }]);