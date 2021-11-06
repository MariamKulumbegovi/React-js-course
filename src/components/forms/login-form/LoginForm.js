import { EmailInput } from "../../elements/email-input/EmailInput"
import { PasswordInput } from "../../elements/password-input/PasswordInput"
export const LoginForm =() => {

    const onSubmit =(event)=> {
            event.preventDefault()

          const LoginFormData=new FormData(event.target)
          const lfd={}

          for (let [key,value] of LoginFormData.entries()){
              lfd[key]=value
          }
          console.log(lfd)
    }

    return (

        

        <>
       
       <form className="section box" onSubmit={onSubmit}>
        <h1 className="my-5 h1 ">Welcome back! Log in to your account:</h1>
        <div>
            <EmailInput/>
            <PasswordInput/>
        </div>
        
            <div className="field">
                 <p className="control">
                     <button  className="button is-danger my-4">
                    Login
                    </button>
                 </p>
            </div>
        </form>
        </>
    )
}