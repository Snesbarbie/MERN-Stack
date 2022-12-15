import { createContext, useReducer } from "react";

export const ArtistContext = createContext()

export const artistReducer = (state, action) => {
    switch(action.type){
        case 'SET_ARTISTS':
            return{
                artists: action.payload
            }
        case 'CREATE_ARTIST':
            return{
                artists: [action.payload, ...state.locations]
            }
        default:
            return state
    }
}

export const ArtistsContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(artistReducer, {
        artists: null
    })

    return(
        <ArtistContext.Provider value={{...state, dispatch}}>
            {children}
        </ArtistContext.Provider>
    )
}