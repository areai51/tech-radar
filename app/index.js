function text_visualization(config){
	$('.title').html(config.title);
	/* Rings */
	let ringsContainer=$('<div/>',{class:"rings-container"}).appendTo($('.title'));
	for(let ring=0; ring<config.rings.length; ring++ ){
		let ringDiv=$('<div/>',{class:"ring","data-ring":ring}).appendTo(ringsContainer);
	}
	/* Quadrants */
	let quadContainer=$('<div/>',{class:"quad-container"});
	for(let quad=0;quad<config.quadrants.length;quad++){
	 let quadDiv=$('<div/>',{class:"quad","data-quad":quad}).appendTo(quadContainer);
	}
	$('#textual-data').html(quadContainer);
	$('.quad').html(ringsContainer);
	$.each(config.entries, function(index, entry) {
		let quadNumber=entry.quadrant,
		    ringNumber=entry.ring,
			ringData=$('<span/>',{html:entry.label});
		$('.quad-container').find("[data-quad='" + quadNumber + "']")
		.find("[data-ring='" + ringNumber + "']").append(ringData);
	});
}




$(document).ready(function(){
	$.getJSON( "data")
	.done(function( config ) {
	  radar_visualization( config );
	  text_visualization(config);
	})
	.fail(function( jqxhr, textStatus, error ) {
	  var err = textStatus + ", " + error;
	  console.log( "Request Failed: " + err );
  });
})

