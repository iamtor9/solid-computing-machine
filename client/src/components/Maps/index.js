import React, {Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Dot from "./Dot"
import "./Maps.css";
 


class Maps extends Component {
   constructor(){
      super();
      this.state = {
        ready: false,
        where: {lat:null, lng:null},
        error: null,
        zoom: 15
    };
   }
  componentDidMount(){
      let geoOptions ={
        enableHighAccuracy: true,
        timeOut: 20000,
        maximunAge: 60 * 60,
        distanceFilter: 1
      };
      this.setState({ready: false, error: null})
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);
  }
  geoSuccess = (position) => {
    this.setState({
      ready: true,
      where: {lat: position.coords.latitude, lng: position.coords.longitude}
    })
    console.log(position);
  }
  geoFailure = (err) =>{
    this.setState({error: err.message});
  }
 
  render() {
    // console.log(this.state);
    return (
      
      <div className="theMap" style={{ height: '30vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAvh-RJE3-FnbTJlwKg-npCYZl_Yo8P6RU"}}
          defaultCenter={this.state.where}
          defaultZoom={this.state.zoom}
        >
          <Dot />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;