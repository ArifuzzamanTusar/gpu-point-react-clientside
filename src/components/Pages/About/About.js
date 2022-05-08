import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagetitle from '../../Global/Pageheader/Pagetitle';

const About = () => {
    return (
        <div>
            <Pagetitle title="ABOUT" subtitle="Gpu Point warehouse "></Pagetitle>
            <Container>
                <div className="py-5">
                    <Row>
                        <Col md={6}>
                            <div className="image">
                                <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1651993917/gpu-point/2021-06-21-image-26_mcazvq.webp" alt="" srcset="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="p-3">
                                <h4>GPU POINT WAREHOUSE</h4>
                                <p>
                                    GPU Point is a warehouse where you may safely keep your GPU stocks. Stock up on supplies and take pleasure in your work.
                                </p>
                                <p>GPU Point offers a large wirehouse to store your products also it allows you to conveniently save your stocks with a few clicks.</p>
                                <div className="py-3"><Link to={'/manage-inventories'} className='btn btn-outline-dark'> Manage your stocks today</Link></div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    );
};

export default About;