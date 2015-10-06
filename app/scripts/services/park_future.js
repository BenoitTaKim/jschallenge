//console.log('park_future.js loaded');
angular.module('jschallengeApp').factory('ParkFuture', function ParkFutureFactory($http){

    return {
	all: function () {
	    var starting = Date.now() + (24 + 1) * 3600 * 1000;
	    var duration_h = 2;
	    var end = starting + duration_h * 3600 * 1000;
	    var payload = 'http://jschallenge.smove.sg/provider/1/availability?book_start=' + starting + '&book_end=' + end;
	    //var url = 'http://localhost:8080/proxy/proxy.php?url=' + payload.replace('&','%%%%');
	    var url = payload;
	    return $http({method:'GET', url:url});
	},
	one: function(starting, duration_h) {
	    var end = starting + duration_h * 3600 * 1000;
	    var payload = 'http://jschallenge.smove.sg/provider/1/availability?book_start=' + starting + '&book_end=' + end;
	    //var url = 'http://localhost:8080/proxy/proxy.php?url=' + payload.replace('&','%%%%');
	    var url = payload;
	    return $http({method:'GET', url:url});
	},
    };

    // Local data to work offline
    //return $resource('data/availability_data');

    // Need full API description to fix it
    //return $resource('/cars/:id');
});
