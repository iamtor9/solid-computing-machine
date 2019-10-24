import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import "./Maps.css";

const Maps = () => {

 
    let [center, setCenter] = useState({lat: 44.9778, lng: -93.2650 });
    let [zoom, setZoom] = useState(16);
    let [lat, setLat] = useState(44.9778);
    let [lng, setLng] = useState(-93.2650);

    navigator.geolocation.watchPosition((position) =>{
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      console.log(position);
    })

    return (
        <div className="theMap" style={{ height: '30vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvh-RJE3-FnbTJlwKg-npCYZl_Yo8P6RU' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Maps;