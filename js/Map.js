// @formatter:off
require(
	[
  "esri/map",
  "esri/geometry/Point",
  "esri/SpatialReference",
  "dojo/ready", 
  "dojo/parser", 
  "dojo/on", 
  "js/sunrisesunset", 
  "dijit/layout/ContentPane", 
  "dijit/layout/LayoutContainer", 
  "dijit/layout/BorderContainer", 
  "esri/layers/FeatureLayer"

  	], 

  function(
    Map, Point, SpatialReference,
    ready, parser, on, sunrisesunset,
    ContentPane, LayoutContainer, BorderContainer, 
    FeatureLayer   
    ) {
// @formatter:on

  // Wait until DOM is ready *and* all outstanding require() calls have been resolved
  ready(function() {

    // Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();
    

    // Create the map
    map = new Map("LaCarte", {
      basemap : "satellite",
      center : [-96, 42],
      zoom : 4,
    });
    
    var coucheVilles = new FeatureLayer("http://services.arcgis.com/pGoeHmYZOCXOU5IQ/arcgis/rest/services/CitiesOfTheWorld/FeatureServer/0");
    map.addLayer(coucheVilles);
    
    var LC = new sunrisesunset( 46.845, 71.335, -3, 26, 08, 2014);
	

	map.on("click", function(evt){
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
