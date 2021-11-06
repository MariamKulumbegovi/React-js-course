import { useState,useEffect } from "react";


export const NumberInput=()=> {

    const [value,setValue]=useState("")
    const [hasError,setHasError]=useState(false)

    const numbers=/[0-9]/

    useEffect(()=>{

        if(value.length<9 && !numbers.test(value)){
            setHasError(true)
        }else if (value.length >= 9 && numbers.test(value)) {
            setHasError(false)
        }else{
            setHasError(true)
        }

    },[value])

    const setClassName=()=> {
        let errorClassName=""
        if(hasError && value){
            errorClassName="is-danger"
        }else if (!hasError && value) {
            errorClassName="is-success"
        }
        return errorClassName
    } 

    return(
        <>
        <div class="field is-horizontal">
            <div class="field-label"></div>
                <div class="field-body">
                    <div class="field is-expanded">
                    <div class="field has-addons">
                        <p class="control">
                        <a class="button is-static">
                            +995
                        </a>
                        </p>
                        <p class="control is-expanded">
                        <input
                            class={`input ${setClassName()}`}
                            type="tel" 
                            placeholder="Your phone number"
                            name="phoneNumber"
                            value={value}
                            onChange={({target})=>setValue(target.value)}
                         />
                        </p>
                    </div>
                    <p class="help">Do not enter the first zero</p>
                    </div>
            </div>
         </div>
        </>

    )
}

