import axios from 'axios';
import { Button, Col, Container,  Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const Addproduct = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let navigate = useNavigate();

    const addProduct = async (data) => {

        await axios.post(`https://floating-tundra-94246.herokuapp.com/product`, data)
            .then(response => {
                toast.success("Successfully Added!");
                // console.log("added new");
                reset();
            });
    }

    return (
        <div>

            <div className="py-5">
                <Container>
                <div className="page_navigator mb-5">
                    <div className="p-4 rounded shadow d-flex justify-content-between align-items-center">
                        <div className="n_title">
                            <h4>Add New Product</h4>
                            <p>Create a new product Stock</p>
                        </div>
                        <div className="button-area">
                            <Button onClick={() => navigate(`/my-products`)} className='btn btn-primary'>My Products</Button>
                        </div>
                    </div>
                </div>
                    <Row>
                       
                        <Col md={12}>
                            <div className="form-container p-5 rounded shadow-sm">
                                
                                {/* -----  */}
                                <form className="add__item-main" onSubmit={handleSubmit(addProduct)}>
                                    <Row>

                                        <Form.Control type="text" value={0} hidden {...register('sold')} />
                                        <Form.Control type="text" value={user?.email} hidden {...register('email')} />
                                        <Col md={12}>
                                            <Form.Label>Product Name*</Form.Label>
                                            <Form.Control type="text" {...register('name', { required: "Product name is required." })} placeholder="GeForce RTX 3080" />
                                            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-4">
                                                <Form.Label>Product Brand*</Form.Label>
                                                <Form.Control type="text" {...register('brand', { required: "Product name is required." })} placeholder="NVDIA" />
                                                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-4">
                                                <Form.Label>Supplier Name*</Form.Label>
                                                <Form.Control type="text" {...register('supplier', { required: "Supplier Name is required." })} placeholder="Jhon Doe" />
                                                {errors.supplierName && <p className='text-danger'>{errors.supplierName.message}</p>}
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-4">
                                                <Form.Label>stock*</Form.Label>
                                                <Form.Control type="number" {...register('stock', { required: "Quantityis required." })} placeholder="500" />
                                                {errors.quantity && <p className='text-danger'>{errors.quantity.message}</p>}
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-4">
                                                <Form.Label>Price*</Form.Label>
                                                <Form.Control type="number" {...register('price', { required: "Price is required." })} placeholder="1500" />
                                                {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className="mb-4">
                                                <Form.Label>Image*</Form.Label>

                                                <Form.Control type="text" {...register('image', { required: "Image is required." })} placeholder="link" />

                                                {errors.img && <p className='text-danger'>{errors.img.message}</p>}
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className="mb-4">
                                                <Form.Label>Description*</Form.Label>

                                                <Form.Control as="textarea" type="text" {...register('short_disc', { required: "Description is required." })} style={{ height: '100px' }} placeholder="Description" />

                                                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className='d-flex justify-content-center'>
                                                <button type='submit' className='btn btn-primary'>
                                                    ADD PRODUCT
                                                </button>
                                            </div>
                                        </Col>

                                    </Row>
                                </form>

                                {/* ----  */}
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
        </div>
    );
};

export default Addproduct;