angular.module('meal-keeper', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/produtos/edit/:idProduto', {
                templateUrl: "views/edit-produto.html",
                controller: 'ProdutoController'
            })
           .when("/", {
                templateUrl: "views/teste.html"
            });
    });