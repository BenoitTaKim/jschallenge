angular.module('jschallengeApp').factory('Park', function ParkFactory($resource){

    // Query for a booking in 1 day from now, for 2 hours.
    var start = Date.now() + 24 * 3600 * 1000;
    var end = start + 2 * 3600 * 1000;
    var url = 'http://jschallenge.smove.sg/provider/1/availability?book_start=' + start + '&book_end=' + end;

    // If CORS (Cross Origin Request Blocked) issue, use a proxy
    // url = 'http://localhost:8080/proxy/proxy.php?url=' + url.replace('&','%%%%');
    
    return $resource(url);

    // Offline Test
    //return $resource('data/availability_data');
    
});
