import { useContext } from "react"
import { Redirect } from "react-router"
import { HOME_PATH, LOGIN_PATH} from "../../constants/routes"
import { AuthContext } from "../../providers/authprovider/AuthProvider"


export const SecureComponent=({Component, ...props})=>{

    const {loggedIn}=useContext(AuthContext)
       
    return loggedIn?  <Component {...props} /> : <Redirect to={LOGIN_PATH}/>
}
