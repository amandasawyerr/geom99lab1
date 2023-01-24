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
    "<p>The Dark-Eyed Juncos are sparrow-like birds that are extremely common in this area during the winter months, as they are one of the most abundant forest birds in North America. Easily identifiable by their grey bodies, white tail feathers, and pale-yellow beaks.</p>" +
    "</div>";
  const juncowindow = new google.maps.InfoWindow({
    content: juncoString,
  });
  const gullString =
    '<div">' +
    '<h1>Ring-Billed Gull</h1>' +
    "<p>The Ring-Billed Gull is a medium sized gull common to North America, especially in the warmer months. Often around humans, these are opportunistic omnivores that are not afraid of snatching a snack. Like other gulls, the Ring-Billed Gull is a species commonly seen in numbers.</p>" +
    "</div>";
  const gullwindow = new google.maps.InfoWindow({
    content: gullString,
  });
  const hawkString =
    '<div">' +
    '<h1>Red-Tailed Hawk</h1>' +
    "<p>The Red-Tailed Hawk resides in Southern Ontario year-round. Often seen soaring above open fields searching for prey, they are arguably the most common hawk throughout North America.</p>" +
    "</div>";
  const hawkwindow = new google.maps.InfoWindow({
    content: hawkString,
  });
  const duckString =
    '<div">' +
    '<h1>American Pekin</h1>' +
    "<p>The American Pekin is a domestic bird commonly seen in hobby farms and more serious farming establishments. Domesticated for their meat, these ducks were originally bred in China before making their appearance in North America.</p>" +
    "</div>";
  const duckwindow = new google.maps.InfoWindow({
    content: duckString,
  });
  const crowString =
    '<div">' +
    '<h1>American Crow</h1>' +
    "<p>A beautiful black bird known by all, the American Crow is large and intelligent. They are known to eat almost anything and live almost anywhere, where there is food available, within North America. </p>" +
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
  const gull =
    "https://amandasawyerr.github.io/geom99lab1/story/Gull.png";
  const gullMarker = new google.maps.Marker({
    position: { lat: 44.109, lng: -78.967 },
    map,
    icon: gull,
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
  gullMarker.addListener("click", () => {
    gullwindow.open({
      anchor: gullMarker,
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
