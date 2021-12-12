import { Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {
  HOME_PATH,
  LOGIN_PATH,
  PROTECTED_PAGE_PATH,
  REGISTER_PATH,
} from '../../constants/routes';
import { useAuthContext } from '../../providers/authprovider/AuthProvider';

export const Header = () => {
  const { loggedIn, logOut } = useAuthContext();

  const renderGuestLinks = () => {
    return (
      <div className="navbar-item">
        <div className="buttons">
          <Link to={REGISTER_PATH} className="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link to={LOGIN_PATH} className="button is-light">
            Log in
          </Link>
        </div>
      </div>
    );
  };
  const renderUserLinks = () => {
    return (
      <div className="navbar-item">
        <div className="buttons">
          <button className="button is-primary" onClick={logOut}>
            <strong>Log Out</strong>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand"> */}
          {/* <Link className="navbar-item" to="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
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
              Protected Page
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink to="#" className="navbar-link">
                More
              </NavLink>

              <div className="navbar-dropdown">
                <NavLink to="#" className="navbar-item">
                  About
                </NavLink>
                <NavLink to="#" className="navbar-item">
                  Jobs
                </NavLink>
                <NavLink to="#" className="navbar-item">
                  Contact
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink to="#" className="navbar-item">
                  Report an issue
                </NavLink>
              </div>
            </div>
          </div> */}
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href={HOME_PATH}>Home</Nav.Link>
                <Nav.Link href={PROTECTED_PAGE_PATH}>Protected Page</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                
                <Nav.Link eventKey={2} href="#memes">
                {loggedIn ? renderUserLinks() : renderGuestLinks()}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* <div className="navbar-end">
            {loggedIn ? renderUserLinks() : renderGuestLinks()}
          </div>
        </div>
      </nav> */}
    </>
  );
};
