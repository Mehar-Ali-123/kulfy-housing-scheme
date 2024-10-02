import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import CheckBoxes from '../../../../Components/Checkbox/CheckBoxes'
import { Dropdown } from 'primereact/dropdown';

function ReceivingAccountsContainer() {
  const [unitRows, setUnitRows] = useState(null);

  const bedOptions = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
  ]; 

  const handleBathChange = (e) => {
    setUnitRows(e.value);
  };
  return (
    <>
      <div className="row">
        <div className='col-md-11 mt-3'>
          <div className="mt-3 col-md-11 px-0">
            <p className="fw-semibold py-1 my-0">Receiving Accounts</p>
            <p className='py-0 my-0'>Monthly rent will rpeat every month until lease ends. </p> 
          </div>
        </div>
        <div className="col-md-10 mt-3">
          <div className="row">
            <div className="mt-3 col-md-10">
              <p className="fw-semibold py-1 my-0">Your Checking Accounts</p>
              <div className="box-shadow radius-card">  
                  <Dropdown
                  className='drop-down radius-card ps-2 w-100 py-2 txt-18 border-0 outline-0 focus-none'
                  value={unitRows}
                  options={bedOptions}
                  onChange={handleBathChange}
                  placeholder="mm/dd/yyyy"
                  optionLabel="label"
                  optionValue="value"
                /> 
              </div> 
            <p className='text-primary mt-2 d-flex  align-items-center gap-1 j-familly'> <img src="/assets/icons/circle-plus-blue.svg" alt="" /><span>Add a new account</span></p>
            </div> 
          </div>
        </div>
        <div className='col-md-11'>
          <div className="mt-3 col-md-11 px-0">
            <p className="fw-semibold py-1 my-0">Security Deposit</p>
            <p className='py-0 my-0'>Where will security deposit held?</p>  
            <CheckBoxes option1="Same as receiving accounts"   />
          </div>
        </div>
      </div>
    </>
  )
} 
export default ReceivingAccountsContainer