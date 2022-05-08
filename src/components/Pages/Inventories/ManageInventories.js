import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    let navigate = useNavigate();

    // fetching data with query
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(`https://floating-tundra-94246.herokuapp.com/products?page=${page}&size=${size}`);
            setProducts(data)
        }
        getProducts();
    }, [page, size])

    // fetching total product
    useEffect(() => {
        const getProductCount = async () => {
            const { data } = await axios.get('https://floating-tundra-94246.herokuapp.com/products-count');
            setPages(Math.ceil(data.count / 5));
        }
        getProductCount();
    }, [])

    // delete single product with sweetaleart
    const deleteProduct = async (productId) => {
        swal({
            title: "Are you sure?",
            text: "Be careful... Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://floating-tundra-94246.herokuapp.com/product/${productId}`)
                        .then(response => {
                            const remaining = products.filter(product => product._id !== productId);
                            setProducts(remaining);
                            swal("Product has been deleted!", {
                                icon: "success",
                            });
                        });
                } else {
                    swal("Action Cancelled, Chill!");
                }
            });
    }


    return (
        <div>
            <div className="py-5">
                <Container>
                    <div className="page_navigator mb-5">
                        <div className="p-4 rounded shadow d-flex justify-content-between align-items-center">
                            <div className="n_title">
                                <h4>All Products</h4>
                                <p>Showing all products</p>
                            </div>
                            <div className="button-area">
                                <Button onClick={ () => navigate(`/add-products`)} className='btn btn-primary'>Add Product</Button>
                            </div>
                        </div>
                    </div>
                    <div className="table-area">
                        <Table bordered hover responsive>
                            <thead>
                                <tr>

                                    <th>Thumbs</th>
                                    <th>Name</th>
                                    <th>Supplier</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Sold</th>
                                    <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    products.map(getProduct =>
                                        <tr key={getProduct._id} >
                                            <td width={50}> <img className='thumb-image img-fluid' src={getProduct.image} alt="" />  </td>
                                            <td>{getProduct.name}</td>
                                            <td>{getProduct.supplier}</td>
                                            <td>{getProduct.price}</td>
                                            <td>{getProduct.stock}</td>
                                            <td>{getProduct.sold}</td>
                                            <td>
                                                <Button onClick={() => navigate(`/inventory/${getProduct._id}`)} className='mx-1' variant='primary' > <FaCog /> </Button>
                                                <Button onClick={() => deleteProduct(getProduct._id)} variant='danger' > <BsTrash /></Button>

                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </Table>
                        {/* PAGINATION ================== */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='mb-4 d-flex justify-content-end'>
                                <span className='me-2'>Per Page</span>
                                <select defaultValue={5} onChange={e => setSize(e.target.value)}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </div>
                            <div className='mt-4 d-flex justify-content-end'>
                                {
                                    [...Array(pages).keys()].map(number => <Button
                                        className={page === number ? 'btn-page-selected btn-page mx-2 ' : 'btn-page mx-2 '}
                                        onClick={() => setPage(number)}>
                                        {number + 1}
                                    </Button>)
                                }
                            </div>
                        </div>
                        {/* =================================== */}
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default ManageInventories;
