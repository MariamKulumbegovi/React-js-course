import { Route, Switch } from 'react-router-dom';
import { SecureComponent } from './components/secure-component/SecureComponent';
import * as route from './constants/routes';
import { Login } from './Pages/Auth/login/Login';
import { Register } from './Pages/Auth/register/Register';
import { HomePage } from './Pages/Home';
import { ProtectedPage } from './Pages/Protected-page';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.HOME_PATH} component={HomePage} exact />
      <Route path={route.LOGIN_PATH} component={Login} />
      <Route path={route.REGISTER_PATH} component={Register} />
      <Route path={route.PROTECTED_PAGE_PATH}>
        <SecureComponent Component={ProtectedPage} />
      </Route>
    </Switch>
  );
};
