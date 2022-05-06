import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProduct from '../../../Hooks/useProduct';
import Productloops from '../../Templates/Loops/Productloops';

const Products = () => {

    const [product] = useProduct();
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