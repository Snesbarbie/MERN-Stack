import { createContext, useReducer } from "react";

export const LocationContext = createContext()

export const loactionReducer = (state, action) => {
    switch(action.type){
        case 'SET_LOCATIONS':
            return{
                locations: action.payload
            }
        case 'CREATE_LOCATION':
            return{
                locations: [action.payload, ...state.locations]
            }
        default:
            return state
    }
}

export const LocationsContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(loactionReducer, {
        locations: null
    })

    return(
        <LocationContext.Provider value={{...state, dispatch}}>
            {children}
        </LocationContext.Provider>
    )
}