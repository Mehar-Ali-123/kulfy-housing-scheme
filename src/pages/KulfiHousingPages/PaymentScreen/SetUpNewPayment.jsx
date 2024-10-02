import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecurringRentsContainer from './NewSetUpContainers/RecurringRentsContainer';
import AutomaticLateFeeContainer from './NewSetUpContainers/AutomaticLateFeeContainer';
import SecurityDepositContainer from './NewSetUpContainers/SecurityDepositContainer';
import ReceivingAccountsContainer from './NewSetUpContainers/ReceivingAccountsContainer';

function SetUpNewPayment() {
    const [currentStep, setCurrentStep] = useState(1);

    // useEffect(() => {
    //     // Load the current step from local storage when the component mounts
    //     const storedStep = localStorage.getItem('currentStep');
    //     if (storedStep) {
    //         setCurrentStep(parseInt(storedStep, 10));
    //     }
    // }, []);

    // useEffect(() => {
    //     // Update the current step in local storage whenever it changes
    //     localStorage.setItem('currentStep', currentStep.toString());
    // }, [currentStep]);

    const handleContinue = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="col-md-8 mb-5">
                        <RecurringRentsContainer />
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <button className='mb-3 text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button' onClick={handleContinue}>
                                Continue
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="col-md-8 mb-5">
                        <AutomaticLateFeeContainer />
                        <div className='d-flex justify-content-center align-items-center mt-5 gap-4'>
                            <button className='mb-3 fw-semibold p-2 px-5 text-muted border-btn w-auto radius-button' onClick={handleBack}>
                                Back
                            </button>
                            <button className='mb-3 border-drimary text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button' onClick={handleContinue}>
                                Continue
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="col-md-8 mb-5">
                        <SecurityDepositContainer />
                        <div className='d-flex justify-content-center align-items-center mt-5 gap-4'>
                            <button className='mb-3 fw-semibold p-2 px-5 text-muted border-btn w-auto radius-button' onClick={handleBack}>
                                Back
                            </button>
                            <button className='mb-3 border-drimary text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button' onClick={handleContinue}>
                                Continue
                            </button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="col-md-8 mb-5">
                        <ReceivingAccountsContainer />
                        <div className='d-flex justify-content-center align-items-center mt-5 gap-4'>
                            <button className='mb-3 fw-semibold p-2 px-5 text-muted border-btn w-auto radius-button' onClick={handleBack}>
                                Back
                            </button>
                            <Link to="/kulfy-housing/payment-transaction-details">
                            <button className='mb-3 border-drimary text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button'>
                                Continue
                            </button>
                            </Link>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="row d-flex justify-content-center w-100">
                        <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                            <div>
                                <h2 className='text-center fw-semibold fwt-600'>
                                    Setup Payments
                                </h2>
                                <p className='txt-18'>4817 Straight Flush Dr, Las Vegas, 0123</p>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Link to="">
                                        <button className='mb-3 button-finish p-2 px-3 w-100 radius-button'>
                                            Cancel Setup
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {renderStep()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SetUpNewPayment;
