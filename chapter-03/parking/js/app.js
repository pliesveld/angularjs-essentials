
var app = angular.module("parking", []);

app.controller("ParkingController", function ($scope) {
    $scope.appTitle = "Parking";
    $scope.cars = [];
    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

    $scope.park = function(car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        delete $scope.car;
    };
});

// Filter for plates
app.filter("plate", function() {
    return function(input) {
        var firstPart = input.substring(0, 3),
            secondPart = input.substring(3);
        return firstPart + "-" + secondPart;
    };
});