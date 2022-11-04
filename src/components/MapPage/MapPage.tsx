import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, useLoadScript, MarkerF } from '@react-google-maps/api';
import './MapPage.css';

const containerStyle = {
    width: '100%',
    height: '100%'
    
};

interface IPosition {
    lat: number,
    lng: number
};



function getCurrentPosition(atualPosition: IPosition, setPosition: React.Dispatch<React.SetStateAction<IPosition>>) {
    console.log(navigator.geolocation && atualPosition.lat != 0);
    if (navigator.geolocation && atualPosition.lat == 0) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position);
                setPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });

            }
        );
    }
}

function mapPage() {

    let apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_KEY ? import.meta.env.PUBLIC_GOOGLE_MAPS_KEY : "AIzaSyB-gJOlF1k4OVJ53eWuI7Ya_nHnOS0Pmmk";
    const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey })

    console.log(apiKey);


    if (!isLoaded) return <> TESTE</>;

    return (
        <Map />
    );
}

function Map() {
    const [position, setPosition] = useState<IPosition>
        ({
            lat: 0,
            lng: 0
        });

       const center ={
        lat: -27.6085911,
        lng:-48.5833687
       } 

    getCurrentPosition(position, setPosition);

    return (
        <div className="map">
            <GoogleMap

                mapContainerStyle={containerStyle}
                center={position}
                zoom={15}
                clickableIcons={true}

            >
                <MarkerF
                    position={position} />
                <MarkerF
                    position={center} />
            </GoogleMap>
        </div>
    )
}

export default React.memo(mapPage);


