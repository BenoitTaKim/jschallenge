<?php
	try {
	    if (isset($_GET['url'])) {
	    	$url = str_replace('%%%%','&',$_GET['url']);
		$contentpage = file_get_contents($url);
		echo $contentpage;
		// echo $url;
	   	// var_dump( array_keys($_GET));
	    } else {
	        echo "Missing parameter: No url provided";
	    }
	} catch(Exception $e) {
	  echo "Error while proceeding: $e";
	  var_dump( array_keys($_GET));
	}
?>