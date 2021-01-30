import GoogleMapReact from "google-map-react";
import MAPCss from "./Map.module.css";
import {apiGoogleMaps} from '../config';
import LocationMarker from './LocationMarker';
import Loader from './Loader';
import HeaderMap from './HeaderMap';
import LocationInfoBox from './LocationInfoBox';

import {useState, useEffect} from 'react';

const Map = ({center, zoom }) => {


    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
            const { events } = await res.json()

            setEventData(events)
            setLoading(false)


        }

        fetchEvents()
        

        console.log(eventData)
    }, [])

    // const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={
                () => alert("🔥"+ ev.title + "🔥" + "\nID:" + ev.id)
            }/>
        }
        return null;
    })

    return (
        <>
            <HeaderMap />
            <div className={MAPCss.map}>
                {!loading ?
                    <>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: apiGoogleMaps }}
                            defaultCenter={center}
                            defaultZoom={zoom}
                        >
                            {markers}
                        </GoogleMapReact>
                    </>
                    : <Loader />}
            </div>
        </>
    )
}

Map.defaultProps = {
    center: {
        lat:-34.6061,
        lng: -58.4726
    },
    zoom: 5
}

export default Map