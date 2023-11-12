import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api";

export const ApiContext = createContext()

export const ApiContextProvider = ({children}) => {
    const [userInput, setUserInput] = useState("")
    
    const {data, isLoading, isError, refetch, isFetching} = useQuery("meals", ()=> fetchData(userInput), {refetchOnWindowFocus: false})
     
    

    return(
        <ApiContext.Provider value={{data, isLoading, isError, refetch, userInput, setUserInput}}>
            {children}
        </ApiContext.Provider>
    )
}