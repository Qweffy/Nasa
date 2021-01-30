import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import LMCss from "./LocationMarker.module.css";

const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className={LMCss.locationMarker} onClick={onClick}>
            <Icon icon={locationIcon} className={LMCss.locationIcon} />
        </div>
    )
}

export default LocationMarker
