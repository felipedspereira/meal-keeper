angular.module('nutrikeeper').controller('ProdutoController', ['$scope', 'ProdutoService', 'MessageService', '$routeParams', '$location',
    function ($scope, ProdutoService, MessageService, $routeParams, $location) {
        $scope.produto = {};
        $scope.mensagem = '';
        $scope.produtos = [];

        if ($routeParams.idProduto) {
            $scope.produto = ProdutoService.getProduto($routeParams.idProduto);

            /*.then((resp) => {
                console.log(resp);
                $scope.produto = resp;
            })
            .catch((err) => {
                console.log(err);
            });*/

            $scope.submeter = function () {
                
                ProdutoService.atualizaEstoque($scope.produto);
                MessageService.success("Item atualizado com sucesso!");
                $location.path('/produtos');
            };

        } else {
            $scope.produtos = ProdutoService.listProdutos();

            /**
             * Trata o evento de seleção de um produto (tap'n hold em um item)
             */
            $scope.loadProduto = (produto) => {
                $location.path('/produtos/edit/' + produto.id);
            };

            $scope.cancelar = () => {
                $location.path('/produtos');
            };
        }

    }]);