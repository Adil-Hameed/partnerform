import React from 'react'

export default function FAQ() {
    return (
        <div className='container-fluid pb-5'>
            <div className='row w-80 mx-auto'>
                <div className='col-12 text-center mx-auto'>
                    <h2 className=''>
                        Frequently Asked <span style={{ color: "#2CAAE6" }}> Questions</span>
                    </h2>
                    <br />
                    <p className='fs-18'>
                        About sale-leasebacks
                    </p>
                    <br />
                </div>
            </div>
            <div className='row w-80 mx-auto pb-5'>
                <div className='col-sm-10 col-12 text-center mx-auto px-0'>
                    <div className='border-bottom pb-3 collapseExample1'>
                        <div className='d-flex justify-content-between align-items-center' data-bs-toggle="collapse"
                            href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                            <h3 className='fs-18 fw-bold roboto'>
                                Q. What exactly is a home sale-leaseback program?
                            </h3>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 1L8 15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className='roboto text-start  mb-0  collapse' id="collapseExample1">
                            A sale-leaseback is an altemative to traditional loans and reverse mortgages. With it, you can sell your home, receive cash at closing and continue living at home under a rental agreement. You'll
                            essentially sell and stay home.
                        </p>
                    </div>
                    <br />
                    <div className='border-bottom pb-3 collapseExample2'>
                        <div className=' d-flex justify-content-between align-items-center' data-bs-toggle="collapse"
                            href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                            <h3 className='fs-18 fw-bold roboto'>
                                Q. How is the price for my property determined?
                            </h3>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 1L8 15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className='roboto text-start  mb-0 collapse' id="collapseExample2">
                            It's based on comparable home sales in the area, market rents and the information you provided about the condition of your home. We do not determine the price or make offers on homes. We
                            work with home-buying investors who analyze market data and make the highest possible, no-hassle cash offer.
                        </p>
                    </div>
                    <br />

                    <div className='border-bottom pb-3 collapseExample3'>
                        <div className='d-flex justify-content-between align-items-center' data-bs-toggle="collapse"
                            href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                            <h3 className='fs-18 fw-bold roboto'>
                                Q. How long is the process?
                            </h3>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 1L8 15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className='roboto text-start  mb-0  collapse' id="collapseExample3">
                            Once the evaluation process is over, you'll receive an offer by email, typically within 5 days after we receive all of your information. The timeframe then depends on the time spent reviewing and
                            agreeing to sale and rental terms, negotiating the final details and choosing the closing date. This can take a few weeks or more.
                        </p>
                    </div>
                    <br />
                    <div className='border-bottom pb-3 collapseExample4'>
                        <div className=' d-flex justify-content-between align-items-center' data-bs-toggle="collapse"
                            href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                            <h3 className='fs-18 fw-bold roboto'>
                                Q. How long is the offer good for?
                            </h3>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 1L8 15" stroke="#414150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className='roboto text-start  mb-0 collapse' id="collapseExample4">
                            Most investor offers are good for 30 days. We'll work with you to make your transition as quick, seamless and enjoyable as possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
