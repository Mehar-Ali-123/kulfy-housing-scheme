import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Common/Sidebar';
import { Outlet, useLocation } from 'react-router-dom'  

const DashboardLayout = (props) => { 
    return (
        <div> 
            <div className='sidebar-layout' style={{ maxWidth: '100%', margin: 'auto' }}>
                <div className='px-0 m-0 sidebar'>
                    <Sidebar />
                </div>
                <div className='px-0 m-0 mt-4 content'>
                    <div className='d-flex justify-content-between '>
                        <div></div>
                        <div  className='fs-4 fw-semibold py-0 my-0'> 
                        Rental manager View
                        </div>
                        <div className='flex justify-end'>
                            <div className='text-end pe-4 flex gap-4 justify-end items-center'>
                                <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1rem' }}> 
                                </i> 
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'> 
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;