import React from 'react';
// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [30.55792175930095, 31.018984611032206];

  return (
    <>
      <MapContainer
        className="-z-10 mx-auto mt-5"
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: '70vw', height: '70vh' }}
      >
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="https://api.mapbox.com/styles/v1/eslamali/cl5phz2nm007315pcsz1y7sid/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZXNsYW1hbGkiLCJhIjoiY2w1cGhoMnZqMW40cTNibWdkdnJpemV1ciJ9.TATXx-VuxUYiwRvapGEK6A"
        />
        <Marker position={position}>
          <Popup>ITI Menofia</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
