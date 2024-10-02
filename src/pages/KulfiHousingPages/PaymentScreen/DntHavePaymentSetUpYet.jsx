import React, { useState } from 'react';
import AddButton from '../../../Components/AddButton';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import SetUpPaymentScreen from './SetUpPaymentScreen';

function DntHavePaymentSetUpYet() {
    const [payment, setPayment] = useState(true);

    const handleSetUpPayment = () => {
        setPayment(false);
    };

    return (
        <>
            <div className='p-4 mb-5'>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between flex-wrap">
                        <p className='fs-3 fw-semibold px-0'>Payments</p>
                      <Link to="/kulfy-housing/payment-new-setup"><AddButton buttonText="Set up new Payments" /></Link>  
                    </div>
                    <div className="col-md-12 border-bottom d-flex justify-content-start align-items-center gap-3 gap-md-5 py-3 flex-wrap">
                        <p className='py-0 my-0 text-muted txt-18 border-mobile p-2 p-md-0'>Current & Upcoming</p>
                        <p className='py-0 my-0 text-muted txt-18 border-mobile p-2 p-md-0'>Ending Soon</p>
                        <p className='py-0 my-0 text-muted txt-18 border-mobile p-2 p-md-0'>Ended</p>
                    </div>
                    <div className="col-md-12 mt-4">
                        <div className="row">
                            <div className="col-md-4 bkg-light radius-bar">
                                <span className="p-input-icon-right w-100">
                                    <i className="pi pi-search" />
                                    <InputText className='w-100 py-2 txt-18 j-familly' placeholder='search here' />
                                </span>
                            </div>
                            <div className='col-md-4 mt-3 mt-md-0 ps-0 ps-md-3 ' >
                                <button className='dark-btn text-light d-flex justify-content-center px-4 align-items-center p-2 px-3 radius-button txt-16 fw-600px gap-2'>
                                    <img src="/assets/icons/arrow-narrow-right.png" alt="" /> Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 d-flex justify-content-center mt-4'>
                        {payment ? (
                            <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                                <h3 className='text-center mt-5 fw-semibold fwt-600'>
                                    You don't have any payment set up for any property.
                                </h3>
                                <Link to="/kulfy-housing/payment-setup">
                                    <p className='mt-2 text-primary border-bottom border-primary' onClick={handleSetUpPayment}>
                                        Set up new residents
                                    </p>
                                </Link>
                            </div>
                        ) : (
                           <div className='w-100'>
                            <SetUpPaymentScreen/> 
                            <SetUpPaymentScreen/> 
                           </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DntHavePaymentSetUpYet;



