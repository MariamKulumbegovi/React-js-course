import { again, user } from "../../helpers/User"
import { Counter } from "../counter/Counter"
import { Home } from "../Home/Home"
import { LoginForm } from "../forms/loginform/LoginForm"

export const Content=()=>{

    const values=[1,2]
    return(
        <div className="container ">
      {/* <Home user={user} title="user title" bio age again={again} />
      <Counter/>
      <Counter initialValue={10} />
      {values.map((num,index)=>{return ( <Counter initialValue={num} key={index} />)})} */}
        <LoginForm/>
        </div>
    )
}