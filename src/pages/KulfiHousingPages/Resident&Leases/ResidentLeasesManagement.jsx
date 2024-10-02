import React from 'react'
import AddButton from '../../../Components/AddButton'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'

function ResidentLeasesManagement() {
  return (
    <>
      <div className='p-4 mb-5'>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between d-flex flex-wrap">
            <p className='fs-3 fw-semibold px-0'>Residents & Leases</p> <AddButton buttonText="Set up new residents" />
          </div>
          <div className="col-md-12 border-bottom d-flex justify-content-start align-items-center  gap-3 gap-md-5 py-3 flex-wrap">
            <p className='py-0 my-0 text-muted txt-18 '>Current & Upcoming</p>
            <p className='py-0 my-0 text-muted txt-18 '>Ending Soon</p>
            <p className='py-0 my-0 text-muted txt-18 '>Ended</p>
          </div>
          <div className="col-md-12 mt-4">
            <div className="col-md-4 bkg-light radius-bar">
              <span className="p-input-icon-right w-100">
                <i className="pi pi-search" />
                <InputText className='w-100 py-2 txt-18 j-familly' placeholder='search here' />
              </span>
            </div>
          </div>
          <div className='col-md-12 d-flex justify-content-center mt-3'>
            <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
              <h2 className='text-start mt-5 fw-semibold fwt-600'>
                Resident Management on Kulfi Housing
              </h2>
              <div className="col-md-8 col-xxl-6 d-flex gap-3 mt-3">
                <div className='  d-flex justify-content-center align-items-start'>
                  <img src="/assets/icons/group1.png" alt="" />
                </div>
                <div className="text-muted">
                  <h4>Getting started is simple</h4>
                  <p>Enter a lease period and fill out resident information to begin!</p>
                </div>
              </div>
              <div className="col-md-8 col-xxl-6 d-flex gap-3 mt-3">
                <div className='  d-flex justify-content-center align-items-start'>
                  <img src="/assets/icons/group2.png" alt="" />
                </div>
                <div className="text-muted">
                  <h4>Get Payment Online</h4>
                  <p>No mor traditional Hussle. We have made the rent collection simple and essay. </p>
                </div>
              </div>
              <div className="col-md-8 col-xxl-6 d-flex gap-3 mt-3">
                <div className='  d-flex justify-content-center align-items-start'>
                  <img src="/assets/icons/group3.png" alt="" />
                </div>
                <div className="text-muted">
                  <h4>Detailed Expense Report</h4>
                  <p>Easily manage your residents, view upcoming payments, and upload addendums all in one place.</p>
                </div>
              </div>
              <div>
                <Link to="/kulfy-housing/new-resident-setup">
                  <button className='radius-button mt-5 text-light px-3 p-2 bkg-drimary'>
                    Set up new residents
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResidentLeasesManagement