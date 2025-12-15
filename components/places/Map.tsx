"use client";

import "./Map.css";
import dynamic from "next/dynamic";

const DynamicLeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="map-wrapper" />,
});

export default function Map() {
  return (
    <div className="map-wrapper">
      <DynamicLeafletMap />
    </div>
  );
}
