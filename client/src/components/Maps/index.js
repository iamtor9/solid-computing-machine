import React, {Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Maps.css";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;



class Maps extends Component {

    state = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 13
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) =>{
      let center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log("yfjytfjytfjytfjytfj",center)
      this.setState({center})
      return center;
  })
  }
 
  render() {
    // console.log(this.state);
    return (
      // Important! Always set the container height explicitly
      <div className="theMap" style={{ height: '30vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAvh-RJE3-FnbTJlwKg-npCYZl_Yo8P6RU"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
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