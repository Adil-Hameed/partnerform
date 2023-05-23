import React from 'react'


export default function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='row w-90 mx-auto navbar'>
        <div className='col-12 d-flex align-items-center justify-content-between px-0 py-2 py-lg-4'>
          <img className='me-2 ' src='asset/Logo S2R New Horizontal -1 1.webp' width="169px" height="46px" alt=''></img>
          <p className='roboto mb-0  mt-2'>
            How it Works
          </p>
          <p className='roboto mb-0  mt-2'>
            For Partners
          </p>
          <p className='roboto mb-0  mt-2'>
            About Us
          </p>
          <p className='roboto mb-0  mt-2'>
            Learn More
          </p>

          <p className='roboto mb-0  mt-2'>
            Contact Us
          </p>
          <div className='d-flex'>
            <p className='light-green mt-2 px-4 me-3 fw-normal py-2 mb-0 rounded roboto'>
              Get Started
            </p>
            <p className='light-green mt-2 p-2 mb-0 fw-normal rounded roboto'>
              Schedule Meeting
            </p>
          </div>
        </div>
      </div>

      <div className='row w-90 mx-auto mobile-navbar'>
        <div className='col-12 d-flex align-items-center justify-content-between px-0 py-4'>
          <img className='me-2' src='asset/Logo S2R New Horizontal -1 1.webp' style={{ width: "150px", height: "40px" }} alt=''></img>
          <img className='me-2' src='asset/Menubar.svg' alt=''></img>
        </div>
      </div>

    </div>


  )
}
