import { InputText } from 'primereact/inputtext'
import React from 'react'
import { Link } from 'react-router-dom'

function AddYourPortfolio() {
    return (
        <>
            <div >
                <div className="container-fluid hv-80  d-flex justify-content-cener align-items-center ">
                    <div className="row d-flex justify-content-center  w-100">
                        <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                            <div>
                                <h2 className='text-center fw-semibold fwt-600'>
                                    Add your portfolio
                                </h2>
                            </div>
                            <div className="col-md-12 mt-5">
                                <p className='fw-semibold'>Address</p>
                                <div className=" box-shadow radius-card">
                                    <InputText className='w-100 py-3 txt-18 ' placeholder='Address here' />
                                </div>
                            </div>
                            <div className="col-md-12 mt-4   ">
                                <Link to="">
                                    <button className='w-100 h-100 bkg-drimary text-light  radius-card  d-flex justify-content-center py-3'>
                                        <p className='py-o my-0 '><img src="/assets/icons/right-arrow.png" alt="" /></p>
                                        Add my portfolio  </button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddYourPortfolio