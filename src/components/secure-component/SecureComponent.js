import { Redirect } from "react-router"
import { HOME_PATH } from "../../constants/routes"


export const SecureComponent=({children})=>{

    let loggedIn=false
    return loggedIn?  children : <Redirect to={HOME_PATH}/>
}
