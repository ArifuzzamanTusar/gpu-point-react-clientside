import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Customlink from '../../Utilities/Customlink';
import { FaPowerOff } from "react-icons/fa";

import './Header.css'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);
    const username = user?.displayName;

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-teal' sticky="top">
                <Container className=''>
                    <Navbar.Brand >
                        <Customlink to={'/'}> <img width={150} src='https://res.cloudinary.com/tusar/image/upload/v1650267511/travel/touraholic_y37ysx.png' alt="" /> </Customlink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Customlink to={'/'}>Home</Customlink>
                            <Customlink to={'/about'}>About</Customlink>
                            <Customlink to={'/blog'}>Blog</Customlink>


                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <NavDropdown title={username ? username : "Welcome!"} id="collasible-nav-dropdown">

                                        <NavDropdown.Item > <Customlink to={'/manage-inventories'}>Manage Inventories</Customlink> </NavDropdown.Item>
                                        <NavDropdown.Item > <Customlink to={'/add-products'}>Add Products</Customlink> </NavDropdown.Item>
                                        <NavDropdown.Item > <Customlink to={'/my-products'}>My Products</Customlink> </NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <div onClick={() => handleSignOut()} className="btn text-center text-white dropdown-item "><FaPowerOff /> Log Out</div>
                                    </NavDropdown>

                                    :
                                    <Link to={'/login'} className='btn btn-outline-light'> Get Started Now</Link>


                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;