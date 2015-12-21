'use strict';

app.config(function($routeProvider){
    $routeProvider

        .when('/',
        {
            controller : 'indexController',
            template: ''
        })
        
        .when('/accueil',
        {
            templateUrl : 'views/home.html',
            controller : 'homeController'
            
        })
        
        .when('/:id/details',
        
        {
            templateUrl : 'views/details.html',
            controller : 'detailsController',
            
        })
        
        .when('/inscription',
        
        {
            templateUrl : 'views/inscription.html',
            controller : 'inscriptionController',
            
        });
        
});     