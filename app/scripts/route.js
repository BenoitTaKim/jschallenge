angular.module('jschallengeApp').config(function($routeProvider) {
    $routeProvider
	.when('/', {
	    redirectTo: '/cars'
	})
	.when('/cars', {
	    templateUrl: "templates/cars/index.html",
	    controller: "CarsIndexController"
	})
});
