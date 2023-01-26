// Initialize and add the map
function initMap() {
  // The location of Kauai
  const kauai = { lat: -22.058, lng: -159.579 };
  // The map, centered at Kauai
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: kauai,
  });
  // The marker, positioned at Kauai
  const marker = new google.maps.Marker({
    position: kauai,
    map: map,
  });
}

window.initMap = initMap;
