import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {product_id} = useParams();

    const handleDeliver = (id) =>{
        console.log(id);
    }
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col md={6}>
                        <div className="product-image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1651828564/gpu-point/gpu-1_kf68ru.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="product-dics">
                            <div className="product_name">
                                <h2 className="h4"> ASUS ROG Strix GeForce RTX 3080 Ti OC Edition 12GB GDDR6X Gaming Graphics Card</h2>
                            </div>
                            <div className="supplier">
                                SupplierName
                            </div>
                            <div className="product_disc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat maiores accusamus temporibus voluptates aut perferendis ab fuga fugit qui?
                            </div>

                            <div className="options">
                        <div className="stock-price  d-flex justify-content-between align-items-center">
                            <div className="stock">
                            <span className='h4'> sdad</span>
                                <small>Pcs</small>
                               
                            </div>
                            <div className="price">
                                <span className='h4'>asdas</span>
                                <small>TK</small>
                            </div>

                        </div>


                        <Button onClick={() => handleDeliver(product_id)} className='book_now col-12 my-3'>Deliver  </Button>
                    </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Inventory;