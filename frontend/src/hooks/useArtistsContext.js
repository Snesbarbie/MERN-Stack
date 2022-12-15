import { ArtistContext } from "../context/ArtistContext";
import { useContext } from "react";

export const useArtistsContext = ()=>{
    const context = useContext(ArtistContext)

    if(!context){
        throw Error('a use context must be used in a context provider')
    }

    return context
}