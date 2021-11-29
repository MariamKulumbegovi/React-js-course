import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { HOME_PATH, LOGIN_PATH, PROTECTED_PAGE_PATH, REGISTER_PATH, STARRY_NIGHT_PATH } from "../../../constants/routes"
import { AuthContext } from "../../../providers/AuthProvider"

export const Header=()=>{

  const {loggedIn,logOut}=useContext(AuthContext)
  

  const renderUser=()=>{
    return (
      
          <div className="navbar-item">
        <div className="buttons">
          <button onClick={logOut}  className="button is-primary">
            <strong> Log  Out</strong>
          </button>
         
        </div>
      </div>
      
    )
}
const renderGuest=()=>{
  return (
  
      <div className="navbar-item">
        <div className="buttons">
          <NavLink to={REGISTER_PATH} className="button is-primary">
            <strong>Sign up</strong>
          </NavLink>
          <NavLink to={LOGIN_PATH} className="button is-light">
            Log in
          </NavLink>
        </div>
      </div>
     
  )
}

    return(
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link  className="navbar-item" to={HOME_PATH} >
    🏠
    </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink to={HOME_PATH} className="navbar-item">
        Home
      </NavLink>

      <NavLink to={PROTECTED_PAGE_PATH} className="navbar-item">
        protected page
      </NavLink>
      <NavLink to={STARRY_NIGHT_PATH} className="navbar-item">
        Starry Night
      </NavLink>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      {loggedIn? renderUser() : renderGuest()}
    </div>
  </div>
</nav>
        </div>
    )
}