"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

import homeMarker from "./markers/HomeMarker";
import madridMarker from "./markers/MadridMarker";
import barcelonaMarker from "./markers/BarcelonaMarker";
import amsterdamMarker from "./markers/AmsterdamMarker";

L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
});

export default function LeafletMap() {
  return (
    <MapContainer
      center={[40.6745, -7.91721]}
      zoom={3}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Home Marker */}
      <Marker position={[40.6745, -7.91721]} icon={homeMarker}>
        <Popup>
          Home
        </Popup>
      </Marker>

      {/* Madrid Marker */}
      <Marker position={[40.4168, -3.7038]} icon={madridMarker}>
        <Popup>
          Madrid<br />Trip destination
        </Popup>
      </Marker>

      {/* Barcelona Marker */}
      <Marker position={[41.3874, 2.1686]} icon={barcelonaMarker}>
        <Popup>
          Barcelona<br />Trip destination
        </Popup>
      </Marker>

      {/* Amsterdam Marker */}
      <Marker position={[52.3676, 4.9041]} icon={amsterdamMarker}>
        <Popup>
          Amsterdam<br />Trip destination
        </Popup>
      </Marker>
    </MapContainer>
  );
}
