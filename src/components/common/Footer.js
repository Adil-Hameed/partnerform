import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='container-fluid py-5 light-gray'>

                <div className='row w-90 mx-auto'>

                    <div className='col-lg-4 col-12 mx-0 px-0 py-lg-0 py-3'>
                        <img className='img-fluid ' src='asset/Logo S2R New Horizontal -1 1.webp' width="169px" height="46px" alt=''></img>
                        <br />
                        <h3 className='fw-normal roboto fs-25 fst-italic mt-4' >
                            Subscribe to our newsletter
                        </h3>
                        <br />
                        <div className='fs-18 border bg-white  p-1 rounded d-flex align-items-center justify-content-center'>
                            <input type='Email' className='rounded py-2 px-2  w-100 newsletter' placeholder='Email' />
                            <span className='pointer px-2 light-green  rounded d-flex align-items-center justify-content-center' style={{ width: "129px", height: "49px" }}>
                                Subscribe
                            </span>
                        </div>
                        <div className='py-4'>
                            <img src='asset/Path 16.svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                            <img src='asset/instagram.svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                            <img src='asset/linkedin (1).svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                            <img src='asset/tik-tok.svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6 mx-auto '>
                        <h3 className='fs-22 mt-3 fw-semibold'>
                            Tool
                        </h3>
                        <br />
                        <p className='fw-normal fs-18' >
                            Property inspection
                        </p>
                        <p className='fw-normal fs-18' >
                            Sell your property
                        </p>
                        <p className='fw-normal fs-18' >
                            Invest in a property
                        </p>
                        <p className='fw-normal fs-18 mb-4' >
                            Book a Meetting
                        </p>
                        <div className=' d-lg-none d-block'>
                            <h3 className='fs-22 mt-md-5 fw-semibold'>
                                FAQ’s
                            </h3>
                            <br />
                            <p className='fw-normal fs-18' >
                                FAQ’s Sellers
                            </p>
                            <p className='fw-normal fs-18' >
                                FAQ’s Investors
                            </p>
                            <p className='fw-normal fs-18' >
                                FAQ’s Agents
                            </p>
                            <p className='fw-normal fs-18' >
                                FAQ’s Strategic partners
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6 mx-auto'>
                        <h3 className='fs-22 mt-3 fw-semibold'>
                            Quick Links
                        </h3>
                        <br />
                        <p className='fw-normal fs-18' >
                            Home
                        </p>
                        <p className='fw-normal fs-18' >
                            About sell2rent
                        </p>
                        <p className='fw-normal fs-18' >
                            Our program
                        </p>
                        <p className='fw-normal fs-18' >
                            Agent
                        </p>
                        <p className='fw-normal fs-18' >
                            Contact us
                        </p>
                        <p className='fw-normal fs-18' >
                            News and insights
                        </p>
                        <p className='fw-normal fs-18' >
                            Careers
                        </p>
                        <p className='fw-normal fs-18' >
                            Internships
                        </p>
                        <p className='fw-normal fs-18' >
                            privacy policy
                        </p>
                        <p className='fw-normal fs-18' >
                            Brand guidelines
                        </p>
                    </div>
                    <div className='col-lg-2 d-lg-block d-none col-6 mx-lg-auto '>
                        <h3 className='fs-22 mt-3 fw-semibold'>
                            FAQ’s
                        </h3>
                        <br />
                        <p className='fw-normal fs-18' >
                            FAQ’s Sellers
                        </p>
                        <p className='fw-normal fs-18' >
                            FAQ’s Investors
                        </p>
                        <p className='fw-normal fs-18' >
                            FAQ’s Agents
                        </p>
                        <p className='fw-normal fs-18' >
                            FAQ’s Strategic partners
                        </p>
                    </div>
                </div>

                <div className='row w-90 mx-auto'>
                    <div className='col-12 text-lg-start text-center'>
                        <p className='f-17 fw-normal mb-0 pt-lg-0 pt-4'>
                            &copy; 2023 All Rights Reserved
                        </p>
                    </div>

                </div>

            </div>



        </>


    )
}
