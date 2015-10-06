angular.module('jschallengeApp').directive('smoveParkNext', function() {
    return {
	replace: true,
	retrict: "E",
	templateUrl: "templates/directives/smoveParkNext.html",
	controller: 'CarsNextController',
    }
});

