// Initialize and add the map
function initMap() {
  // Initial location for Kauai and locations of sites visited
  const kauai = { lat: 22.058, lng: -159.579 }
  const hanalei = { lat: 22.199, lng: -159.469 }
;
  // The map, centered at Kauai
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: kauai,
    mapTypeId: 'satellite'
  });
  // Marker positions on Kauai
  const marker1 = new google.maps.Marker({
    position: kauai,
    map: map,
  const marker2 = new google.maps.Marker({
    position: hanalei,
    map: map,
  });
}

window.initMap = initMap;
