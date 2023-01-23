// Example modified from Google Maps Platform and Google Maps GitHub JS Samples page
// This Map shows my route to school and the birds I typically see along the way
// The image markers, are modified from https://developers.google.com/maps/documentation/javascript/markers#maps_icon_simple-javascript
// The info windows, are modified from the example given on Google Maps GitHub, https://github.com/googlemaps/js-samples/tree/main/samples/infowindow-simple-max

// Creating the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 44.17, lng: -78.9 },
  });
  
// Creating the info windows for each marker
  const juncoString =
    '<div">' +
    '<h1>Dark-Eyed Junco</h1>' +
    "<p>These are the birds I see on the way to school.</p>" +
    "</div>";
  const juncowindow = new google.maps.InfoWindow({
    content: juncoString,
  });
  const hawkString =
    '<div">' +
    '<h1>Red-Tailed Hawk</h1>' +
    "<p>These are the birds I see on the way to school.</p>" +
    "</div>";
  const hawkwindow = new google.maps.InfoWindow({
    content: hawkString,
  });
  const duckString =
    '<div">' +
    '<h1>American Pekin</h1>' +
    "<p>These are the birds I see on the way to school.</p>" +
    "</div>";
  const duckwindow = new google.maps.InfoWindow({
    content: duckString,
  });
  const crowString =
    '<div">' +
    '<h1>American Crow</h1>' +
    "<p>These are the birds I see on the way to school.</p>" +
    "</div>";
  const crowwindow = new google.maps.InfoWindow({
    content: crowString,
  });
  
  // Creating the markers, assigning images
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
  
  // Triggering the info windows upon click
  juncoMarker.addListener("click", () => {
    juncowindow.open({
      anchor: juncoMarker,
      map,
  });
  });
  hawkMarker.addListener("click", () => {
    hawkwindow.open({
      anchor: hawkMarker,
      map,
  });
  });
  duckMarker.addListener("click", () => {
    duckwindow.open({
      anchor: duckMarker,
      map,
    });
    });
  crowMarker.addListener("click", () => {
    crowwindow.open({
      anchor: crowMarker,
      map,
  });
  });
}

window.initMap = initMap;
