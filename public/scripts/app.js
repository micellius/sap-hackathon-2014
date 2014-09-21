angular.module('app',['ngRoute']).
    config(function($routeProvider) {
        $routeProvider.
            when('/login', {
                controller: 'loginController',
                templateUrl: 'partials/login.html'
            }).
            when('/results', {
                controller: 'resultsController',
                templateUrl: 'partials/results.html'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }).
    controller('loginController', function() {
        // TODO[Vova]
    }).
    controller('resultsController', function($scope) {
        var i;
        $scope.images = [];
        for(i=0; i<30; i++) {
            $scope.images.push({
                url: 'http://lorempixel.com/200/200?ts=' + Math.random(),
                style: '-webkit-transform: rotate(' + Math.floor(Math.random()*30 - 15)+ 'deg);'
            });
        }
    });