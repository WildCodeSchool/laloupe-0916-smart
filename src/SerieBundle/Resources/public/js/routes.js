const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'bundles/serie/views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/serie', {
            templateUrl: 'bundles/serie/views/serieNonLoggue.html',
            controller: 'serieController',
            controllerAs: 'vm'
        })
        .when('/calendrier', {
            templateUrl: 'bundles/serie/views/calendrier.html'
        })
        .otherwise({
            redirectTo: ''
        })

}
