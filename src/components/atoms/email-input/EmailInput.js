import { useEffect, useState } from "react"
import { EMAIL_MIN_VALUE } from "../../../constants/Validation"

export const EmailInput=()=>{

    const [value,setvalue]=useState('')
    const [valueError,setValueError]=useState(false)


    useEffect(()=>{

        if(value && value.length < EMAIL_MIN_VALUE){
            setValueError(true)

        }else if (value && value.length >= EMAIL_MIN_VALUE) {
            setValueError(false)
        }

    },[value])

    const getClassName=()=>{
        let errorClassName=""
        if(value && value.length < EMAIL_MIN_VALUE){
         errorClassName="is-danger"
        }else if(value && value.length >= EMAIL_MIN_VALUE){
        errorClassName="is-success"
        }
        return errorClassName
    }

    return(
        <p className="control has-icons-left has-icons-right">
        <input
          className={  `input ${getClassName()}`} 
          type="value"
           placeholder="Email"
            name="email"
            value={value}
            onChange={({target})=>setvalue(target.value)}
            required
           />
        <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
        </span>
       {value && !valueError && <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
        </span>}
        {value&& valueError &&<span className="icon is-small is-right">
        <i className="fas fa-exclamation-triangle"></i>
        </span>}
    </p>
    )
}