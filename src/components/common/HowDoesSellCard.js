import React from 'react'
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PreArrow from './PreArrow';

export default function HowDoesSellCard() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreArrow />,
    };

    return (
        <>
            <div className='col-12  d-lg-flex d-none  align-items-center  justify-content-center text-center px-0'>
                <div className='how-does-sell-card rounded text-center  h-100  pt-3 px-2'>
                    <img src="asset/icons s2r-50.png" alt='' />
                    <h3 className='fw-bold fs-20'>
                        STEP 1
                    </h3>
                    <p className=''>
                        Share a few details about your home with us and speak to one of our representatives.
                        (We’re nice. We promise.)
                    </p>
                </div>
                <svg className='d-md-block d-none mx-xxl-5 mx-2' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
                    <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='how-does-sell-card rounded text-center h-100 pt-3 px-2'>
                    <img src="asset/world.png" className='py-2' alt='' />
                    <h3 className='fw-bold fs-20'>
                        STEP 2
                    </h3>
                    <p>
                        We match you with home-buying investors in our national network. (We aim for multiple, competing bids.)
                    </p>
                </div>
                <svg className='d-md-block d-none mx-xxl-5 mx-2' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
                    <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='how-does-sell-card rounded text-center h-100 pt-3 px-2'>
                    <img src="asset/icons s2r-54.png" alt='' />
                    <h3 className='fw-bold fs-20'>
                        STEP 3
                    </h3>
                    <p>
                        You review one or more cash offers and the lease terms. Then, it's time to choose and accept your favorite.
                    </p>
                </div>
                <svg className='d-md-block d-none mx-xxl-5 mx-2' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
                    <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='how-does-sell-card rounded text-center h-100 pt-3 px-2'>
                    <img src="asset/cup.png" alt='' />
                    <h3 className='fw-bold fs-20'>
                        STEP 4
                    </h3>
                    <p>
                        You get cash at closing, sign a lease agreement and continue living in comfort at home.
                    </p>
                </div>
            </div>

            <div className='col-12  d-lg-none d-block mx-auto text-center'>
                <Slider {...settings} className='mx-auto'>
                    <div className='how-does-sell-card rounded text-center h-100  pt-3 px-2'>
                        <img className='mx-auto' src="asset/icons s2r-50.png" alt='' />
                        <h3 className='fw-bold fs-20'>
                            STEP 1
                        </h3>
                        <p>
                            Share a few details about your home with us and speak to one of our representatives.
                            (We’re nice. We promise.)
                        </p>
                    </div>
                    <div className='how-does-sell-card rounded text-center  h-100 pt-3 px-2'>
                        <img className='mx-auto py-2' src="asset/world.png" alt='' />
                        <h3 className='fw-bold fs-20'>
                            STEP 2
                        </h3>
                        <p>
                            We match you with home-buying investors in our national network. (We aim for multiple, competing bids.)
                        </p>
                    </div>
                    <div className='how-does-sell-card rounded text-center h-100 pt-3 px-2'>
                        <img className='mx-auto' src="asset/icons s2r-54.png" alt='' />
                        <h3 className='fw-bold fs-20'>
                            STEP 3
                        </h3>
                        <p>
                            You review one or more cash offers and the lease terms. Then, it's time to choose and accept your favorite.
                        </p>
                    </div>
                    <div className='how-does-sell-card rounded text-center h-100 pt-3 px-2'>
                        <img className='mx-auto' src="asset/cup.png" alt='' />
                        <h3 className='fw-bold fs-20'>
                            STEP 4
                        </h3>
                        <p>
                            You get cash at closing, sign a lease agreement and continue living in comfort at home.
                        </p>
                    </div>
                </Slider>
            </div>

        </>
    )
}
