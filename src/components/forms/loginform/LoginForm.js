
import { EmailInput } from "../../atoms"
import { PasswordInput } from "../../atoms"
import styles from './LoginForm.module.css'
export const LoginForm=()=> {

    
   

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
                <div className="field">
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