import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProduct from '../../../Hooks/useProduct';
import Productloops from '../../Templates/Loops/Productloops';
import Loading from '../../Utilities/Loading';

const Products = () => {

    const [product,setProduct, spinner] = useProduct();
    if (spinner) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <Container>
                <Row>
                    {
                        product.slice(0,6).map(getProduct => <Productloops key={getProduct._id} data={getProduct}></Productloops>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Products;