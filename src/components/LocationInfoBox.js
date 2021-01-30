

const LocationInfoBox = ({info}) => {
    return (
        <div>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>Title: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
