import React from 'react'
import HowDoesSellCard from './HowDoesSellCard'

export default function HowDoesSell() {
    return (
        <div className='container-fluid py-5 light-gray'>
            <div className='row w-80 mx-auto'>
                <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                    <p className='fs-17 fw-semibold'>
                        HOW DOES Sell2Rent® WORK
                    </p>
                    <h3 className='fs-40 mb-3'>
                        It’s a <span style={{ color: "#2CAAE6" }}>Painless Process</span>
                    </h3>
                </div>
            </div>
            <div className='row w-90 mx-auto text-center'>
                <HowDoesSellCard />
            </div>
            <div className='row w-90 mx-auto text-center d-lg-block d-none '>
                <p className='fs-17 fw-bold mt-4 mb-0'>
                    Don’t worry. You can choose your <span style={{ color: "#2CAAE6" }}>selling terms</span> and we can customize your<span style={{ color: "#2CAAE6" }}> rental agreement</span> before you sign.
                </p>
            </div>
        </div>
    )
}
