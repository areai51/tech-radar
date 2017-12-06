
$(document).ready(function(){
	$.getJSON( "data")
	.done(function( config ) {
	  radar_visualization( config );
	})
	.fail(function( jqxhr, textStatus, error ) {
	  var err = textStatus + ", " + error;
	  console.log( "Request Failed: " + err );
  });
})

