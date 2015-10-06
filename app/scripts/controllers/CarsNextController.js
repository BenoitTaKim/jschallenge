angular.module('jschallengeApp').controller('CarsNextController', function(ParkFuture, $scope) {
    $scope.check_other_timeslot=false;
    
    var startingPoint = Date.now() + (24) * 3600 * 1000;
    var duration_h = 2;
    var loops = 3;
    var parkid = $scope.park.id;
    $scope.nexts = [];
    var limitTimeOut = 2000;
    var stepTimeOut = 1000;

    var debug = false;
    getDataLoop();

    function getDataLoop () {
	for (var i = 0; i<loops; i++) {
	    if (debug && (parkid == 1)) { console.log("i:"+i); }
	    startingPoint += 3600*1000;
	    try {
		var r = getDataNext(startingPoint, duration_h, i+1);
	    } catch (e) {
		if (debug && (parkid == 1)) {
		    console.log("Error(loop:"+i+"):"+e);
		}
	    }
	}
	$scope.nexts.sort(function(a,b) {return (a.timeSlotH - b.timeSlotH);});
	if (debug && (parkid < 3)) {console.log($scope.nexts);}
    }

    function getDataNext(startingPoint, duration_h, l) {
	return ParkFuture.one(startingPoint, duration_h)
	    .success(function(response) {
		var final_response = [];
		var s = startingPoint;
		var d = duration_h;
		var end = s + d * 3600 * 1000;
		//var l = ParkFuture.getLoop();
		for (var j = 0; j < response.length; j++) {
		    if (response[j].id == parkid) {
			// Enrich data
			response[j].timeSlotRequestStart = s;
			response[j].timeSlotRequestEnd = end;
			response[j].timeSlotRequestDuration = d;
			response[j].timeSlotH = l;
			$scope.nexts.push(response[j]);
			final_response.push(response[j]);
		    }
		}
		if (debug && (parkid == 1)) {
		    console.log("l:"+l+" | response.length:"+response.length+" | final.length:"+final_response.length);
		    console.log(final_response);
		}
	    });
    }

    // Test traitement
    //$scope.nexts = [{parking_shortname:'elsewhere', cars_available:4}, {parking_shortname:'nowhere', cars_available:0}];
});

