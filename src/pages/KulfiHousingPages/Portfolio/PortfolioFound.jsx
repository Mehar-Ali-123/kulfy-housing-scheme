import React from 'react'
import AddButton from '../../../Components/AddButton'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'
import PortfolioFoundData from '../../../Components/Common/PortfolioFoundData/PortfolioFoundData'

function PortfolioFound() {
    return (
        <>
            <div className=' p-2 p-md-3'>
                <div className="container-fluid">
                    <div className="row">
                        <p className='fs-3 fw-semibold px-0 '>Portfolio</p>
                        <div className="col-md-12 col-xl-7 col-12 bkg-light radius-bar mt-3">
                            <span className="p-input-icon-right w-100 ">
                                <i className="pi pi-search" />
                                <InputText className='w-100 py-2 txt-18 j-familly' placeholder='search here' />
                            </span>
                        </div>
                        <div className="col-md-3 p-0 ps-md-3 mt-3">
                            <Link to="/kulfy-housing/add-portfolio"><AddButton addBtnImg="/assets/icons/building-warehouse.svg" buttonText="Add a Portfolio" />
                            </Link></div>
                    </div>
                </div>
                <p className='fs-5 mt-3'>No Portfolio(s) found. Add a Portfolio to continue</p>
                <PortfolioFoundData />
            </div>
        </>
    )
}
export default PortfolioFound