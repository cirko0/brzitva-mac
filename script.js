const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiY2lya28wIiwiYSI6ImNsZWFpcHVzNTBneGUzcW4ybHI1OTlweHMifQ.suUG7rlA7KkL8JEMU69GtQ",
  }
).addTo(map);

var redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  className: "red-marker",
});

// Create a marker with the custom icon and add it to the map
var marker = L.marker([51.5, -0.09], { icon: redIcon }).addTo(map);
