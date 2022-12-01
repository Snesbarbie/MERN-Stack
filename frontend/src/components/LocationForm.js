import {useState} from "react"

const LocationForm = () => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [address, setAddress] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const location = {title, day, address}
        const response = await fetch('/api/locations',{
            method: 'POST',
            body: JSON.stringify(location),
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
            console.log('New Location Added')
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Location</h3>
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
            <button>Add Location</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default LocationForm