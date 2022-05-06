import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Addproduct = () => {
    return (
        <div>

            <div className="py-5">
                <Container>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}> 
                            <div className="form-container p-5 rounded shadow">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <FloatingLabel controlId="floatingInput" label="Product Name" className="mb-3" >
                                            <Form.Control type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <FloatingLabel controlId="floatingInput" label="Price" className="mb-3" >
                                                    <Form.Control type="number" placeholder="name@example.com" />
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <FloatingLabel controlId="floatingInput" label="Quantity" className="mb-3" >
                                                    <Form.Control type="number" placeholder="name@example.com" />
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <FloatingLabel controlId="floatingInput" label="Supplier" className="mb-3" >
                                            <Form.Control type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <FloatingLabel controlId="floatingInput" label="Short Discription" className="mb-3" >
                                            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3" >
                                            <Form.Control type="text" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Form.Group>


                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                        <Col md={3}> </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Addproduct;