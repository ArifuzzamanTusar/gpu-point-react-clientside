import React from 'react';
import { Button, Col } from 'react-bootstrap';
// import { FaMapMarkerAlt, FaStar, FaClock, FaUsers } from "react-icons/fa";

import './Productloop.css'

const Productloops = (props) => {


    const { id, name, image, short_disc, price, stock, supplier } = props.data;

    const handleCheckout = (id) => {
        console.log(id);
    }


    return (
        <Col md={4} id={"loop_" + id}>
            <div className="product_loop my-3">
                <div className="product_image">
                    <img className='img-fluid' src={image} alt="" />

                </div>

                <div className="product_body p-3" >
                    <h3 className='py-3'>{name}</h3>
                    <div className="supplier">
                        Supplier: {supplier}
                    </div>
                    <p> {short_disc}</p>


                    <div className="options">
                        <div className="stock-price  d-flex justify-content-between align-items-center">
                            <div className="stock">
                            <span className='h4'> {stock}</span>
                                <small>Pcs</small>
                               
                            </div>
                            <div className="price">
                                <span className='h4'>{price}</span>
                                <small>TK</small>
                            </div>

                        </div>


                        <Button onClick={() => handleCheckout(id)} className='book_now col-12 my-3'>Manage </Button>
                    </div>

                </div>
            </div>
        </Col>
    );
};

export default Productloops;