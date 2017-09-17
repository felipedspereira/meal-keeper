angular.module('nutrikeeper').controller('ProdutoController', ['$scope', 'ProdutoService', '$routeParams',
    function ($scope, ProdutoService, $routeParams) {
        $scope.produto = {};
        $scope.mensagem = '';

        if ($routeParams.idProduto) {
            $scope.produto = ProdutoService.getProduto($routeParams.idProduto);
            
                /*.then((resp) => {
                    console.log(resp);
                    $scope.produto = resp;
                })
                .catch((err) => {
                    console.log(err);
                });*/

        }

    }]);