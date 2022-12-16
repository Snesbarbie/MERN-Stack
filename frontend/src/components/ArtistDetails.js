const ArtistDetails = ({artist})=>{
    return (
        <div className="box-details">
            <h4>{artist.name}</h4>
            <p><strong>Day: </strong>{artist.day}</p>
            <p><strong>Time: </strong>{artist.time}</p>
            <p><strong>About: </strong>{artist.about}</p>
            <p>{artist.createdAt}</p>
        </div>

    )
    
}

export default ArtistDetails