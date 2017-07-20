angular.module('app',['ui.router','app.controllers','app.services','ui.bootstrap'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.when("","/home");

    $stateProvider
    .state('home',{
        url:"/home",
        templateUrl: "/templates/home.html",
        controller: "carCtrl"
    })
    .state('carBrands',{
        url:"/carBrands",
        templateUrl: "/templates/carBrands.html",
        controller: "carBrandsCtrl"
    })
    .state('News',{
        url:"/News",
        templateUrl: "/templates/News.html",
        controller: "newsCtrl"
    })
    .state('profile',{
        url:"/profile",
        templateUrl: "/templates/profile.html",
        controller: "profileCtrl"
    })
    .state('coolSlider',{
        url:"/coolSlider",
        templateUrl: "/templates/coolSlider.html",
        controller: "coolSliderCtrl"
    })
    .state('longSlider',{
        url:"/longSlider",
        templateUrl: "/templates/longSlider.html",
        controller: "longSliderCtrl"
    })
    .state('fullSlider',{
        url:"/fullSlider",
        templateUrl: "/templates/fullSlider.html",
        controller: "fullSliderCtrl"
    })
    .state('brands',{
        url:"/brands",
        templateUrl: "/templates/brands.html",
        controller: "brandsCtrl"
    })
    .state('models',{
        url:"/models",
        templateUrl: "/templates/models.html",
        controller: "modelsCtrl"
    })

}])