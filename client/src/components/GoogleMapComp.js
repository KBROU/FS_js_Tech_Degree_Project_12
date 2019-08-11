import React, { Component } from 'react'
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api'
require('dotenv').config();

export default class GoogleMapComp extends Component {
  render() {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
           height: "400px",
           width: "100%",
           postion: "center"
         }}
         zoom={12}
         center={{
           lat: 30.672281,
           lng: -87.977234
         }}
        >
          <TrafficLayer />
        </GoogleMap>
      </LoadScript>
     )
  }
}
