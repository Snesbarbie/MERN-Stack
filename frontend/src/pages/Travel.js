import { useEffect } from "react";
import { useLocationContext } from "../hooks/useLocationsContext";
import LocationDetails from '../components/LocationDetails'


const Travel = () => {
    const {locations, dispatch} = useLocationContext()

    useEffect(()=>{
        const fetchLocations = async ()=>{
            const response = await fetch('/api/locations')
            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_LOCATIONS', payload: json})
            }
        }
        fetchLocations()
    }, [dispatch])
    return (
        <div className="home">
            <div className="locations">
                {locations && locations.map((location)=> (
                    <LocationDetails key={location._id} location={location}/>
                ))}
            </div>
           
        </div>
    )
}

export default Travel;