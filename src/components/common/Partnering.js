import React from 'react'
import { useMatch } from 'react-router-dom';

export default function Partnering(props) {
   
    return (
        <div className={`container-fluid ${useMatch("/") ? "mt-5 py-5" : "pb-5"}`}>
            <div className={`row w-90 mx-auto ${useMatch("/") ? "partnering" : ""} `}>
                <div className='col-md-6 text-md-start text-center'>
                    <p className='fs-17 fw-medium light-blue-text'>
                        PARTNERING FOR A BETTER SOLUTION
                    </p>
                    <h3 className='fs-40 w-80'>
                        {props.text}
                    </h3>
                </div>
                <div className='col-md-6 text-md-start text-center'>
                    <p className='mb-0'>
                        {props.p1}
                    </p>
                    <br />
                    <p className='mb-0'>
                        {props.p2}
                    </p>
                </div>
            </div>
        </div>
    )
}
