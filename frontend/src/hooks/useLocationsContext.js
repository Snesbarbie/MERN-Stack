import { LocationContext } from "../context/LocationContext";
import { useContext } from "react";

export const useLocationContext = ()=>{
    const context = useContext(LocationContext)

    if(!context){
        throw Error('a use context must be used in a context provider')
    }

    return context
}