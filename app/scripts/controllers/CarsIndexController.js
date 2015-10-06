angular.module('jschallengeApp').controller('CarsIndexController', function(Park, $scope) {
    $scope.parks = Park.query();
    $scope.hover_cellpark = false;
    $scope.cellpark_display = true;
});
