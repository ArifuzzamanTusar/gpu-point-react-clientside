import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <footer className='bg-teal text-white'>
            <div className="container ">
                <Row className='py-5'>
                    <Col md={4}>
                        <div className="footer-container py-2">
                            <h2>  <img width={250} src="https://res.cloudinary.com/tusar/image/upload/v1650267511/travel/touraholic_y37ysx.png" alt="" /></h2>
                            <p>Touraholic is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh.</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="footer-container py-2">
                            <h5>QuickLinks</h5>
                            <div className="divider"></div>
                            <div className="lists">
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Terms and services</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footer-container py-2">
                            <h5>Connect</h5>
                            <div className="divider"></div>
                            <div className="lists">
                                <ul>
                                    <li>info@gpupoint.com</li>
                                    <li>+8801713 000 000</li>
                                    <li>gpupoint.web.app</li>

                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>


                <hr />
                <div className="text-center py-3"> &copy; 2022 - All right reserved | Developed by Arifuzzaman Tusar </div>
            </div>
        </footer>
    );
};

export default Footer;