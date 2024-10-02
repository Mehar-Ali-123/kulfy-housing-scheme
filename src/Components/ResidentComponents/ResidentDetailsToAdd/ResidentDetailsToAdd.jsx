import React from 'react';
import { InputText } from 'primereact/inputtext';

function ResidentDetailsToAdd({ removeButton, addressNumber }) {
    return (

        <div className="row">
            <p className='mt-5 pt-5 d-flex justify-content-between  align-items-center p-0  my-0 '> {addressNumber || <h2 className="fw-semibold fwt-600 py-0 my-0 "> Add Residents </h2>}{removeButton}</p>
            <div className="mt-3 col-md-11">
                <p className="fw-semibold">First Name</p>
                <div className="box-shadow radius-card">
                    <span className="p-input-icon-left ms-2 w-100 d-flex justify-content-start ps-2">
                        <img src="/assets/icons/profile.svg" alt="" />
                        <InputText
                            className="w-100 py-3 pe-4 ps-2 txt-18"
                            placeholder="Enter your first name"

                        />
                    </span>
                </div>
            </div>
            <div className="mt-3 col-md-11">
                <p className="fw-semibold">Middle Name (Optional)</p>
                <div className="box-shadow radius-card">
                    <span className="p-input-icon-left ms-2 w-100 d-flex justify-content-start ps-2">
                        <img src="/assets/icons/profile.svg" alt="" />
                        <InputText
                            className="w-100 py-3 pe-4 ps-2 txt-18"
                            placeholder="Enter your middle name"

                        />
                    </span>
                </div>
            </div>
            <div className="mt-3 col-md-11">
                <p className="fw-semibold">Last Name</p>
                <div className="box-shadow radius-card">
                    <span className="p-input-icon-left ms-2 w-100 d-flex justify-content-start ps-2">
                        <img src="/assets/icons/profile.svg" alt="" />
                        <InputText
                            className="w-100 py-3 pe-4 ps-2 txt-18"
                            placeholder="Enter your last name"

                        />
                    </span>
                </div>
            </div>
            <div className="col-md-11 mt-3">
                <div className="row">
                    <div className="mt-3 col-md-6">
                        <p className="fw-semibold">Email</p>
                        <div className="box-shadow radius-card">
                            <span className="p-input-icon-left ms-2 w-100 d-flex justify-content-start ps-2">
                                <img src="/assets/icons/mail.svg" alt="" />
                                <InputText
                                    className="w-100 py-3 pe-4 ps-2 txt-18"
                                    placeholder="Enter your email"

                                />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 col-md-6">
                        <p className="fw-semibold">Phone</p>
                        <div className="box-shadow radius-card">
                            <span className="p-input-icon-left ms-2 w-100 d-flex justify-content-start ps-2">
                                <img src="/assets/icons/phone.svg" alt="" />
                                <InputText
                                    className="w-100 py-3 pe-4 ps-2 txt-18"
                                    placeholder="Enter your phone"

                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResidentDetailsToAdd;