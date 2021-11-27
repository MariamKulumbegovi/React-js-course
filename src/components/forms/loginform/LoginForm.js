
import {useState } from "react"
import { Switch } from "react-router"
import { EmailInput } from "../../atoms"
import { PasswordInput } from "../../atoms"
import styles from './LoginForm.module.css'



export const LoginForm=()=> {

    const [value,setValue]=useState("")
   
   console.log(value)
    const onSubmit=(event)=>{
        event.preventDefault()

        
     const fd= new FormData(event.target)
     const loginData={}
     for (let [InputName,value] of fd.entries() ){

        loginData[InputName]=value

     }   
     console.log(loginData)
    }

    return (
        <div className={styles.mt50}>
            <form onSubmit={onSubmit}>
                <div className="field">
                <EmailInput/>
                </div>
                <div className="field">
                <PasswordInput/>
                </div>
                {/* <div className="control">
                <label htmlFor="marital status" className="label">Choose your marital status</label>
                <div className="select">
                    <select name="marital status" value={value} onChange={({target})=>setValue(target.value)} >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                    </select>
                    </div>
                </div> */}
                <div className={`field ${styles[`mt30`]}`}>
                <p className="control">
                    <button className="button is-success" type="submit">
                    Login
                    </button>
                </p>
                </div>
            </form>
        </div>
    )
}