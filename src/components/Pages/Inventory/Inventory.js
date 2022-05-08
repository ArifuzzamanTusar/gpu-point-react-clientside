import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Inventory = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // fetching requested data by id
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`http://localhost:5000/product/${productId}`);
            setProduct(data);
        }
        getProduct();
    }, [product, productId])


    const { name, price, stock, supplier, sold, short_disc, image } = product;


    // to update data fetching
    const fetchUpdateData = async (updatedProduct, message, callReset) => {
        const { data } = await axios.put(`http://localhost:5000/product/${productId}`, updatedProduct)
        setProduct(data);
        toast.success(message);
        if (callReset) { reset() }
    }

    // to deliver decrease quantity and increase sold
    const handleDeliver = () => {
        if (stock > 0) {
            const newStock = parseInt(stock) - 1;
            const newSold = parseInt(sold) + 1;
            console.log(newStock, newSold);
            const updatedProduct = { newStock, newSold };
            const message = 'Product Delivered!';

            fetchUpdateData(updatedProduct, message, false);
        } else {
            toast.success('Please stock item');
        }
    }

    // to stock increase quantity
    const onStockSubmit = (data) => {
        const { add_stock } = data;
        const newStock = parseInt(add_stock) + parseInt(stock);
        const updatedProduct = { newStock }
        const message = 'Stock update!';

        fetchUpdateData(updatedProduct, message, true);
    }
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col md={6}>
                        <div className="product-image">
                            <img className='img-fluid' src={image} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="product-dics p-4 shadow-lg rounded">
                            <div className="product_name">
                                <h2 className="h4"> {name}</h2>
                            </div>
                            <div className="supplier">
                                <div className="h5">Supplier: <b>{supplier}</b></div>
                            </div>
                            <div className="p-2"></div>
                            <div className="price">
                                <span className='h5'>Price:<b> {price}</b></span>
                                <small>TK</small>
                            </div>
                            <div className="py-3"><hr /></div>
                            <div className="product_disc">
                                {short_disc}
                            </div>

                            <div className="options">
                                <div className="stock-price p-3 shadow-sm my-3  d-flex justify-content-between align-items-center">
                                    <div className="stock">
                                        <span className='h4'>In Stock:  {stock}</span>
                                        <small>Pcs</small>

                                    </div>
                                    <div className="price">
                                        <span className='h4'>Sold: {sold}</span>
                                        <small>Pcs</small>
                                    </div>

                                </div>

                                <div className='mt-4'>
                                    <Button type='submit'
                                        onClick={handleDeliver}
                                        className='btn btn-primary col-12'
                                    >Delivered</Button>
                                </div>

                            </div>
                            {/* ----------------------------------- */}
                            <div className="re-stock mt-5 p-4     rounded shadow-sm">
                                <div className="h3">Restock this Item</div>
                                <form onSubmit={handleSubmit(onStockSubmit)}>
                                    <InputGroup className="mb-3">
                                        <FormControl type="number" placeholder="Stock Amount"  {...register('add_stock', { required: "Stock filed is required & Must be a number." })} />
                                        <Button variant="outline-secondary" id="button-addon2" type='submit'>
                                            Update to Stock
                                        </Button>
                                    </InputGroup>
                                    {errors.stock && <p className='text-danger'>{errors.stock.message}</p>}
                                </form>

                            </div>
                        </div>


                    </Col>
                </Row>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </Container>
        </div>
    );
};

export default Inventory;