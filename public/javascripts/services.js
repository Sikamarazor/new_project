angular.module('app.services',[])

.factory('carApi', function($http){

    return{

        cars : function (){
            var data = $http.get('http://localhost:3000/carsmodel');
            console.log(data);
            return data;
        },
        car : function (){
            var data = $http.get('http://localhost:3000/car');
            console.log(data);
            return data;
        },
        getCar : function (name){
            var data = $http.get('http://localhost:3000/car/' + name);
            console.log(data);
            return data;
        },
        postCar : function (car){
            var data = $http.post('http://localhost:3000/car',car);
            console.log(data);
            return data;
        }

    }

})