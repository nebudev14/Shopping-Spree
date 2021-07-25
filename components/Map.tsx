// @ts-nocheck
import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const defaultOptions = { scrollwheel: false };

const Map: any = ({lat, lng}: any) => { 

    const RegularMap = withScriptjs(
        withGoogleMap(props => (
          <GoogleMap
            defaultZoom={15}
            defaultCenter={ { lat: lat, lng: lng } }
            defaultOptions={ defaultOptions }
          >
            <Marker position={ { lat: lat, lng: lng } } />
          </GoogleMap>
        ))
      );

      const loadingElementStyle = { height: '100%' };
      const containerElementStyle = { height: '280px' };
      const mapElementStyle = { height: '100%' };

    return (
        <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        loadingElement={<div style={ loadingElementStyle } />}
        containerElement={<div style={ containerElementStyle } />}
        mapElement={<div style={ mapElementStyle } />}
      />
    );
}

export default Map;

