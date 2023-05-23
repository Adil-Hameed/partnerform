import React from 'react'
import { useMatch } from 'react-router-dom'

export default function Divorcing() {
    return (
        <div className='container-fluid py-5'>
            <div className='row w-90 mx-auto'>
                <div className='col-md-6 text-md-start text-center'>
                    <h3 className='fs-40 w-80 lh-base'> 
                       {useMatch("/") ? "Divorcing and  Feeling Stuck with Your Home Equity?" :"Experience a fresh start without uprooting your life."} <span className='light-blue rounded px-1'>Key Benefits</span>
                    </h3>
                    <br />
                    <button className='light-green  fw-medium
                     rounded py-2 px-3 mb-4 border-0'>
                        About Sell2Rent®
                    </button>
                </div>
                <div className='col-md-6 text-start '>
                    <p className=''>
                        With our Sell & Leaseback program, <span style={{ color: "#2CAAE6" }}>you can sell your home and rent it back</span> for an agreed time. You'll have the financial resources you need to move forward with your life, while still maintaining the stability and comfort of staying in your home.
                    </p>
                    <br />
                    <p>
                        Here are the <span style={{ color: "#2CAAE6" }}>benefits of our program:</span>
                    </p>
                    <p className='d-flex'>
                        <span>
                            <img className='me-2' src='asset/tick-circle.svg' alt='' />
                        </span>
                        No need to move out of your home and uproot your life during an already difficult time.
                    </p>
                    <p className='d-flex'>
                        <span>
                            <img className='me-2' src='asset/tick-circle.svg' alt='' />
                        </span>
                        Cash out your equity without the stress of applying for a loan.
                    </p>
                    <p className='d-flex'>
                        <span>
                            <img className='me-2' src='asset/tick-circle.svg' alt='' />
                        </span>
                        Maintain control over the timeline and pace of your asset division.
                    </p>
                    <p className='d-flex'>
                        <span>
                            <img className='me-2' src='asset/tick-circle.svg' alt='' />
                        </span>
                        Avoid the pressure of having to make tough financial decisions quickly.
                    </p>
                    <p className='d-flex'>
                        <span>
                            <img className='me-2' src='asset/tick-circle.svg' alt='' />
                        </span>
                        Get the financial support you need to move forward with your life.
                    </p>
                    <br />
                    <p>
                        Take the first step towards a brighter future by providing your home address and finding out if you qualify for our Sell & Leaseback program.
                    </p>

                </div>
            </div>
        </div>
    )
}
