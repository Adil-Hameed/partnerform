import React from 'react'


export default function StepBar({ step1, step2, step3, step4, step5 }) {
    return (
        <>
            <div className='container-fluid pb-5'>
                <div className='row w-90 mx-auto'>
                    <div className='row w-80 mx-auto'>
                        {step1 &&
                            <>
                                <div className='d-flex justify-content-evenly px-0'>
                                    <p className="col-2 light-blue-text text-center">
                                        Step1
                                    </p>
                                    <p className="col-2 formgray-text text-center">
                                        Step2
                                    </p>
                                    <p className='col-2 formgray-text  text-center'>
                                        Step3
                                    </p>
                                    <p className='col-2 formgray-text  text-center'>
                                        Step4
                                    </p>
                                </div>
                                <div className='border col-12 formgray-bar px-0 d-flex flex-wrap'>


                                    <div className='bar h-100 light-blue position-relative'>
                                        <img src='/asset/Group 1000006535.svg' alt='' className='img-fluid bluearrow' />
                                    </div>

                                </div>
                            </>
                        }
                        {step2 &&
                            <>

                                <div className='d-flex justify-content-evenly px-0 pt-5'>
                                    <p className="col-2 light-green-text text-center">
                                        Step1
                                    </p>
                                    <p className="col-2 light-blue-text text-center">
                                        Step2
                                    </p>
                                    <p className='col-2 formgray-text  text-center'>
                                        Step3
                                    </p>
                                    <p className='col-2 formgray-text  text-center'>
                                        Step4
                                    </p>
                                </div>
                                <div className='border col-12 formgray-bar px-0 d-flex flex-wrap'>

                                    <div className='bar h-100  light-green position-relative'>
                                        <img src='/asset/Greenarrow.svg' alt='' className='img-fluid greenarrow' />
                                    </div>
                                    <div className='bar h-100 light-blue position-relative'>
                                    </div>

                                </div>

                            </>
                        }
                        {step3 &&
                            <>
                                <div className='d-flex justify-content-evenly px-0 pt-5'>
                                    <p className="col-2 light-green-text text-center">
                                        Step1
                                    </p>
                                    <p className="col-2 light-green-text text-center">
                                        Step2
                                    </p>
                                    <p className='col-2 light-blue-text  text-center'>
                                        Step3
                                    </p>
                                    <p className='col-2 formgray-text  text-center'>
                                        Step4
                                    </p>
                                </div>
                                <div className='border col-12 formgray-bar px-0 d-flex flex-wrap'>

                                    <div className='bar h-100  light-green position-relative'>
                                    </div>
                                    <div className='bar h-100  light-green position-relative'>
                                        <img src='/asset/Greenarrow.svg' alt='' className='img-fluid greenarrow' />
                                    </div>
                                    <div className='bar h-100 light-blue position-relative'>
                                    </div>
                                </div>

                            </>
                        }

                        {step4 &&
                            <>
                                <div className='d-flex justify-content-evenly px-0 pt-5'>
                                    <p className="col-2 light-green-text text-center">
                                        Step1
                                    </p>
                                    <p className="col-2 light-green-text text-center">
                                        Step2
                                    </p>
                                    <p className='col-2 light-green-text  text-center'>
                                        Step3
                                    </p>
                                    <p className='col-2 light-blue-text  text-center'>
                                        Step4
                                    </p>
                                </div>

                                <div className='border col-12 formgray-bar px-0 d-flex flex-wrap'>

                                    <div className='bar h-100  light-green position-relative'>
                                    </div>
                                    <div className='bar h-100  light-green position-relative'>
                                    </div>
                                    <div className='bar h-100  light-green position-relative'>
                                        <img src='/asset/Greenarrow.svg' alt='' className='img-fluid greenarrow' />
                                    </div>
                                    <div className='bar h-100 light-blue position-relative'>
                                    </div>
                                </div>

                            </>
                        }


                    </div>
                </div>
            </div>

        </>
    )
}
