// Example modified from Google Maps Platform - Markers, from https://developers.google.com/maps/documentation/javascript/markers#maps_icon_simple-javascript
// This function creates a map and adds markers that are images 
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 44.1, lng: -78.9 },
  });
  const junco =
    "https://www.ensembl.org/i/species/Junco_hyemalis.png";
  const juncoMarker = new google.maps.Marker({
    position: { lat: 43.957, lng: -78.972 },
    map,
    icon: junco,
   });
  const crow =
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/647851-gettyimages-1155749550-a87fcac4d43a0d43295f3ddb295f39a6.jpg";
  const crowMarker = new google.maps.Marker({
    position: { lat: 44.342, lng: -78.741 },
    map,
    icon: crow,
  });
  const hawk =
    "https://animals.net/wp-content/uploads/2019/03/Red-Tailed-Hawk-4.jpg";
  const hawkMarker = new google.maps.Marker({
    position: { lat: 44.241, lng: -78.888 },
    map,
    icon: hawk,
  });
  const duck =
    "https://www.waterfowl.org.uk/wp-content/uploads/2019/11/Pekin-head-Colin-Murton-2019-MJ-3-1024x789.jpg";
  const duckMarker = new google.maps.Marker({
    position: { lat: 44.269, lng: -78.798 },
    map,
    icon: duck,
  });
}

window.initMap = initMap;
