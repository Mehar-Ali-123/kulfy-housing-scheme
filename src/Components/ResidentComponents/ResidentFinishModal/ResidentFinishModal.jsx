import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResidentFinishModal({ isOpen, onClose }) {
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
        width: '50%',  
        maxWidth: '700px',  
        margin: '0 auto',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <div className='container mx-auto'>
                    <div className='d-flex justify-content-center align-items-center mb-2 flex-column gap-1'>
                        <img width={50} height={50} src="/assets/icons/checkbox.svg" alt="" />
                        <p className='fw-semibold'>Resident's added!</p>
                        <h2 className='fw-semibold'>What’s next???</h2>
                    </div>
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="  d-flex justify-content-center">
                                <div className=" finish-card-width d-flex justify-content-between align-items-center   flex-column me-4">
                                    <div className='d-flex justify-content-center align-items-center flex-column mb-0'>
                                        <img width={50} height={50} src="/assets/icons/file.svg" alt="" />
                                        <p className='pt-2 fs-6 text-center'>Review your residents info, make changes or share documents with your renters in the details page.
                                        </p>
                                    </div>
                                    
                                    <Link to="/kulfy-housing/resident-&-lease-management">
                                    <button className='mb-3   button-finish p-2 px-5  radius-button fw-semibold' onClick={onClose}>
                                        View Details
                                    </button> 
                                    </Link>
                                </div>
                                <div className="px-2">
                                    <img src="/assets/icons/finishLine.png" alt="" />
                                </div>
                                <div className=" finish-card-width d-flex justify-content-between align-items-center   flex-column ms-4">
                                    <div className=' d-flex justify-content-center align-items-center flex-column mb-0'>
                                        <img width={50} height={50} src="/assets/icons/report-money.svg" alt="" />
                                        <p className='pt-2 fs-6 text-center'>Set up automatic online rent payments sent directly to your bank.
                                        </p>
                                    </div>
                                    <Link to="">
                                    <button className='mb-3   button-finish p-2 px-5  radius-button fw-semibold' onClick={onClose}>
                                        Set Up Payments
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p className='text-center text-primary mt-2'><span className='cursor-pointer border-bottom border-primary'>May be later</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResidentFinishModal;