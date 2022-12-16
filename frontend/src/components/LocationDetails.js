import {Link} from 'react-router-dom'
const LocationDetails = ({location})=>{
    return (
        <div className="box-details">
            <h4>{location.title}</h4>
            <p><strong>Day: </strong>{location.day}</p>
            <p><strong>Address: </strong>{location.address}</p>
            <p>{location.createdAt}</p>
            <Link to={'/lineup/day/' + location.day}><h4>Lineup</h4></Link>
        </div>
    )
    
}

export default LocationDetails