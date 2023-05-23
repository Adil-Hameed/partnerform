import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Header1 from '../components/step1/Header1'
import StepBar from '../components/common/StepBar'
import ChooseOption from '../components/step1/ChooseOption'

export default function Step1() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Header1 />
            <StepBar step1 />
            <ChooseOption />
            <Footer />
        </>
    )
}
