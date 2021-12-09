import { useState } from "react"
import {getItem,saveItem} from '../helpers/localstorage'

export const useLocalStorage=(key,initialValue)=>{

    const [storedValue,setStoredValue]=useState(()=>{

        try{
            const value=getItem(key)
            return value? value : initialValue
        }
        catch(error){
            console.error(error)
            return initialValue
        }
    })

    const setValue=newValue=>{

        try{
            const FuncValue= newValue instanceof Function ? newValue(storedValue) : newValue
            setStoredValue(FuncValue)
            saveItem(key,FuncValue)

        }
        catch(error){
            console.error(error)
        }
    }


    return [storedValue,setValue]
}