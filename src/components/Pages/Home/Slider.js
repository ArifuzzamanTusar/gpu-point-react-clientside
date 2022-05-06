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
                    src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/slider-sunderban_ybd01j.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>ASUS ROG Strix </h2>
                        <h4 className='slider_subtitle'> GeForce RTX 3080</h4>
                        <p className='col-md-6'><strong>Touraholic</strong> is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. Safe traveling, your security, and your enjoyment are our focus during your travels.</p>

                        <Link className='btn btn-outline-light' to={'/tour-packages'}>Explore Tours</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/slider-sunderban_ybd01j.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>Sundarbans Mangrove</h2>
                        <h4 className='slider_subtitle'> Adventure the largest mangrove forest</h4>
                        <p className='col-md-6'>Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. </p>
                        <Link className='btn btn-outline-light' to={'/checkout/104'}>Book a Sundarban Tour</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1650157221/travel/slider-st-martin_mwxrof.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>St. Martin's Island</h2>
                        <h4 className='slider_subtitle'> Discover the beauty of the only coral reef island in Bangladesh</h4>
                        <p className='col-md-6'>St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. </p>
                        <Link className='btn btn-outline-light' to={'/checkout/103'}>Book a St.Martin Tour</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1650157224/travel/slider-sajhek_q4spvi.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>Sajek Valley</h2>
                        <h4 className='slider_subtitle'> A Touch of Clouds on your hand</h4>
                        <p className='col-md-6'>Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet (610 m) above sea level. Sajek Tripuri Valley is known as the Queen of Hills and Roof of Rangamati.</p>
                        <Link className='btn btn-outline-light' to={'/checkout/107'}>Book a Sajhek Tour</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src="https://res.cloudinary.com/tusar/image/upload/v1650157223/travel/slider-bali_facauz.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <div className="carousel_inner container">
                        <h2 className='slider_title'>BALI</h2>
                        <h4 className='slider_subtitle'> A magical blend of Natural Creature</h4>
                        <p className='col-md-6'>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan.</p>
                        <Link className='btn btn-outline-light' to={'/checkout/105'}>Book a BALI Tour</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>




        </Carousel>
    </div>
    );
};

export default Slider;