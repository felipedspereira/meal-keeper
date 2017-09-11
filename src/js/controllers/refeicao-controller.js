angular.module('meal-keeper').controller('RefeicaoController', ['$scope', 'RefeicaoService', '$routeParams', 'ProdutoService', '$rootScope', '$timeout', 'MessageService',
    function ($scope, RefeicaoService, $routeParams, ProdutoService, $rootScope, $timeout, MessageService) {
        $scope.produtos = [];
        $scope.mensagem = '';
        $scope.listaSubstituicao = [];
        $scope.produtoSelecionado = null; // produto a ser trocado
        let modal = $('#editRefeicaoModal');

        /**
         * Trata o evento de seleção de um produto (tap'n hold em um item)
         */
        $scope.onPress = (produto) => {
            if (produto.dsCategoria) {
                $scope.produtoSelecionado = produto;
    
                $scope.listaSubstituicao = ProdutoService.getProdutos(produto.dsCategoria);
    
                modal.modal();
                _cleanDadosModal();
            } else {
                MessageService.warning('Este item não pode ser trocado')
            }
        };

        /**
         * Seleciona um produto para substituição
         */
        $scope.selecionaNovoProduto = (produto) => {
            $scope.novoProdutoSelecionado = produto;
        };

        /**
         * Troca o produto anterior pelo produto selecionado
         */
        $scope.substituiProduto = () => {
            $scope.produtos = RefeicaoService.trocaItemDaRefeicao($scope.produtoSelecionado, $scope.novoProdutoSelecionado);
            modal.modal('hide');
            MessageService.success('Item substituído com sucesso.', 3000);
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

        let _cleanDadosModal = () => {
            modal.on('hidden.bs.modal', function (e) {
                $scope.produtoSelecionado = null;
                $scope.novoProdutoSelecionado = null;
            });
        }
    }]);
