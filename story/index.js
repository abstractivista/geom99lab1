// Initialize and add the map
function initMap() {
  // Initial location for Kauai
  const kauai = { lat: 22.058, lng: -159.579 } }
;
  // The map, centered at Kauai
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: kauai,
    mapTypeId: 'satellite'
  });
  // Marker positions on Kauai
var locations = [
  [ 'Hanalei Wildlife Refuge', 22.1999637,-159.4694653 ]
   ,[ 'Poipu Beach', 21.8731483,-159.455060 ]
  ,[ 'Kilauea Lighthouse',22.2316946,-159.4019598 ]
  , [ 'Waialeale', 22.0706509,-159.5136368 ]
  ];

for ( var i = 0; i < locations.length; i++ ) 
			{
				// get current location
				var location = locations[ i ];
				
				// create map position
				var position = new google.maps.LatLng( location[ 1 ], location[ 2 ] );
				
				// add position to bounds
				bounds.extend( position );
				
				// create marker (https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions)
				var marker = new google.maps.Marker({
					animation: google.maps.Animation.DROP
					, icon: "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png"
					, map: map
					, position: position
					, title: location[ 0 ]
				});
				
				// create info window and add to marker (https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions)
				google.maps.event.addListener( marker, 'click', ( 
					function( marker, i ) {
						return function() {
							var infowindow = new google.maps.InfoWindow();
							infowindow.setContent( locations[ i ][ 0 ] );
							infowindow.open( map, marker );
						}
					}
				)( marker, i ) );
			}

window.initMap = initMap;
