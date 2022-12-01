import { useEffect, useState } from "react";

import LocationDetails from '../components/LocationDetails'
import LocationForm from '../components/LocationForm'

const Home = () => {
    const [locations, setLocations] = useState(null)
    useEffect(()=>{
        const fetchLocations = async ()=>{
            const response = await fetch('/api/locations')
            const json = await response.json()
            if(response.ok){
                setLocations(json)
            }
        }
        fetchLocations()
    },[])
    return (
        <div className="home">
            <div className="locations">
                {locations && locations.map((location)=> (
                    <LocationDetails key={location._id} location={location}/>
                    //<p key={location._id}>{location.title}</p>
                ))}
            </div>
            <LocationForm />
        </div>
    )
}

export default Home;