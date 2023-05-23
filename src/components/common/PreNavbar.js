import React from 'react'

export default function PreNavbar() {
    return (
        <div className='container-fluid light-blue d-sm-block d-none'>
            <div className='row w-90 mx-auto'>
                <div className='col-12 d-flex align-items-center justify-content-between px-0 py-2 py-lg-4'>
                    <div className='d-flex  align-items-center flex-wrap text-center'>
                        <p className='mb-0 me-4  roboto'>
                            <img className='me-2' src='asset/image 319.svg' alt=''></img>
                            info@sell2rent.com</p>
                        <p className='mb-0 me-4  roboto'>
                            <img className='me-2' src='asset/image 318.svg' alt=''></img>
                            Questions? call us: 1-800-954-6373</p>
                        <p className='mb-0 me-4  roboto'>
                            <img className='me-2' src='asset/image 321.svg' alt=''></img>
                            Mon - Fri: 9.00 am - 5.00 pm</p>
                    </div>

                    <p className='border py-1 px-2 rounded d-flex m-0 roboto pointer'>
                    Español
                        <span className="ms-1" >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9467 5.45337H7.79341H4.05341C3.41341 5.45337 3.09341 6.2267 3.54674 6.68004L7.00008 10.1334C7.55341 10.6867 8.45341 10.6867 9.00674 10.1334L10.3201 8.82004L12.4601 6.68004C12.9067 6.2267 12.5867 5.45337 11.9467 5.45337Z" fill="white" />
                            </svg>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}
