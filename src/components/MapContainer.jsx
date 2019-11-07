import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { googleKey } from '../../key.js';
const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  export class MapContainer extends Component {
      constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,  //Hides or the shows the infoWindow
          activeMarker: {},          //Shows the active marker upon click
          selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
        };
      }
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 50.0755,
           lng: 14.4378
          }}>
          <Marker position={{ lat: 50.083, lng: 14.45}} />
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: googleKey
  })(MapContainer);