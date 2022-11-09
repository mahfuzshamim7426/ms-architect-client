import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiLight } from 'react-icons/ci';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../logo.png';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [darkMode, setDarkMode] = useState(false)
    // console.log('user', user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='header-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/"><img className='logo-img' src={logo} alt="" />MS Architect</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/services">Services</Link>
                            <Link className='nav-link' to="/blog">Blog</Link>
                            <Link className='nav-link' to="/faq">FAQ</Link>

                        </Nav>
                        <Nav>
                            <button className={`dark-button`}
                                onClick={() => {
                                    setDarkMode(!darkMode)
                                }}
                            >
                                {darkMode ? <BsFillMoonFill /> : <CiLight />
                                }
                            </button>
                            {user &&
                                user?.email ?
                                <button onClick={handleSignOut} className="">Log out</button>
                                : <Link to='/login'>
                                    <button className=''>Log In</button>
                                </Link>
                            }
                            {user && user?.photoURL &&
                                <button className='user-photo' data-toggle="tooltip" data-placement="bottom" title={user?.displayName}>
                                    <img src={user?.photoURL} alt="user" />
                                </button>
                            }
                            {user && !user?.photoURL &&
                                <button className='user-photo' data-toggle="tooltip" data-placement="bottom" title={user?.displayName}>
                                    <img src='./user-placeholder.png' alt="user" />
                                </button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;