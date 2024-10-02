import { InputText } from 'primereact/inputtext'
import React from 'react'
import { Link } from 'react-router-dom'

function TrackingAddedExpenses() {
    return (
        <>
            <div className='p-5'>
                <div className="row">
                    <div className="col-md-11">
                        <div className="row d-flex gap-3">
                            <div className="col-md-5 bkg-light radius-bar border-btn">
                                <span className="p-input-icon-right w-100 d-flex justify-content-between">
                                    <InputText className='w-100 py-2 txt-18 ' placeholder='Search by address, or description' />
                                    <img src="/assets/icons/file-search-clr.svg" alt="" />
                                </span>
                            </div>
                            <div className="col-md-5 bkg-light radius-bar border-btn">
                                <span className="p-input-icon-right w-100"> 
                                    <InputText className='w-100 py-2 txt-18 ' placeholder='Search by address, or description' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className='mt-3 fw-semibold text-muted'>Showing 1 Result</p>
                    <div className="col-md-12 px-0 mx-0 ">
                        <div className='box-shadow radius-card px-4 mx-0 py-4 '>
                            <div className='row border-right-green mx-1'>
                                <div className="col-md-4  d-flex justify-content-center align-items-start flex-column   gap-2 py-1">
                                    <p className=' my-0 fw-semibold text-muted'>Testing vendor</p>
                                    <p className='py-0 my-0 text-muted'> Mar 31, 2023</p>
                                    <p className=' my-0 mt-3 fw-semibold text-muted'>Repairs</p>
                                    <p className='py-0 my-0 text-muted'>Lorem Ipsum Dolar Smit</p>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-start flex-column   gap-2 py-1">
                                    <p className='my-0 text-muted'>505 Epsom Rd</p>
                                    <p className='py-0 my-0 text-muted'>Ashley Graham</p>
                                    <p className='py-2 my-0'></p>
                                    <p className='my-0 mt-3 text-primary j-familly d-flex align-items-center gap-1 cursor-pointer'> <img src="/assets/icons/report-money-blue.png" alt="" />Receipt Attached</p>
                                </div>
                                <div className="col-md-2">
                                    <p className='py-0 my-0 text-muted text-end'>$125.00</p>
                                </div>
                                <div className="col-md-2">
                                    <p className='py-0 my-0 text-muted text-end'><img src="/assets/icons/chevron-down.png" alt="" /></p>
                                </div>
                                <diEditv className='d-flex justify-content-end'>
                                    <Link to="/kulfy-housing/add-expenses-tracking">
                                        <button className='border-drimary text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button'>
                                            Edit
                                        </button></Link>
                                </diEditv>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingAddedExpenses