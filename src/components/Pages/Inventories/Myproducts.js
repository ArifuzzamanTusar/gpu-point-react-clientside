import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsTrash  } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../../firebase.init';
// import useProduct from '../../../Hooks/useProduct';

const Myproducts = () => {
    // const [products] = useProduct();
    

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    let navigate = useNavigate();

    useEffect( () => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/my-products?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItems(data);
            } catch (error) {
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                    toast.error('Forbidden/Unauthorized access!');
                }
            }
        } 
        getMyItems();
    }, [user, navigate]);

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
                        axios.delete(`http://localhost:5000/product/${productId}`)
                            .then(response => {
                                const remaining = myItems.filter(product => product._id !== productId);
                                setMyItems(remaining);
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
            <Container className='py-5'>
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
                                myItems.map(getProduct =>
                                    <tr key={getProduct._id} >
                                        
                                        <td width={50}> <img className='thumb-image img-fluid' src={getProduct.image} alt="" />  </td>
                                        <td>{getProduct.name}</td>
                                        <td>{getProduct.supplier}</td>
                                        <td>{getProduct.price}</td>
                                        <td>{getProduct.stock}</td>
                                        <td>{getProduct.sold}</td>
                                        <td>
                                            <Button className='mx-1' variant='primary' > <FaCog /> </Button>
                                            <Button onClick={() => deleteProduct(getProduct._id)} variant='danger' > <BsTrash /></Button>

                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default Myproducts;