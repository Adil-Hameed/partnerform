import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import TypesofHouse from '../components/step2/TypesofHouse'
import Estimate from '../components/step2/Estimate'


export default function Step2() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step2 />
            <TypesofHouse />
            <Estimate />
            <Footer />
        </>
    )
}
