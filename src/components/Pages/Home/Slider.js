import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1651991957/gpu-point/kv-cover_pg9jx3.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>ASUS ROG Strix </h2>
                        <h4 className='slider_subtitle'> GeForce RTX 3080</h4>
                        <p className='col-md-6'>Stock the best Performance GPU on GPU point. Add your GPU stock today.  </p>

                        <Link className='btn btn-outline-light' to={'/add-products'}>Add your stock</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1651992114/gpu-point/364_rtx2080_light-1_qgsdls.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>Stock the Power</h2>
                        <h4 className='slider_subtitle'>  with Safe</h4>
                        <p className='col-md-6'>We ensure your stocks safety. keep away your hassles and joy with GPU POINT today </p>
                        <Link className='btn btn-outline-light' to={'/add-products'}>Add your stock</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1651992113/gpu-point/gettyimagesgraphicscards_rmyobc.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>Powefull Management</h2>
                        <h4 className='slider_subtitle'> Makes your easylife</h4>
                        <p className='col-md-6'>GPU point allows you to store your stocks by clicks and clicks easily.</p>
                        <Link className='btn btn-outline-light' to={'/manage-inventories'}>Manage Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1651991957/gpu-point/nvidia-geforce-rtx_bnwggt.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>Enlarge Warehouse</h2>
                        <h4 className='slider_subtitle'>The Capacity you need</h4>
                        <p className='col-md-6'>GPU Point offers a large wirehouse to store your products</p>
                        <Link className='btn btn-outline-light' to={'/add-products'}>Add your stock</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
  




        </Carousel>
    </div>
    );
};

export default Slider;