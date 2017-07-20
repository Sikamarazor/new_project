angular.module('app.controllers',[])

.controller('carCtrl', function($scope,carApi){

    $(function () {
    $("#prod_nav ul").tabs("#panes > div", {
        effect: 'fade',
        fadeOutSpeed: 400
    });
});

$(document).ready(function () {
    $(".pane-list li").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});

    var carrs = carApi.cars();
    carrs.then(function successCallback(response){
              $scope.carmodel = response;
    })

    var car = carApi.car();
    car.then(function successCallback(response){
              $scope.car = response;
              console.log($scope.car);
    });

})

.controller('carBrandsCtrl', function($scope,carApi){

   var car = carApi.car();
    car.then(function successCallback(response){
              $scope.car = response;
              console.log($scope.car);
    });
            
    
})
.controller('newsCtrl', function($scope,carApi){

    var carrs = carApi.cars();
    carrs.then(function successCallback(response){
              $scope.carmodel = response;
    })

    var car = carApi.car();
    car.then(function successCallback(response){
              $scope.car = response;
    })

})
.controller('profileCtrl', function($scope,carApi){
    $scope.insert =false;
    var car = {
        _id: "",
        name:"",
    }
   $scope.insertCar = function(car){
       $scope.insert =true;

       var cars = carApi.postCar(car);
            cars.then(function successCallback(response){
            $scope.ca = response;
       }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.insert =true;
            $scope.ca = response;

            console.log($scope.ca);

        })
   }

   //==========models===========================

    var carrs = carApi.cars();
    carrs.then(function successCallback(response){
              $scope.carmodel = response;
    })

    //==========cars================
    
    var car = carApi.car();
    car.then(function successCallback(response){
              $scope.car = response;
    })

})
.controller('coolSliderCtrl', function($scope,carApi){
    /* $scope.slides = [
            {image: '/images/img/Bugatti.jpg', description: 'Image 00'},
            {image: '/images/img/Bugattii.jpg', description: 'Image 01'},
            {image: '/images/img/Lamboo.jpg', description: 'Image 02'},
            {image: '/images/img/Lamb.jpg', description: 'Image 03'},
            {image: '/images/img/audi.jpg', description: 'Image 04'}
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        }; */


})/*
.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    }) */
.controller('longSliderCtrl', function($scope,carApi){

    jQuery.noConflict()(function ($) {
    $('#ei-slider').eislideshow({
        animation: 'center',
        autoplay: true,
        slideshow_interval: 3000,
        titlesFactor: 0
    });
});
})
.controller('fullSliderCtrl', function($scope,carApi){
    jQuery.noConflict()(function ($) {
    $.supersized({
        // Functionality
        slide_interval: 3000, // Length between transitions
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 700, // Speed of transition
        // Components							
        slide_links: 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides:
        // Slideshow Images
        [{
            image: '/images/img/Lamboo.jpg',
            title: 'Copyright: Lefa Nyathi',
            thumb: 'slideshow/slide_1.jpg',
            url: '#'
        }, {
            image: '/images/img/audi.jpg',
            title: 'Copyright: Lefa Nyathi',
            thumb: 'slideshow/slide_2.jpg',
            url: '#'
        }, {
            image: '/images/img/Bugattii.jpg',
            title: 'Copyright: Lefa Nyathi',
            thumb: 'slideshow/slide_3.jpg',
            url: '#'
        }]
    });
});

})
.controller('brandsCtrl', function($scope,carApi,$rootScope,$state){

   var car = carApi.car();
    car.then(function successCallback(response){
              $scope.car = response;
              $scope.photo = $scope.car.data[55].img;
              console.log($scope.photo);
    });

    $scope.selectedCar = function(name)
    {
        $rootScope.name = name;
        console.log($rootScope.name)
        var car = carApi.getCar(name);
        car.then(function successCallback(response){
              $scope.car = response;
              console.log($scope.car);
              $state.go("models");
    });

    }   
    
})
.controller('modelsCtrl', function($state,$scope,carApi,$rootScope){

        name = $rootScope.name;
        console.log(name);

        var car = carApi.getCar(name);
        car.then(function successCallback(response){
              $scope.cars = response;
              console.log($scope.cars);
              //$state.go("models");
    });
        
    
})