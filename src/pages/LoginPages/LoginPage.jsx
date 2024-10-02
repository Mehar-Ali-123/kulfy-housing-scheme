import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import ErrorModal from '../../Components/ErrorModal/ErrorModal';
import CompanyLogo from "../../Components/Common/ComapnyLogo/CompanyLogo"
function LoginPage() {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
  return (
    <>
      <div className="container-fluid pb-5 mt-5">
        <div className=' row d-flex justify-content-center flex-column align-items-center pt-5 px-4 '>
          <div className='d-flex justify-content-center'><CompanyLogo /> </div>
          <div>
            <h2 className='text-center mt-5 fw-semibold fwt-600'>
              Get started with Kulfi Housing
            </h2>
            <div className="col-md-5 mx-auto mb-5">
              <p className='text-center'>
                <span className='txt-sharp-red fw-semibold'>  NOTE:</span> This registration is for Landlords only. If you are Tenant or an Employee, please contact your landlord to get login to the portal.
              </p>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="row">
                <div className="col-md-6 px-2   ">
                  <p className='py-1 my-0 fw-semibold txt-dark'>Legal First Name</p>
                  <div className=' border-inp   radius-card bkg-light'>
                    <InputText className=' ps-2 w-100 py-3' placeholder='Legal First Name' />
                  </div>
                </div>
                <div className="col-md-6 px-2    ">
                  <p className='py-1 my-0 fw-semibold txt-dark'>Legal Last Name</p>
                  <div className=' border-inp   radius-card bkg-light'>
                    <InputText className=' ps-2 w-100 py-3' placeholder='Legal Last Name' />
                  </div>
                </div>
                <div className="col-md-12   px-2 mt-4   ">
                  <p className='py-1 my-0 fw-semibold txt-dark'>Phone Number (mobile only)</p>
                  <div className=' border-inp   radius-card bkg-light'>
                    <InputText className='ps-2  w-100 py-3' placeholder='(555)-555-555' />
                  </div>
                </div>
                <div className="col-md-12    px-2 mt-4   ">
                  <p className='py-1 my-0 fw-semibold txt-dark'>Email Address</p>
                  <div className=' border-inp   radius-card bkg-light'>
                    <InputText className=' ps-2 w-100 py-3' placeholder='user@gmail.com' />
                  </div>
                </div>
                <div className="col-md-12    px-2 mt-4   ">
                  <p className='py-1 my-0 fw-semibold txt-dark'>Password</p>
                  <div className=' border-inp   radius-card bkg-light'>
                    <InputText className=' ps-2 w-100 py-3' placeholder='Create password' />
                  </div>
                </div>
                
                <p className='text-primary mt-4 cursor-pointer' onClick={()=>{setIsErrorModalOpen(true)}}>error signup</p>

                <div className="col-md-12    px-2 mt-4   ">  
                <Link to="/signIn-page">
                  <button className='w-100 h-100 bkg-drimary text-light  radius-card  d-flex justify-content-center py-3'> 
                    <p className='py-o my-0 '><img src="./assets/icons/right-arrow.png" alt="" /></p>
                  Get started  for free
                  </button> </Link> 
                </div>
                <Link to="/signIn-page">
                <p className=' fw-semibold text-center mt-2 txt-14'>Already have an account? <span className='text-primary fw-normal'>Login</span></p>
             </Link>
              </div>
            </div>
          </div>
        </div>
        <ErrorModal
        isOpen={isErrorModalOpen}
        errorContent={ <h4 className='mt-4 fw-semibold mt-3'><span className='txt-Primary'>Uh-oh!</span> We had a little lease mix-up during account creation. Mind giving it another shot?</h4>}
        onRequestClose={() => setIsErrorModalOpen(false)} 
        errorImage={<img src="/assets/icons/signUp.svg" />}
      />
      </div>
    </>
  )
}

export default LoginPage