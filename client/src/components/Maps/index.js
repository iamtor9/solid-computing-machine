import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Maps.css";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="theMap" style={{ height: '30vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAvh-RJE3-FnbTJlwKg-npCYZl_Yo8P6RU"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;