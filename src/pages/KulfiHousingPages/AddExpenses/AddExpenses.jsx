import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import CancelButton from '../../../Components/Common/CancelButton';
import FileUpload from '../../../Components/FileUpload/FileUpload';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown'; 
import { Calendar } from 'primereact/calendar';
        
function AddExpenses({ removeButton, addressNumber }) {
    const [unitRows, setUnitRows] = useState(null);
    const [unitRowsProperty, setUnitRowsProperty] = useState(null);

    const options = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
    ];
    // Define the handleBathChange function
    const handleCategoryChange = (e) => {
        setUnitRows(e.value);
    };

    const optionsProperty = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
    ];
    // Define the handleBathChange function
    const handlePropertyChange = (e) => {
        setUnitRowsProperty(e.value);
    };

    return (

        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                        <p className='mt-5 pt-5 d-flex justify-content-between align-items-center py-0 my-0 px-4 pe-5'> {addressNumber || <h2 className="fw-semibold fwt-600 py-0 my-0"> Add Residents </h2>} <CancelButton /></p>
                    </div>
                    <div className="col-md-7 mt-5">
                        <div className="row">
                            <div className="mt-3 col-md-11">
                                <p className="fw-semibold">Vendor Name</p>
                                <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                    <div className='ps-3 d-flex justify-content-center align-items-center'>
                                        <img src="/assets/icons/profile.svg" alt="" />
                                    </div>
                                    <span className="p-input-icon-left ms-2 w-100">
                                        <InputText
                                            className="w-100  py-3 pe-4 ps-1 txt-18"
                                            placeholder="Vendor"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 col-md-11">
                                <p className="fw-semibold">Date of Payment</p>
                                <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden position-relative">
                                    <span className="p-input-icon-left ms-2 w-100"> 
                                        <Calendar className="w-100  py-2  ps-1 txt-18"   dateFormat="dd/mm/yy" />
                                    </span> 
                                    <div className='pe-3 d-flex justify-content-center align-items-center position-absolute calendar-icon'>
                                        <img src="/assets/icons/calendar.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 col-md-11 px-4">
                                <p className="fw-semibold px-0 mx-0">Add a receipt</p>
                                <FileUpload />
                            </div>
                            <div className="mt-3 col-md-11">
                                <p className="fw-semibold">Property</p>
                                <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                <Dropdown
                                    className='drop-down radius-card ps-2 w-100 py-2 txt-18 border-0 outline-0 focus-none pe-2'
                                    value={unitRowsProperty}
                                    options={optionsProperty}
                                    onChange={handlePropertyChange}
                                    placeholder="Select Property"
                                    optionLabel="label"
                                    optionValue="value"
                                />
                                </div>
                            </div>
                            <div className="col-md-11 mt-3">
                                <div className="row">
                                    <div className="mt-3 col-md-6">
                                        <p className="fw-semibold">Amount</p>
                                        <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                            <div className='bkg-light-card w-25 d-flex justify-content-center align-items-center'>
                                                <img src="/assets/icons/$.svg" alt="" />
                                            </div>
                                            <span className="p-input-icon-left ms-2 w-100">
                                                <InputText
                                                    className="w-100  py-3 pe-4 ps-1 txt-18"
                                                    placeholder="2000"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3 col-md-6">
                                        <p className="fw-semibold">IRS Expense Category</p>
                                        <div className="box-shadow radius-card overflow-hidden">
                                        <Dropdown
                                    className='drop-down radius-card ps-2 w-100 py-2 txt-18 border-0 outline-0 focus-none pe-2'
                                    value={unitRows}
                                    options={options}
                                    onChange={handleCategoryChange}
                                    placeholder="Select Property"
                                    optionLabel="label"
                                    optionValue="value"
                                />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 col-md-11">
                                <p className="fw-semibold">Description (optional )</p>
                                <div className="box-shadow radius-card">
                                    <span className="p-input-icon-left ms-2 w-100"> 
                                        <InputText
                                            className="w-100 py-3  ps-2 pe-4 txt-18"
                                            placeholder="Add a note about the expense"
                                        />
                                    </span>
                                </div>
                            </div>
                            <p className='mt-3 mb-0 py-1'>Split this receipt across multiple properties or categories</p>
                            <p className='text-primary py-1 my-0 j-familly d-flex align-items-center gap-1' ><img src="/assets/icons/circle-plus-blue.svg" alt="" />Add line term</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center  mt-4 mb-5'>
                    <Link to="/kulfy-housing/add-expenses-tracking">
                        <button className='mb-3 border-drimary text-light fw-semibold p-2 px-5 bkg-drimary w-auto radius-button'>
                            Save Changes
                        </button></Link>
                </div>
            </div>
        </>

    );
}
export default AddExpenses