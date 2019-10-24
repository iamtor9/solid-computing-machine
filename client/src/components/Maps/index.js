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
      localStorage.setItem("LTLN", JSON.stringify({LAT:position.coords.latitude, LON: position.coords.longitude}))
      console.log(position);
    })

    return (
        <div className="theMap" style={{ height: '30vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvh-RJE3-FnbTJlwKg-npCYZl_Yo8P6RU' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={{
            styles: mapStyle,
        }}
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

let mapStyle = [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 13
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#144b53"
          },
          {
              "lightness": 14
          },
          {
              "weight": 1.4
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#08304b"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#0c4152"
          },
          {
              "lightness": 5
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#0b434f"
          },
          {
              "lightness": 25
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#0b3d51"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "color": "#146474"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#021019"
          }
      ]
  }
]

export default Maps;