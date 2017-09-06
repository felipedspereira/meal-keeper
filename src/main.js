angular.module('meal-keeper', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "TODO"
            })
            .otherwise({
                templateUrl: "TODO"
            });
    });