import React from 'react'

function SetUpPaymentScreen() {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row box-shadow radius-card">
                    <div className="col-md-12">
                        <div className="row  border-bottom">
                            <div className="col-md-8">
                                <div className={`row py-4 py-xxl-4 px-4`}>
                                    <div className="col-md-3 col-xxl-2 d-flex justify-content-start align-items-center px-0">
                                        <div className={`img-box-port d-flex justify-content-center align-items-center p-4 radius-card`}>
                                            <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-8 d-flex justify-content-center align-items-start flex-column ps-2">
                                        <h5 className='fw-semibold py-0 my-0 pt-1 mt-3 mt-md-0'>4817 Straight Flush Dr
                                        </h5>
                                        <p className='py-2 my-0'>Las Vegas, 0123</p>
                                        {/* Add more details here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <p className='d-flex justify-content-between align-items-center flex-wrap gap-2 my-0'> <h5 className='py-o my-0 '>Unit 2 Blaise Fisher, Gabrielle Wilburn, Curtis Fisher</h5> <span className='  txt-18 my-0 fw-semibold text-muted'>May 01, 2021 . no end date</span></p>
                            <div className="row py-4">
                                <div className="col-md-3 border-right-green d-flex justify-content-center align-items-start flex-column   gap-2 py-1">
                                    <p className='txt-19 my-0 fw-semibold text-muted'>Monthly Rent & fees</p>
                                    <p className='py-0 my-0'> <span>$0.00 </span> No Payment is due </p>
                                </div>
                                <div className="col-md-3  d-flex justify-content-center align-items-start flex-column   gap-2 py-1">
                                    <p className='  txt-19 py-1 my-0 fw-semibold text-muted'>Current Balance</p>
                                    <p className='py-0 my-0'> <span>$1,185.00</span>. Due on 1st</p>
                                </div>
                            </div>
                            <p className='txt-18 fw-semibold'>Past 30 days of payment</p>
                            <div className="px-4 ms-0 me-4 w-100 border-btn py-3 d-flex justify-content-between radius-card align-items-center flex-wrap  gap-3 gap-md-0 ">
                                <p className='py-0 my-0'>Apr 01</p>
                                <p className='py-0 my-0'>Blaise Fisher</p>
                                <p className=' px-1 my-0 txt-14 bkg-green txt-green radius-button'>Completed</p>
                                <p className='py-0 my-0'>-$1,185.00</p>
                            </div>
                            <div className='d-flex justify-conter-center'>
                            <div className="j-familly px-0 text-primary w-100 w-md-50   py-3 d-flex justify-content-between justify-content-md-start gap-3 gap-md-5 radius-card align-items-center flex-wrap  mx-auto  mx-md-0">
                                <p className='py-0 my-0 d-flex align-items-center gap-1'><img src="/assets/icons/circle-plus-blue.svg" alt="" />Add Bill </p>
                                <p className='py-0 my-0 d-flex align-items-center gap-1'><img src="/assets/icons/report-blue.png" alt="" />Add Credit</p>
                                <p className='py-0 my-0 d-flex align-items-center gap-1'><img src="/assets/icons/report-money-blue.png" alt="" />Record Payment</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetUpPaymentScreen