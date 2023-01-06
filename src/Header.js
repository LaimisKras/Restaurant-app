import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'

function Header () {

    let user = JSON.parse (localStorage.getItem ('user-info'));
    const history = useHistory ();
    
    function logOut () {
        localStorage.clear ();
        history.push ("/register");
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="ps-3" href="home">RESTAURANTS APP</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        {
                            localStorage.getItem ('user-info') ? 
                            <>
                                <Link to="/">Restaurants List</Link>
                                <Link to="/add">Add Restaurant</Link>
                                <Link to="/update">Update Restaurant</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        }   
                    </Nav>
                        { 
                            localStorage.getItem ('user-info') ?
                    <Nav>
                        <NavDropdown title = {user && user.name} className="pe-5">
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                            :null
                        }
            </Navbar>
        </div>
    )
};

export default Header;