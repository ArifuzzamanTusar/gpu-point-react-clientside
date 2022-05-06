import React from 'react';
import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css"
import { Pagination } from 'swiper';
import TestimonialLoop from '../../Templates/Loops/TestimonialLoop';


const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect( () => {
            fetch('data/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div>
            <Container>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                   
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        review.map(rev => <SwiperSlide key={rev.id}>  <TestimonialLoop data={rev}></TestimonialLoop> </SwiperSlide>)
                    }
                
                </Swiper>
            </Container>
        </div>
    );
};

export default Testimonial;