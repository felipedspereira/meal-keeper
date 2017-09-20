angular.module('nutrikeeper').controller('RefeicaoController', ['$scope', '$document', 'RefeicaoService', '$routeParams', 'ProdutoService', 'MessageService', '$location',
    function ($scope, $document, RefeicaoService, $routeParams, ProdutoService, MessageService, $location) {
        $scope.refeicao = {};
        $scope.mensagem = '';
        $scope.listaSubstituicao = [];
        $scope.produtoSelecionado = null; // produto a ser trocado
        let modalSubstituicao = null;
        let modalConfirmaRefeicao = null;

        // Inicializações do modal para quando a árvore DOM estiver montada
        $document.ready(() => {
            modalSubstituicao = $('#editRefeicaoModal');
            modalConfirmaRefeicao = $("#confirmaRefeicao");

            // Invocado quando o modal é encerrado
            modalSubstituicao.on('hidden.bs.modal', function (e) {
                $scope.produtoSelecionado = null;
                $scope.novoProdutoSelecionado = null;
            });
        });

        /**
         * Trata o evento de seleção de um produto (tap'n hold em um item)
         */
        $scope.onPress = (item) => {
            if (item.produto.dsCategoria) {

                $scope.produtoSelecionado = item.produto;

                $scope.listaSubstituicao = ProdutoService.getProdutos(item.produto.dsCategoria);

                modalSubstituicao.modal();
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
            modalSubstituicao.modal('hide');
            MessageService.success('Item substituído com sucesso.', 3000);
        };

        $scope.doNavigation = (idRefeicao) => {
            $location.path('/refeicoes/view/' + idRefeicao)
        };

        $scope.confirmaRefeicao = (refeicao) => {
            RefeicaoService.confirmaRefeicao(refeicao)
                .then(() => {
                    modalConfirmaRefeicao.modal('hide');
                    MessageService.success('Muito bem!!', 3000);
                    refeicao.realizada = true;
                })
                .catch(e => {
                    console.error(e);
                    MessageService.warning(e);
                });
        };

        if ($routeParams.idRefeicao) {
            $scope.refeicao = RefeicaoService.getRefeicao($routeParams.idRefeicao);
        }
    }]);
