(function (){
    'use strict';

    var app = angular.module('angularRoutingSample', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'RootController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

}());
