import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function ConfirmPaymentSetting() {
    const data = [
        {
            para: "Total Monthly Rent & Fee",
            details: "4234"
        },
        {
            para: "Due on",
            details: "4234"
        },
        {
            para: "Total Monthly Rent & Fee",
            details: "4234"
        },
        {
            para: "Due on",
            details: "4234"
        }, 
    ];

    return (
        <div>
            <div className="container-fluid w-100 h-100">

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className='text-center mt-5 fw-semibold fwt-600'>
                                        Confirm payment Settings
                                    </h2>
                                    <div className="col-md-10 mx-auto mb-5">
                                        <p className='text-center'>Confirm payment Settings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <h3 className='fw-bold p-3 py-4 bkg-light-Drimary radius-card ps-4' >
                                    Monthly Rent & Fee
                                </h3>
                            </div>
                        </div>
                        {data.map((item, index) => (
                            <div className="row">
                                <div key={index} className="col-md-8 pe-0 py-0">
                                    <div className="bkg-light-card w-100 radius-card ps-2">
                                        <p className='p-3 d-flex justify-content-start align-items-center gap-2'> <img src="/assets/icons/building-warehouse.svg" alt="" />{item.para}</p>
                                    </div>
                                </div>
                                <div className="col-md-4  py-0">
                                    <div className="bkg-light-Drimary w-100 radius-card ">
                                        <p className='p-3'>{item.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-5 '> 
                        <button className='mb-3 border-drimary text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button'>
                            Finish
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default ConfirmPaymentSetting;