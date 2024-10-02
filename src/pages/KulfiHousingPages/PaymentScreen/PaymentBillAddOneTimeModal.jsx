import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

function PaymentBillAddOneTimeModal({ isOpen, onClose }) {
    const modalStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
    };

    const contentStyle = {
        backgroundColor: 'white',
        width: '65%',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
    };
    const crossBtn = {
        position: "absolute",
        right: -10,
        top: -10,

    }
    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <div className='container-fluid mx-auto py-2 py-xxl-3'>
                    <div style={crossBtn}>
                        <button className='p-0 m-0 bg-transparent' onClick={onClose}>
                            <img src="/assets/icons/Close.png" alt="" />
                        </button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-2 flex-column gap-1'>
                        <h4 className='fw-semibold py-0 my-0 fw-24'>Add a One-Time bill</h4>
                        <p>4817 Straight Flush Dr</p>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center  ">
                        <div className="col-md-11 ">
                            <div className="row  box-shadow  p-4 radius-card">
                                <div className="col-md-6 border-right-orange d-flex justify-content-center align-items-start flex-column   gap-2 py-1">
                                    <p className=' my-0 fw-semibold text-muted'>Current Balance <img src="/assets/icons/info-blue.svg" alt="" /></p>
                                    <p className='py-0 my-0'> <span>$1,185.00</span> Payment is due </p>
                                </div>
                                <div className="col-md-6  d-flex justify-content-center align-items-start flex-column   gap-2 py-1">
                                    <p className='my-0 fw-semibold text-muted'>Renters</p>
                                    <p className='py-0 my-0'>Ashley Graham</p>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <div className="row">
                                        <div className="mt-1 col-md-6">
                                            <p className="fw-semibold py-1 my-0">Amount</p>
                                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                                <div className='bkg-light-card w-25 d-flex justify-content-center align-items-center'>
                                                    <img src="/assets/icons/$.svg" alt="" />
                                                </div>
                                                <span className="p-input-icon-left ms-2 w-100">
                                                    <InputText
                                                        className="w-100 py-xxl-3 py-2 pe-4 ps-1 txt-18"
                                                        placeholder="2000"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-1 col-md-6">
                                            <p className="fw-semibold py-1 my-0">Due on</p>
                                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                                <span className="p-input-icon-left ms-2 w-100">
                                                    <InputText
                                                        className="w-100  py-xxl-3 py-2 pe-4 ps-1 txt-18"
                                                        placeholder="mm/dd/yyyy"
                                                    />
                                                </span>
                                                <div className=' w-25 d-flex justify-content-center align-items-center'>
                                                    <img src="/assets/icons/calendar.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 col-md-12">
                                    <p className="fw-semibold py-1 my-0">Memo for your renters</p>
                                    <div className="box-shadow radius-card"> 
                                            <InputText
                                                className="w-100 py-2 py-xxl-3 pe-4 ps-2 " 
                                            /> 
                                    </div>
                                    <p className='text-muted txt-14 fw-semibold mt-1'>Example: Water bill</p>
                                </div>
                                <div className="col-md-12">
                                    <p className='text-center txt-Primary mt-2 p-2 border-drimary bkg-light-Drimary radius-card txt-14'><span className='fw-semibold'>Note:</span> Lorem ipsum dolar smit is dummy text that is use as place holder. Lorem ipsum dolar smit is dummy text that is use as place holder </p>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button className='  border-drimary text-light fw-semibold p-2 px-4 bkg-drimary w-auto radius-button'>
                                            Add one time bill
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default PaymentBillAddOneTimeModal