import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import CheckBoxes from '../../../../Components/Checkbox/CheckBoxes'
import { Dropdown } from 'primereact/dropdown';

function AutomaticLateFeeContainer() {
  const [unitRows, setUnitRows] = useState(null);

  const bedOptions = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
  ];
  // Define the handleBathChange function
  const handleBathChange = (e) => {
    setUnitRows(e.value);
  };

  return (
    <>
      <div className="row">
        <div className='col-md-11 mt-3'>
          <div className="mt-3 col-md-11 px-0">
            <p className="fw-semibold py-1 my-0">Automatic Late Fee</p>
            <p className='py-0 my-0'>Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends.</p>
            <CheckBoxes option1="I don’t want to add late fee." option2="I want to add late fee." />
          </div>
        </div>
        <div className="col-md-10 mt-3">
          <div className="row">
            <div className="mt-3 col-md-6">
              <p className="fw-semibold py-1 my-0">Late Fee Amount</p>
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
              <p className="fw-semibold py-1 my-0">Add a Late Fee</p>
              <div className="box-shadow radius-card"> 
                <Dropdown
            className='drop-down radius-card ps-2 w-100 py-2 txt-18 border-0 outline-0 focus-none'
            value={unitRows}
            options={bedOptions}
            onChange={handleBathChange}  
            placeholder="5 days after rent is due"
            optionLabel="label"
            optionValue="value"
          /> 
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-11 mt-3'>
          <div className="mt-3 col-md-11 px-0">
            <p className='py-0 my-0'>NOTE: Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends. Monthly rent will rpeat every month until lease ends.Monthly rent will rpeat every month until lease ends.</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default AutomaticLateFeeContainer