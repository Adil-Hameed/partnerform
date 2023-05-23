import React from 'react'

export default function Meeting() {
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                    In what way would you prefer to be contacted?
                </h3>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='meeting' />
                    <span className=''>Schedule meeting</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='meeting' />
                    <span className=''>Call me</span>
                </label>

            </div>
        </div>
    )
}
