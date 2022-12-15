const LocationDetails = ({location})=>{
    return (
        <div className="box-details">
            <h4>{location.title}</h4>
            <p><strong>Day: </strong>{location.day}</p>
            <p><strong>Address: </strong>{location.address}</p>
            <p>{location.createdAt}</p>
        </div>
    )
    
}

export default LocationDetails