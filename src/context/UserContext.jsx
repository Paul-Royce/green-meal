import { createContext, useState, useRef, useEffect } from "react";
import { fetchData } from "../api";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const inputRef = useRef("")
    const [apiData, setApiData] = useState([])

    
    const callApi = async ()=> {
        const data = await fetchData(inputRef.current.value)
        setApiData(data)
    }
    
    return(
        <UserContext.Provider value={{inputRef, callApi, apiData, setApiData}}>
            {children}
        </UserContext.Provider>
    )
}