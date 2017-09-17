angular.module('nutrikeeper').controller('RefeicaoController', ['$scope', '$document', 'RefeicaoService', '$routeParams', 'ProdutoService', 'MessageService', '$location', 
    function ($scope, $document, RefeicaoService, $routeParams, ProdutoService, MessageService, $location) {
        $scope.refeicao = {};
        $scope.mensagem = '';
        $scope.listaSubstituicao = [];
        $scope.produtoSelecionado = null; // produto a ser trocado
        let modal = null;

        // Inicializações do modal para quando a árvore DOM estiver montada
        $document.ready(() => {
            modal = $('#editRefeicaoModal');
            
            // Invocado quando o modal é encerrado
            modal.on('hidden.bs.modal', function (e) {
                $scope.produtoSelecionado = null;
                $scope.novoProdutoSelecionado = null;
            });
        });

        /**
         * Trata o evento de seleção de um produto (tap'n hold em um item)
         */
        $scope.onPress = (produto) => {
            if (produto.dsCategoria) {
                
                $scope.produtoSelecionado = produto;
    
                $scope.listaSubstituicao = ProdutoService.getProdutos(produto.dsCategoria);
    
                modal.modal();
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
            $scope.refeicao = RefeicaoService.getRefeicao($routeParams.idRefeicao);
        }

        $scope.doNavigation = (idRefeicao) => {
            $location.path('/refeicoes/view/' + idRefeicao)
        }
    }]);
