
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