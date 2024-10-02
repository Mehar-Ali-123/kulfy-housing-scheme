
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'
import ErrorModal from '../../Components/ErrorModal/ErrorModal';
import CompanyLogo from '../../Components/Common/ComapnyLogo/CompanyLogo';

function SignInPage() {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
    return (
        <>
            <div className='container-fluid w-100 mx-0 px-0'>
                <div className="row w-100 h-100 px-0 mx-0">
                    <div className="col-md-6  d-flex justify-content-center align-items-center ">
                        <div className="container-fluid d-flex justify-content-center align-items-center  ">
                            <div className=' row d-flex justify-content-center flex-column align-items-center   px-4 '>
                                <div className='d-flex justify-content-center'><CompanyLogo/> </div>
                                <div>
                                    <div className="col-md-8 mx-auto">
                                        <h2 className='text-start mt-3 fw-semibold fwt-600'>
                                            Welcome Back
                                        </h2>
                                        <div className="row">
                                            <div className="col-md-12    px-2 mt-3  ">
                                                <p className='py-1 my-0 fw-semibold txt-dark'>Email Address</p>
                                                <div className=' border-inp   radius-card bkg-light'>
                                                    <InputText className=' ps-2 w-100 py-3' placeholder='user@gmail.com' />
                                                </div>
                                            </div>
                                            <div className="col-md-12   px-2 mt-3   ">
                                                <p className='py-1 my-0 fw-semibold txt-dark'>Password</p>
                                                <div className=' border-inp   radius-card bkg-light'>
                                                    <InputText className='ps-2 w-100 py-3' placeholder='Enter your password ' />
                                                </div>
                                                <p className='fw-semibold text-primary txt-14 mt-1 cursor-pointer'>Forgot Password? <Link to='/error-page'><span className='ms-4 cursor-pointer'> click on me 🏡 (error page)</span></Link></p>
                                                <p className='fw-semibold text-danger'>Wrong email or password</p>
                                           
                                            </div>
                                            <p className='text-primary cursor-pointer' onClick={()=>{setIsErrorModalOpen(true)}}>error Login page</p>

                                            <div className="col-md-12    px-2 mt-4   ">
                                                <Link to="/kulfy-housing/found-portfolio">
                                                    <button className='w-100 h-100 bkg-drimary text-light  radius-card  d-flex justify-content-center py-3'>
                                                        <p className='py-o my-0 '><img src="./assets/icons/right-arrow.png" alt="" /></p>
                                                        Sign In                                                    </button> </Link>
                                            </div>
                                            <Link to="/signUp">
                                            <p className=' fw-semibold text-center mt-2 txt-14'>New here? <span className='text-primary fw-normal cursor-pointer'>Signup </span></p></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  px-0 mx-0  ">
                        <img className='img-fit' src="./assets/images/signIn.svg" alt="" />
                    </div>
                </div>
            </div>
            <ErrorModal
        isOpen={isErrorModalOpen}
        errorContent={ <h4 className='mt-4 fw-semibold mt-3'><span className='txt-Primary'>Oops!</span> Our digital key seems to be misaligned. Try entering again?</h4>}
        onRequestClose={() => setIsErrorModalOpen(false)} 
        errorImage={<img src="/assets/icons/login.svg" />}
      />
        </>
    )
}

export default SignInPage