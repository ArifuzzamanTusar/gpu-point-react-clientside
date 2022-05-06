import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Customlink from '../../../Hooks/Customlink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-teal'  sticky="top">
                <Container className=''>
                    <Navbar.Brand >
                        <Customlink to={'/'}> <img width={150} src='https://res.cloudinary.com/tusar/image/upload/v1650267511/travel/touraholic_y37ysx.png' alt="" /> </Customlink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Customlink to={'/'}>Home</Customlink>
                            <Customlink to={'/add-product'}>Add Products</Customlink>


                        </Nav>
                        <Nav>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;