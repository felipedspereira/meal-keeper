angular.module('meal-keeper', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap'])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/teste.html"
            });
    });