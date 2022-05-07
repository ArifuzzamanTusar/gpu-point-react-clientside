import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useProduct from '../../../Hooks/useProduct';
import { BsTrash  } from "react-icons/bs";
import { FaCog } from "react-icons/fa";

const ManageInventories = () => {

    const [products] = useProduct();
    return (
        <div>
            <div className="py-5">
                <Container>
                    <div className="table-area">
                        <Table  bordered hover responsive>
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
                                            <td width={50}> <img className='thumb-image img-fluid'  src={getProduct.image} alt="" />  </td>
                                            <td>{getProduct.name}</td>
                                            <td>{getProduct.supplier}</td>
                                            <td>{getProduct.price}</td>
                                            <td>{getProduct.stock}</td>
                                            <td>{getProduct.sold}</td>
                                            <td>
                                                <Button className='mx-1' variant='primary' > <FaCog/> </Button>
                                                <Button variant='danger' > <BsTrash/></Button>

                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default ManageInventories;
