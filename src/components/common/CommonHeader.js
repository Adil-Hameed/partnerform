import React from 'react'

export default function CommonHeader(props) {
    return (
        <>
            <div className='container-fluid pt-5 dark-blue'>
                <div className='row w-90 mx-auto text-white text-center'>
                    <div className='w-80 mx-auto  rounded'>
                        <h1 dangerouslySetInnerHTML={{ __html: props.text }} /> 
                        <p className='fs-33 light-blue-text py-3 '>
                            {props.p1}
                        </p>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5'>
                <div className='row w-90 mx-auto started text-white text-center dark-blue  rounded p-4'>
                    <p className='fs-26 fw-medium'>
                        {props.p2}
                    </p>
                    <div className='col-md-8 mx-auto fs-18 border bg-white mt-3 p-1 rounded d-flex align-items-center justify-content-center'>
                        <span className='mx-2'>
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.7808 18.7005C13.0905 15.7551 16 11.4759 16 8.6087C16 3.85424 12.4183 0 8 0C3.58172 0 0 3.85424 0 8.6087C0 11.4759 2.90945 15.7551 5.21921 18.7005C6.42425 20.2371 7.02677 21.0055 8 21.0055C8.97323 21.0055 9.57575 20.2371 10.7808 18.7005ZM8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12Z" fill="#5C5F71" />
                            </svg>
                        </span>
                        <input type='Email' className='rounded py-2 px-2  w-100 newsletter' placeholder='Enter your address to see if Sell2Rents program is right for you.' />
                        <span className='pointer px-2 light-green get  rounded d-flex align-items-center justify-content-center' >
                            Get Started
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
