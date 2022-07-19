import React from "react";
// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [30.550398651280837, 31.010643673993595];

  return (
    <>
      <MapContainer
        className="mx-auto mt-5"
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: "80vw", height: "70vh" }}
      >
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="  https://api.mapbox.com/styles/v1/eslamali/cl5phz2nm007315pcsz1y7sid/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZXNsYW1hbGkiLCJhIjoiY2w1cGhoMnZqMW40cTNibWdkdnJpemV1ciJ9.TATXx-VuxUYiwRvapGEK6A"
        />
        <Marker position={position}>
          <Popup>ITI Menofia</Popup>
        </Marker>
      </MapContainer>
      ,
    </>
  );
};

export default Map;
