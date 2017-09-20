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
           .when("/", {
                templateUrl: "views/teste.html"
            });
    })
    .run(['RefeicaoService', 'ProdutoService', function(RefeicaoService, ProdutoService) {
        // forçando inicialização do banco de dados de refeicao e produto
    }]);