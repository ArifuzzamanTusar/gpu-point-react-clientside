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
                            <h2>  <img width={250} src="https://res.cloudinary.com/tusar/image/upload/v1651940469/gpu-point/gpu-point_zciihy.webp" alt="" /></h2>
                            <p>GPU Point is a warehouse where you may safely keep your GPU stocks. Stock up on supplies and take pleasure in your work.</p>
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