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

// GSAP

gsap.from("header", {
  y: "-100%",
  duration: 1,
  ease: "bounce",
});

const heroImage = document.querySelector(".hero__content--image > img");
gsap.from(heroImage, {
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "expo2",
});

const heroText = document.querySelector(".hero__content--text");

gsap.from(heroText, {
  x: "-100%",
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "expo",
});

const obsCallbackEmployees = function (entries) {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      document.querySelector(".employees").dataset.observe === "true"
    ) {
      document.querySelector(".employees").dataset.observe = "false";
      gsap.to(".employees h2", {
        x: "0",
        ease: "expo",
        duration: 1,
      });
      for (
        let i = 0;
        i < document.querySelectorAll(".employees__content__card").length;
        i++
      ) {
        gsap.to(document.querySelectorAll(".employees__content__card")[i], {
          opacity: 1,
          delay: 1,
          ease: "expo",
          duration: 2 * (i + 2),
        });
      }
    }
  });
};

const observerEmployees = new IntersectionObserver(obsCallbackEmployees, {
  root: null,
  threshold: 0.1,
});

observerEmployees.observe(document.querySelector(".employees"));

const obsCallbackLocation = function (entries) {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      document.querySelector(".location").dataset.observe === "true"
    ) {
      document.querySelector(".location").dataset.observe = "false";
      gsap.to(".location h2", {
        x: "0",
        ease: "expo",
        duration: 1,
      });
      gsap.to(".location__content__map", {
        opacity: 1,
        ease: "expo",
        delay: 1,
        duration: 2,
      });
      gsap.to(".location__content__text", {
        x: 0,
        opacity: 1,
        ease: "expo",
        delay: 1,
        duration: 2,
      });
    }
  });
};

const observerLocation = new IntersectionObserver(obsCallbackLocation, {
  root: null,
  threshold: 0.1,
});

observerLocation.observe(document.querySelector(".location"));
