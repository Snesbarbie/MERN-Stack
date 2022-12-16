import { useEffect } from "react";
import { useArtistsContext } from "../hooks/useArtistsContext";
import ArtistDetails from '../components/ArtistDetails'


const Day1 = () => {
    const {artists, dispatch} = useArtistsContext()
    useEffect(()=>{

        const fetchLocations = async ()=>{
            const response = await fetch('/api/artists/day/1')
            const json = await response.json()

                if(response.ok){
                    dispatch({type: 'SET_ARTISTS', payload: json})
            }
        }
        fetchLocations()
    }, [dispatch])

    return (
        <div className="home">
            <div className="artists">

                {artists && artists.map((artist)=> (
                    <ArtistDetails key={artist._id} artist={artist}/>
                ))}
            </div>
            
        </div>
    )
}

export default Day1;