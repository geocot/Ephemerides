// @formatter:off
require(
	[
  "esri/map",
  "esri/geometry/Point",
  "esri/SpatialReference",
  "dojo/ready", 
  "dojo/parser", 
  "dojo/on", 
  "js/sunrisesunset"

  	], 

  function(
    Map, Point, SpatialReference,
    ready, parser, on, sunrisesunset   
    ) {
// @formatter:on

  // Wait until DOM is ready *and* all outstanding require() calls have been resolved
  ready(function() {

    // Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();
    

    // Create the map
    mapMain = new Map("LaCarte", {
      basemap : "national-geographic",
      center : [-71, 46],
      zoom : 8,
    });
    
    var LC = new sunrisesunset( 46.845, 71.335, -3, 26, 08, 2014);
	
	mapMain.on("click", function(evt){
		//map.graphics.clear();
		console.log("Lat:" + evt.mapPoint.getLatitude());
		console.log("Long:" + evt.mapPoint.getLongitude());
		LC.latitude = evt.mapPoint.getLatitude();
		LC.longitude = evt.mapPoint.getLongitude();
		console.log(LC.longitude);
		console.log(LC.Lever());
		console.log(LC.Coucher());
		
	});

  });
});
