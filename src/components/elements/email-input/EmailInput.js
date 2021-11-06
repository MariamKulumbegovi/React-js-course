import { useState, useEffect } from "react"

export const EmailInput = () => {

    const [value,setValue]=useState("")
    const [hasError,setHasError]=useState(false)

    useEffect(()=>{
        if(value && value.length < 8) {
            setHasError(true)
         } else if (value && value.length >=8){
             setHasError(false)
         }
     },[value])
     
    const getClassName=() => {
        let errorClassName=""
        if( hasError && value) {
            errorClassName="is-danger"
        }else if (!hasError && value) {
            errorClassName="is-success"
        }
        return errorClassName
    }
  
    

    return(
    <div className="field">
        <p className="control has-icons-left has-icons-right ">
            <input
             className={  `input ${getClassName()}`}
              type="email" 
              placeholder="Email"
              name="email"
              value={value}
              onChange={({target})=>setValue(target.value)}
              />
            <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
            </span>
            {!hasError &&value && <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
            </span>}
            {hasError && value &&<span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
            </span>}
        </p>
    </div>
    )
}