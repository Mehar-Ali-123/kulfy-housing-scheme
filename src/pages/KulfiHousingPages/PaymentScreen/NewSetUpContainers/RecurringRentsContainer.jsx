import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import CheckBoxes from '../../../../Components/Checkbox/CheckBoxes'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown';

function RecurringRentsContainer() {

    const [unitRowsProperty, setUnitRowsProperty] = useState(null);

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
            <div className="row">
                <div className="mt-3 col-md-11">
                    <p className="fw-semibold py-0 my-0">Recurring Rents</p>
                    <p>Monthly rent will rpeat every month until lease ends</p>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="mt-1 col-md-6">
                            <p className="fw-semibold py-1 my-0">Monthly Rent Amount</p>
                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                <div className='bkg-light-card w-25 d-flex justify-content-center align-items-center'>
                                    <img src="/assets/icons/$.svg" alt="" />
                                </div>
                                <span className="p-input-icon-left ms-2 w-100">
                                    <InputText
                                        className="w-100 py-3 pe-4 ps-1 txt-18"
                                        placeholder="2000"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="mt-1 col-md-6">
                            <p className="fw-semibold py-1 my-0">Monthly Due Day</p>
                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                            <Dropdown
                                className='drop-down radius-card ps-2 w-100 py-2 txt-18 border-0 outline-0 focus-none pe-2'
                                value={unitRowsProperty}
                                options={optionsProperty}
                                onChange={handlePropertyChange}
                                placeholder="1st of the month"
                                optionLabel="label"
                                optionValue="value"
                            /></div>
                        </div>
                        <div className="mt-3 col-md-6">
                            <p className="fw-semibold py-1 my-0">Recurring Rent Starts on</p>
                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden position-relative">
                                <span className="p-input-icon-left ms-2 w-100">
                                    <Calendar className="w-100  py-2  ps-1 txt-18" placeholder='dd/mm/yyyy' dateFormat="dd/mm/yy" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-11 mt-3'>
                    <div className="mt-3 col-md-11 px-0">
                        <p className="fw-semibold py-0 my-0">Other Monthly Fee</p>
                        <p className='py-1 my-0'>Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends.    </p>
                        <p className='text-primary pt-0 mt-0 j-familly d-flex align-items-center gap-1 cursor-pointer'> <img src="/assets/icons/circle-plus-blue.svg" alt="" />Add Monthly Fee</p>
                        <p className="fw-semibold py-0 my-0 mt-4">Total Monthly Rent</p>
                        <p className='txt-Primary fs-5 fw-semibold py-0 my-0'>$3000</p>
                    </div>
                    <div className="mt-3 col-md-11 px-0">
                        <p className="fw-semibold py-1 my-0">Prorated Rent</p>
                        <p className='py-0 my-0'>Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends.</p>
                        <CheckBoxes option1="I don’t need to collect or already have collected the prorated rent." option2="I want to collect prorated rent." />
                    </div>
                </div>
                <div className="col-md-10 mt-3">
                    <div className="row">
                        <div className="mt-3 col-md-6">
                            <p className="fw-semibold py-1 my-0">Prorated Rent Amount</p>
                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden">
                                <div className='bkg-light-card w-25 d-flex justify-content-center align-items-center'>
                                    <img src="/assets/icons/$.svg" alt="" />
                                </div>
                                <span className="p-input-icon-left ms-2 w-100">
                                    <InputText
                                        className="w-100 py-3 pe-4 ps-1 txt-18"
                                        placeholder="2000"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 col-md-6">
                            <p className="fw-semibold py-1 my-0">Prorated Rent Due</p>
                            <div className="box-shadow radius-card  d-flex px-0 mx-0 overflow-hidden position-relative">
                                <span className="p-input-icon-left ms-2 w-100">
                                    <Calendar className="w-100  py-2  ps-1 txt-18" placeholder='dd/mm/yyyy' dateFormat="dd/mm/yy" />
                                </span>
                                <div className='pe-3 d-flex justify-content-center align-items-center position-absolute calendar-icon'>
                                    <img src="/assets/icons/calender-blue.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecurringRentsContainer