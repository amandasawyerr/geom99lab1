// Example modified from Google Maps Platform - Markers, from https://developers.google.com/maps/documentation/javascript/markers#maps_icon_simple-javascript
// This function creates a map and adds markers that are images 
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 44.1, lng: -78.9 },
  });
  const junco =
    "https://amandasawyerr.github.io/geom99lab1/story/Junco.png";
  const juncoMarker = new google.maps.Marker({
    position: { lat: 43.957, lng: -78.972 },
    map,
    icon: junco,
   });
  const crow =
    "https://amandasawyerr.github.io/geom99lab1/story/Crow.png";
  const crowMarker = new google.maps.Marker({
    position: { lat: 44.342, lng: -78.741 },
    map,
    icon: crow,
  });
  const hawk =
    "https://amandasawyerr.github.io/geom99lab1/story/Hawk.png";
  const hawkMarker = new google.maps.Marker({
    position: { lat: 44.241, lng: -78.888 },
    map,
    icon: hawk,
  });
  const duck =
    "https://amandasawyerr.github.io/geom99lab1/story/Duck.png";
  const duckMarker = new google.maps.Marker({
    position: { lat: 44.269, lng: -78.798 },
    map,
    icon: duck,
  });
}

window.initMap = initMap;
