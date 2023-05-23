import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RangeSlider from 'react-bootstrap-range-slider';


export default function LeaseTerm() {
    const [value, setValue] = useState(5000);
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handlevalue = (value) => {
        if (value === 10000) {
            const thousandValue = (value / 1000).toFixed(0);
            return `$${thousandValue}K`;
        } else if (value >= 1000) {
            const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return `$${formattedValue}`;
        } else {
            return `$${value}`;
        }
    }

    const [value2, setValue2] = useState(375000);
    const handleChange2 = (e) => {
        setValue2(e.target.value)
    }
    const handlevalue2 = (value2) => {
        if (value2 >= 1000) {
            const thousandValue2 = (value2 / 1000).toFixed(0);
            return `$${thousandValue2}k`;
        } else {
            return `$${value2}`;
        }
    }

    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                    What is your desired lease term?
                </h3>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='year' />
                    <span className=''>less than 1 Year</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='year' />
                    <span className=''>1 Year</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='year' />
                    <span className=''>2 Years</span>
                </label>

                <label className='check-box-parent'>
                    <input type="radio" name='year' />
                    <span className=''>3 Years +</span>
                </label>

            </div>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded py-5'>
                <h3 className='fs-33 text-center fw-semibold mb-5 dark-blue-text'>
                    What is your desired rental amount (per month)?
                </h3>
                <RangeSlider
                    min={0}
                    step={50}
                    max={10000}
                    tooltip='on'
                    tooltipPlacement="top"
                    value={value}
                    onChange={handleChange}
                    tooltipLabel={handlevalue}
                />
                <div className='d-flex justify-content-between dark-blue-text fw-bold'>
                    <p className='mb-0'>
                        $0
                    </p>
                    <p className='mb-0'>
                        $10K
                    </p>
                </div>
            </div>


            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                    Select your credit score range:
                </h3>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='score' />
                    <span className=''>300 - 579</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='score' />
                    <span className=''>580-669</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='score' />
                    <span className=''>670-739</span>
                </label>

                <label className='check-box-parent  mb-3'>
                    <input type="radio" name='score' />
                    <span className=''>740-799</span>
                </label>

                <label className='check-box-parent'>
                    <input type="radio" name='score' />
                    <span className=''>800-850</span>
                </label>

            </div>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded py-5'>
                <h3 className='fs-33 text-center fw-semibold mb-5 dark-blue-text'>
                    What is the total household income (annual)?
                </h3>
                <RangeSlider
                    min={0}
                    step={1000}
                    max={750000}
                    tooltip='on'
                    tooltipPlacement="top"
                    value={value2}
                    onChange={handleChange2}
                    tooltipLabel={handlevalue2}
                />
                <div className='d-flex justify-content-between dark-blue-text fw-bold'>
                    <p className='mb-0'>
                        $0
                    </p>
                    <p className='mb-0'>
                        $750K
                    </p>
                </div>
            </div>



            <div className='text-center pb-5'>
                <Link to="/step2">
                    <p className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        &lt; &lt; Back
                    </p>
                </Link>
                <Link to="/step4">
                    <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Next &gt; &gt;
                    </p>
                </Link>
            </div>
        </div>
    )
}
