import { useState, useEffect } from "react"
export const PasswordInput=() => {

    const [value, setValue]=useState("")
    const [hasError,setHasError]=useState(false)

    let numbers=/[0-9]/

    useEffect(()=>{
        if(value && value.length < 6 && !numbers.test(value) ) {
            setHasError(true)
        } else if (value && value.length >= 6 && numbers.test(value)) {
            setHasError(false)
        }
    },[value])

    const setClassName=()=> {
        let classNameError =""
        if (hasError && value) {
            classNameError="is-danger"
        }else if (!hasError && value) {
            classNameError="is-success"
        }
        return classNameError
    }


    return (

         <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input
                    className={`input ${setClassName()}`}
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={value}
                    onChange={({target})=>setValue(target.value)}
                  />
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
                {!hasError && value  && <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
                </span>}
                {hasError && value && <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
                </span>}
            </p>
        </div>
            
    )
}