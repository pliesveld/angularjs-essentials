
var app = angular.module("parking", []);

app.controller("ParkingController", function ($scope) {
    $scope.cars = [
        { plate: '6MBV006' },
        { plate: '5BBM299' },
        { plate: '5AOJ230' }
    ];

    $scope.park = function(car) {
        $scope.cars.push(angular.copy(car));
        delete ($scope.car);
    };
});