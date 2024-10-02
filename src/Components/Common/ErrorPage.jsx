import React from 'react'
import CompanyLogo from './ComapnyLogo/CompanyLogo'

function ErrorPage() {
    return (
        <>
           <div className='d-flex justify-content-center align-items-center vh-100 h-100 bkg-light my-0 '>
           <div className='container mx-auto'>
                <div className='d-flex justify-content-center mb-5'> <CompanyLogo/></div>
                <div className="row w-100 h-100">
                    <div className="col-md-6  d-flex justify-content-center align-items-center flex-column text-center">
                        <p className='txt-Primary fs-100px fw-bold py-0 my-0'>
                            404
                        </p>
                        <div>
                            <p className='fs-4 fw-bold'>Whoops! </p>
                            <p className='fs-6 fw-semibold'>Something went wrong</p>
                            <button className='btn-bkg p-2 px-5 text-light radius-button mt-3  fw-semibold'>
                            Retry
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6  px-0 mx-0   d-flex justify-content-center align-items-center">
                        <img height="90%" width="80%"  src="./assets/images/errorHome.svg" alt="" />
                    </div>
                </div>
            </div>
           </div>
        </>

    )
}

export default ErrorPage