import { useState } from "react"



export const PasswordInput=()=>{

    const [password,setPassword]=useState()
    return(
        <>
         <p className="control has-icons-left">
            <input
             className="input"
              type="password"
               placeholder="Password"
               name="password"
               value={password}
               onChange={({target})=>setPassword(target.value)}

               />
            <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
            </span>
        </p>
        </>
    )
    
}