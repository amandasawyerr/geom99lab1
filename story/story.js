// Example modified from Google Maps Platform - Markers, from https://developers.google.com/maps/documentation/javascript/markers#maps_icon_simple-javascript
// This function creates a map and adds markers that are images 
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 44.1, lng: -78.9 },
  });
  const junco =
    "https://www.ensembl.org/i/species/Junco_hyemalis.png";
  const juncoMarker = new google.maps.Marker({
    position: { lat: 43.957, lng: -78.972 },
    map,
    icon: junco,
  });
}

window.initMap = initMap;
