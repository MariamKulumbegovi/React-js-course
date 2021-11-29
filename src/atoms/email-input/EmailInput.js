import { useState } from "react"


export const EmailInput=()=>{

    const [email,setEmail]=useState()

    return(
        <>
         <p className="control has-icons-left has-icons-right">
            <input
             className="input"
              type="email"
               placeholder="Email"
                name="email"
                value={email}
                onChange={({target})=>setEmail(target.value)}
               />
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
            </span>
        </p>
        </>
    )
}