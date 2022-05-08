import React from 'react';
import { Image } from 'react-bootstrap';
import './TestimonialLoop.css';

const TestimonialLoop = (props) => {
    const { rating, name, image, review, designation } = props.data;

    return (

        <div className="review_widget my-3">
            <Image className='quote_icon' src='https://res.cloudinary.com/tusar/image/upload/v1649022130/random-projects/quote_sazsw0.png'></Image>
            <div className="review_widget_inner">
                <div className="d-flex align-items-center">
                    <Image className='avater' src={image}></Image>
                    <div className="name_review">
                        <h4 className='author'> {name}</h4>
                        <div className="deg">{designation}</div>
                    </div>

                </div>
                <p className="review-text py-3">
                    "{review.substring(0, 120)} ..."
                </p>
                <div className="rating">Rating: {rating} out of 5</div>
            </div>
        </div>


    );
};

export default TestimonialLoop;