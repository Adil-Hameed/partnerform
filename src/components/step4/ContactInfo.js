import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactInfo() {
    return (
        <div className='container-fluid'>


            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded  pb-3 '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                    Your contact information
                </h3>
            </div>
            <div className="row w-80 mx-auto text-white">
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="first-name">First name:</label>
                    <input type='text' id="first-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="Last-name">Last name:</label>
                    <input type='text' id="Last-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="mobile">Mobile: </label>
                    <input type='text' id="mobile" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="email">Email: </label>
                    <input type='text' id="email" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
            </div>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded pt-5 pb-3 '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                    Your current spouse’s contact information
                </h3>
            </div>
            <div className="row w-80 mx-auto text-white">
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="first-name">First name:</label>
                    <input type='text' id="first-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="Last-name">Last name:</label>
                    <input type='text' id="Last-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="mobile">Mobile: </label>
                    <input type='text' id="mobile" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="email">Email: </label>
                    <input type='text' id="email" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start d-flex col-12 align-items-start mt-2 px-md-4 px-0 dark-blue-text">
                    <input type='checkbox' id="policy2" className='rounded mt-1 me-2 flex-shrink-0 ' />
                    <label htmlFor="policy2" className='formgray-text'>Both parties agree on selling the home.</label>
                </div>
                <div className="text-start d-flex col-12 align-items-start mt-2 px-md-4 px-0 dark-blue-text">
                    <input type='checkbox' id="policy" className='rounded mt-1 me-2 flex-shrink-0 ' />
                    <label htmlFor="policy" className='formgray-text'>By checking the box, you agree to our privacy policy and allow us to use your information to contact you about our services. Please read our <span style={{ color: "#2CAAE6" }} >privacy policy</span>  for more information.</label>
                </div>
            </div>
            <div className='text-center py-5'>
                <Link to="">
                    <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Submit
                    </p>
                </Link>
            </div>
        </div>
    )
}
