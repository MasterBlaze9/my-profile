const iconUrl = "/markerIcons/home.png";

import L from "leaflet";

const homeMarker = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],

  shadowSize: [41, 41],
});

export default homeMarker;
