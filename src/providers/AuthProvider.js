import React, { useState } from "react"
import { useHistory } from "react-router"
import { AUTH_TOKEN } from "../constants/keys"
import { PROTECTED_PAGE_PATH } from "../constants/routes"
import { ItemExists, RemoveItem, SaveItem } from "../helpers/localstorage"

export const AuthContext=React.createContext(null)

export const AuthProvider=({children})=>{

    const [loggedIn,setLoggedIn]=useState(()=>{ItemExists(AUTH_TOKEN)})
    const history=useHistory()

    const logIn=(value)=>{
        setLoggedIn(true)
        SaveItem(AUTH_TOKEN,value)
        history.replace(PROTECTED_PAGE_PATH)
    }
    const logOut=()=>{
        setLoggedIn(false)
        RemoveItem(AUTH_TOKEN)
    }
  
    return (
        <AuthContext.Provider

    value={{
        logIn,
        loggedIn,
        logOut
    }}
    
    >
        {children}
    </AuthContext.Provider>
    )



}