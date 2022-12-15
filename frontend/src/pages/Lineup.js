import { useEffect } from "react";
import { useArtistsContext } from "../hooks/useArtistsContext";
import ArtistDetails from '../components/ArtistDetails'
import ArtistForm from '../components/ArtistForm'

const Lineup = () => {
    const {artists, dispatch} = useArtistsContext()

    useEffect(()=>{
        const fetchLocations = async ()=>{
            const response = await fetch('/api/artists')
            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_ARTISTS', payload: json})
            }
        }
        fetchLocations()
    })
    return (
        <div className="home">
            <div className="artists">
                {artists && artists.map((artist)=> (
                    <ArtistDetails key={artist._id} artist={artist}/>
                ))}
            </div>
            <ArtistForm />
        </div>
    )
}

export default Lineup;