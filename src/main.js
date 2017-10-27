angular.module('nutrikeeper', ['ngRoute', 'hmTouchEvents', 'ngAnimate'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/produtos/edit/:idProduto', {
                templateUrl: "views/edit-produto.html",
                controller: 'ProdutoController'
            })
            .when('/refeicoes/view/:idRefeicao', {
                templateUrl: "views/view-refeicao.html",
                controller: 'RefeicaoController'

            })
            .when("/refeicoes", {
                templateUrl: "views/refeicoes.html",
                controller: 'RefeicaoController'
            })
            .when("/produtos", {
                templateUrl: "views/produtos.html",
                controller: 'ProdutoController'
            })
            .when("/escolhaUsuario", {
                templateUrl: "views/escolha-usuario.html",
                controller: 'EscolhaUsuarioController'
            })
            .otherwise({
                templateUrl: "views/refeicoes.html",
                controller: 'RefeicaoController'
            });
    })
    .run(['RefeicaoService', 'ProdutoService', '$location', function (RefeicaoService, ProdutoService, $location) {
        // forçando inicialização do banco de dados de refeicao e produto através da injeção dessas duas dependẽncias

        if (RefeicaoService.isSemRefeicoesCadastradas()) {
            $location.path('/escolhaUsuario');
        }
    }]);