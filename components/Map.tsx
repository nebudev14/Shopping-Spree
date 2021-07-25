import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

const Map: any = ({lat}: any, {lng}: any) => { 
    return (
        <GoogleMap
            center= {{ lat: lat, lng: lng }}
            zoom={10}
        >
            <Marker
                key={1}
                position={{lat: lat, lng: lng}}
            />
        </GoogleMap>    
    );
}

export default Map;

