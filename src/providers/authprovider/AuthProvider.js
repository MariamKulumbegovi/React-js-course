import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { AUTH_TOKEN } from "../../constants/constants";
import { PROTECTED_PAGE_PATH } from "../../constants/routes";
import { deleteItem, itemExists, saveItem } from "../../helpers/localstorage";

export const AuthContext= React.createContext(null)

export const AuthProvider=({children})=>{

    const [loggedIn,setLoggedIn]=useState(()=>itemExists(AUTH_TOKEN))

    const history=useHistory()

    const logOut=()=>{
        setLoggedIn(false)
        deleteItem(AUTH_TOKEN)
    }
    const logIn=()=>{
        setLoggedIn(true)
        saveItem(AUTH_TOKEN)
        history.replace(PROTECTED_PAGE_PATH)
    }

    return (
        <AuthContext.Provider
        value={{
            loggedIn,
            logOut,
            logIn
        }}
        >{children}</AuthContext.Provider>
    )
}

export const useAuthContext=()=>{
    const value=useContext(AuthContext)
    
    if(!value){
        throw new Error("not defined") ;
    }
    return value
}