import React from 'react'
import AddButton from '../../../Components/AddButton'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'
import PropertiesFoundData from '../../../Components/Common/PropertiesFoundData/PropertiesFoundData'

function PropertiesFound() {
    return (
        <>
            <div className='p-3 pb-5 mb-5'>
                <div className="container-fluid">
                    <div className="row">
                        <p className='fs-3 fw-semibold px-0 '>Properties</p>
                        <div className="col-md-7 bkg-light radius-bar">
                        <span className="p-input-icon-right w-100">
                                <i className="pi pi-search" />
                                <InputText className='w-100 py-2 txt-18 j-familly' placeholder='search here'/>
                            </span>
                        </div>
                        <div className="col-md-3 p-0 mt-2 m-md-0 ms-md-3">
                        <Link to="/kulfy-housing/add-properties"><AddButton addBtnImg= "/assets/icons/properties-white.svg"  buttonText="Add a property" />
                       </Link></div>
                    </div>
                </div>
                <p className='fs-5 mt-3'>No Properties found. Add a Property to continue</p>
           <div className="row">
            <div className="col-md-12 p-4 mt-3">
                <PropertiesFoundData/>
            </div>
           </div>
            </div>
        </>
    )
}

export default PropertiesFound