import { useContext} from "react"
import { EmailInput } from "../atoms/email-input/EmailInput"
import { PasswordInput} from "../atoms/Password-input/PasswordInput"
import { AuthContext } from "../providers/AuthProvider"


export const LoginForm=()=>{

  
    const {logIn}=useContext(AuthContext)


  

    const OnSubmit=(event)=>{
        event.preventDefault()

        const fd=new FormData(event.target)
        const loginData={}

        for(let [key,value] of fd.entries()){
            loginData[key]=value
        }
        console.log(loginData, "logindata")

        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method:"POST",
            headers:{
                "Content-type":"application/json",
                Accept:"application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(response=>response.json())
        .then(result=>
            {
                if(result.token){
                    logIn(result.token)
                   
                }
            }
            )
    }
    
   

    return(
        <div>
        <form onSubmit={OnSubmit}>
            <div className="field">
                <EmailInput/>
        </div>
        <div className="field">
            <PasswordInput/>
        </div>
        <div className="field">
        <p className="control">
            <button type="submit" className="button is-success">
            Login
            </button>
        </p>
        </div>
        </form>
        </div>
    )
}