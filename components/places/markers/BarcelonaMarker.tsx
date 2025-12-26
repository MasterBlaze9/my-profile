import L from "leaflet";

const barcelonaMarker = new L.Icon({
  iconUrl: "/markerIcons/barcelona.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  shadowSize: [41, 41],
});

export default barcelonaMarker;
