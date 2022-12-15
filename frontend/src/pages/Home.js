import { useEffect } from "react";
import { useLocationContext } from "../hooks/useLocationsContext";
import LocationDetails from '../components/LocationDetails'
import LocationForm from '../components/LocationForm'

const Home = () => {
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
    })
    return (
        <div className="home">
            <div className="locations">
                {locations && locations.map((location)=> (
                    <LocationDetails key={location._id} location={location}/>
                ))}
            </div>
            <LocationForm />
        </div>
    )
}

export default Home;