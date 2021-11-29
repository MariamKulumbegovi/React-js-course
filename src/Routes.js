import { Route, Switch } from "react-router";
import { SecureComponent } from "./components/secure-component/SecureComponent";

import * as route from "./constants/routes";
import { LoginPage } from "./pages/Auth/login/LoginPage";
import { SignUpPage } from "./pages/Auth/SignUp/SignUpPage";
import { HomePage } from "./pages/Home-page/HomePage";
import { ProtectedPage } from "./pages/protected-page/ProtectedPage";
import { Background } from "./pages/starry-night/Background";

export const Routes=()=>{

    return (
        <Switch>
            <Route path={route.HOME_PATH}  component={HomePage} exact />
            <Route path={route.LOGIN_PATH}  component={LoginPage}/>
            <Route path={route.REGISTER_PATH}  component={SignUpPage}/>
            <Route path={route.PROTECTED_PAGE_PATH}>
                <SecureComponent Component={ProtectedPage} />  
            </Route>
            <Route path={route.STARRY_NIGHT_PATH}>
                <SecureComponent Component={Background} />  
            </Route>
          
            
            
        </Switch>
    )
}