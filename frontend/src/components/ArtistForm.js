import {useState} from "react"
import { useArtistsContext } from "../hooks/useArtistsContext";

const ArtistForm = () => {
    const{dispatch} = useArtistsContext()
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [address, setAddress] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const artist = {title, day, address}
        const response = await fetch('/api/artists',{
            method: 'POST',
            body: JSON.stringify(artist),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDay('')
            setAddress('')
            setError(null)
            console.log('New Artist Added', json)
            dispatch({type: 'CREATE_ARTIST', payload: json})
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Artist</h3>
            <label>Title: </label>
            <input 
            type="text" 
            onChange={(event) =>
            setTitle(event.target.value)
            }
            value={title}
            />

            <label>Day: </label>
            <input 
            type="number" 
            onChange={(event) =>
            setDay(event.target.value)
            }
            value={day}
            />
            <label>Address: </label>
            <input 
            type="text" 
            onChange={(event) =>
            setAddress(event.target.value)
            }
            value={address}
            />
            <button>Add Artist</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ArtistForm