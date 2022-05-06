
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Products from './Products';
import Slider from './Slider';
import Testimonial from './Testimonial';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <div className="Testimonial py-5 ">
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>  What People Says about us?</h2>
                    </div>
                    <Testimonial></Testimonial>
                </div>
            </div>


            <div className="call-to-action py-5 ">
                <div className="container">
                    <div className="py-5 text-center">
                        <h2 className='text-white'>  Lets join with GPU POINT Today</h2>
                        <p className='text-white col-md-6 mx-auto py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur itaque accusamus similique beatae expedita aliquam dolorum incidunt distinctio molestiae.</p>
                        <div className="py-5">
                            <Link to={'/manage-inventories'} className='btn btn-outline-light'> Get Started Now</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;