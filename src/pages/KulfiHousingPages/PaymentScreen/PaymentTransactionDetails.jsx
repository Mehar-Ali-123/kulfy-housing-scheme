import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PaymentBillAddOneTimeModal from './PaymentBillAddOneTimeModal'

function PaymentTransactionDetails() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='px-4'>
                <div className="container-fluid my-4">
                    <div className="row mx-0 px-0 ">
                        <div className="col-md-8 box-shadow  radius-card ">
                            <div className="row border-bottom mx-0">
                                <div className="col-md-12  px-0 mx-0">
                                    <div className={`row py-4 py-xxl-4 ps-3 me-0`}>
                                        <div className="col-md-3 col-xxl-2 d-flex justify-content-start align-items-center px-0">
                                            <div className={`img-box-port d-flex justify-content-center align-items-center p-4 radius-card`}>
                                                <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9 col-xxl-10 d-flex justify-content-center align-items-start flex-column pe-3 ">
                                            <h5 className=' fw-semibold py-0 my-0 pt-1 d-flex justify-content-between align-items-start align-items-md-center my-0 w-100 flex-column flex-md-row mt-3 mt-md-0'> 4817 Straight Flush Dr <span className=' txt-16 my-0 fw-semibold text-muted'>May 01, 2021 . no end date</span></h5>
                                            <p className='py-2 my-0'>Las Vegas, 0123</p>
                                            {/* Add more details here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className='col-md-12 mt-3 ps-4'>
                                    <p className='pe-3 d-flex justify-content-between align-items-center my-0'> <p className='py-0 my-0 fw-semibold  text-muted'>Current Balance</p> <span className='my-0 fw-semibold text-muted'>May 01, 2021 . no end date</span></p>
                                    <span className='my-0 fw-semibold txt-Primary fs-4'>$1,185.00</span>
                                    <p className='mt-3'> <span className=' p-2  my-0 txt-12 radius-button fw-semibold txt-Primary bkg-light-Drimary'>Due</span> <span className='my-0 ps-2 text-muted'>Payment is due</span></p>
                                    <div className="px-0 text-primary w-100 w-md-75 flex-wrap  py-3 mt-0 pt-0 d-flex justify-content-between justify-content-md-start pe-3 pe-md-0 gap-3 gap-md-5 radius-card align-items-center j-familly">
                                        <p className='py-0 my-0 d-flex align-items-center gap-1' onClick={() => { setIsOpen(true) }}> <img src="/assets/icons/circle-plus-blue.svg" alt="" /> Add Bill</p>
                                        <p className='py-0 my-0 d-flex align-items-center gap-1'><img src="/assets/icons/report-blue.png" alt="" />Add Credit</p>
                                        <Link to="/kulfy-housing/payment-setting-confirmation">     <p className='py-0 my-0 d-flex align-items-center gap-1'><img src="/assets/icons/report-money-blue.png" alt="" />Record Payment</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mt-4">
                            <div className="col-md-12 px-0 mx-0">
                                <div className="row">
                                    <div className="col-md-6 px-0 pe-3 ">
                                        <div className='p-4 box-shadow radius-card d-flex justify-content-center align-items-start flex-column gap-1 '>
                                            <p className='d-flex justify-content-between align-items-center my-0 w-100'> <p className='py-0 my-0 fw-semibold  text-muted'>Rent</p> <span className='my-0 text-primary d-flex align-items-center j-familly'><img src="/assets/icons/edit.svg" alt="" />Edit Rent</span></p>
                                            <p className='py-0 my-0 text-muted'>$1,185.00/mo</p>
                                            <p className='py-0 my-0 text-muted'> Recurring on the 1st</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-0 pe-3 ps-md-3 pe-md-0 mt-3 mt-md-0">
                                        <div className='p-4 box-shadow radius-card d-flex justify-content-center align-items-start flex-column gap-1'>
                                            <p className='d-flex justify-content-between align-items-center my-0 w-100'> <p className='py-0 my-0 fw-semibold  text-muted'>Payers</p></p>
                                            <p className='py-0 my-0 text-muted'>Ashley Graham</p>
                                            <span className='my-0  text-primary j-familly'>View Residents</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        < div className="col-md-8 mt-5 px-0 mx-0 ">
                                <p className='fw-bold'>Upcoming and In progress</p>
                                <div className="box-shadow radius-card overFlow-overlay">
                                    <table className='w-100  myTable'>
                                        <thead>
                                            <tr className='bkg-light-Drimary py-3 text-uppercase  text-center  txt-14'>
                                                <th className=' text-muted py-3  fw-semibold'>
                                                    Date
                                                </th>
                                                <th className=' text-muted fw-semibold'>
                                                    Details
                                                </th>
                                                <th className=' text-muted fw-semibold'>
                                                    Charge
                                                </th>
                                                <th className='text-muted  fw-semibold'>
                                                    Payment
                                                </th>
                                                <th className=' text-muted fw-semibold'>
                                                    Balance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='w-100 text-center py-4'>
                                                <td className='py-4'>
                                                    May 1, 2023
                                                </td>
                                                <td className=''>
                                                    <p className='fw-bold txt-14 py-0 my-0 text-muted'>
                                                        Monthly Rent
                                                    </p>
                                                    <span className='p-1 px-3 my-0 txt-12 radius-button fw-semibold txt-Primary bkg-light-Drimary'>Upcoming</span>
                                                </td>
                                                <td className=' '>
                                                    $1,185.00
                                                </td>
                                                <td className=' '>
                                                    -
                                                </td>
                                                <td className=' '>
                                                    -
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            
                        </div>
                        <div className="col-md-8 mt-5 px-0 mx-0 ">
                            <p className='fw-bold'>Completed</p>
                                <div className="box-shadow radius-card overFlow-overlay ">
                                    <table className='w-100 myTable'>
                                        <thead>
                                            <tr className='bkg-light-Drimary py-3 text-uppercase text-center txt-14'>
                                                <th className=' text-muted py-3  fw-semibold'>
                                                    Date
                                                </th>
                                                <th className=' text-muted fw-semibold'>
                                                    Details
                                                </th>
                                                <th className=' text-muted fw-semibold'>
                                                    Charge
                                                </th>
                                                <th className='text-muted  fw-semibold'>
                                                    Payment
                                                </th>
                                                <th className=' text-muted fw-semibold'>
                                                    Balance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='w-100 text-center py-4'>
                                                <td className='py-4'>
                                                    May 1, 2023
                                                </td>
                                                <td className=''>
                                                    <p className='fw-bold txt-14 py-0 my-0 text-muted'>
                                                        Monthly Rent
                                                    </p>
                                                </td>
                                                <td className=' '>
                                                    $1,185.00
                                                </td>
                                                <td className=' '>
                                                    hello
                                                </td>
                                                <td className=' '>
                                                    -mr ali
                                                </td>
                                            </tr>
                                            <tr className='w-100 text-center py-4'>
                                                <td className='py-4'>
                                                    May 1, 2023
                                                </td>
                                                <td className=''>
                                                    <p className='fw-bold txt-14 py-0 my-0 text-muted'>
                                                        Monthly Rent
                                                    </p>
                                                </td>
                                                <td className=' '>
                                                    $1,185.00
                                                </td>
                                                <td className=' '>
                                                    -
                                                </td>
                                                <td className=' '>
                                                    -
                                                </td>
                                            </tr>
                                            <tr className='w-100 text-center py-4'>
                                                <td className='py-4'>
                                                    May 1, 2023
                                                </td>
                                                <td className=''>
                                                    <p className='fw-bold txt-14 py-0 my-0 text-muted'>
                                                        Monthly Rent
                                                    </p>
                                                </td>
                                                <td className=' '>
                                                    $1,185.00
                                                </td>
                                                <td className=' '>
                                                    -
                                                </td>
                                                <td className=' '>
                                                    -
                                                </td>
                                            </tr> 
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5">
                                                    <p className='cursor-pointer mt-3 text-center text-primary j-familly'>View More Transactions</p>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <PaymentBillAddOneTimeModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
        </>
    )
}
export default PaymentTransactionDetails