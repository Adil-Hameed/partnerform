import React, { useState } from 'react'

export default function TypesofHouse() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-evenly justify-content-around mx-auto rounded pb-5'>
                <h3 className='fs-33 text-center fw-bold mb-4 dark-blue-text'>
                    What is the type of house you are looking to sell?
                </h3>

                <div onClick={() => handleOptionClick('Single-family')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Single-family' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Single Family.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Single-family house
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Townhouse')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Townhouse' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Townhouse.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Townhouse
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Mobile')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Mobile' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/mobile-manufactured.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Mobile/ Manufactured
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Other')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Other' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/other.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Other
                    </p>
                </div>

            </div>

        </div>
    )
}
