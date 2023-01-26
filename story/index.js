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
  
// Initialize and add the map
function initMap() {
  // The locations in Kauai
  var kauai = { lat: 22.058, lng: -159.579 };
  var hanalei = { lat: 22.1999637, lng: -159.4694653 };
  var poipu = { lat: 21.8731483, lng: -159.455060}
  var kilauea = { lat: 22.2316946, lng: -159.4019598}
  var waialeale = { lat: 22.0706509, lng: -159.5136368}
  // The map, centered at Kauai
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: kauai,
    mapTypeId: 'satellite'
  });
  // The marker, positioned at Kauai
  const marker = new google.maps.Marker({
    position: kauai,
    map: map,
  // Marker positions on Kauai
  var locations = [
  [ 'Hanalei Wildlife Refuge', 22.1999637,-159.4694653 ]
   ,[ 'Poipu Beach', 21.8731483,-159.455060 ]
  ,[ 'Kilauea Lighthouse',22.2316946,-159.4019598 ]
  , [ 'Waialeale', 22.0706509,-159.5136368 ]
  ];
  });
}
window.initMap = initMap;
