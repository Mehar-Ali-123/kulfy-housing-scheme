import React, { useState } from 'react'

function PortfolioFoundData() {
    const data = [
        {
            id: 1,
            heading: "Kulfi Housing LLC Portfolio ",
            address1: "123 Single Family Home, Hoboken NJ, 07030",
            address2: "456 Apartment, Hoboken NJ, 07030",

        },
        {
            id: 2,
            heading: "Oqvest LLC Portfolio",
            address1: "123 Single Family Home, Hoboken NJ, 07030",
            address2: "456 Apartment, Hoboken NJ, 07030",
        },
    ];

    const [visibleIndexes, setVisibleIndexes] = useState(data.map(() => ({ address1: false, address2: false })));

    // Define toggleWrapper to take an index and address key
    const toggleWrapper = (index, addressKey) => {
        const newVisibleIndexes = [...visibleIndexes];
        newVisibleIndexes[index][addressKey] = !newVisibleIndexes[index][addressKey];
        setVisibleIndexes(newVisibleIndexes);
    };


    return (
        <>
            <div className="container-fluid ">
                {data.map((item, index) => (
                    <div className="row box-shadow py-4 radius-card property-data-hover mt-4" key={item.id}>
                        <div className="col-md-12  border-bottom mb-3">
                            <h3 className='fw-semibold p-0  ps-md-3 '>{item.heading}</h3>
                        </div>
                        <div className="col-md-12  p-0  ps-md-4 ">
                            <p className=' ps-1 ps-md-2'>
                                <span className={`d-flex justify-content-start gap-2 align-items-center w-md-50 w-100   hover-here  ${visibleIndexes[index]['address1'] ? 'opened-main-adress' : ''}`}>
                                <svg className='color-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0003 8.70977L13.6673 4.56177C12.7045 3.81274 11.3561 3.81274 10.3933 4.56177L5.05927 8.70977C4.40968 9.21494 4.02989 9.99187 4.03027 10.8148V18.0148C4.03027 19.1193 4.9257 20.0148 6.03027 20.0148H18.0303C19.1348 20.0148 20.0303 19.1193 20.0303 18.0148V10.8148C20.0303 9.99177 19.6503 9.21477 19.0003 8.70977" stroke="#545454" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 15.0001C13.79 16.3331 10.208 16.3331 8 15.0001" stroke="#545454" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                     <span className={`w-auto wrapper-text hover-data cursor-pointer fw-semibold ${visibleIndexes[index]['address1'] ? 'opened-address' : ''}`} onClick={() => toggleWrapper(index, 'address1')}>
                                        {item.address1}
                                    </span>
                                </span>
                            </p>
                            {visibleIndexes[index]['address1'] && (
                                <div className="wrapper-container w-sm-100  px-sm-0 mx-sm-0">
                                    <div className="row ms-md-4 ms-0 border-bottom  ">
                                        <div className="col-md-9 col-12 px-4 mt-2 ">
                                            <div className={`row   py-2 py-xxl-4 ps-1   `}>
                                                <div className="col-md-3 col-xxl-2  d-flex justify-content-start justify-content-md-center align-items-center px-0">
                                                    <div className={` img-box-port  d-flex justify-content-center align-items-center p-4 radius-card `}>
                                                        <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className=" col-md-8 d-flex justify-content-center  flex-wrap   align-items-start flex-column p-0 ps-md-2 ">
                                                    <h5 className='fw-semibold py-0 my-0 pt-1'>123 Single Family Home, Hoboken</h5>
                                                    <p className='py-2 my-0'>NJ, 07030</p>
                                                    <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 fw-semibold txt-14 txt-Primary'>
                                                        <span className='d-flex align-items-end'><img height="24px" width="24px" src="/assets/icons/smart-home.png" alt="" />Single Family </span>
                                                        <span className='d-flex align-items-end'><img height="24px" width="24px" src="/assets/icons/bed.svg" alt="" /> 2 Beds</span><span className='d-flex align-items-end'> <img height="24px" width="24px" src="/assets/icons/bath.svg" alt="" /> 1.5 Baths</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' ms-4 ps-4  my-4'>
                                        <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 txt-14 text-primary fw-semibold'>
                                            <span > Latoya Smith, braais Hayes</span>
                                        </p>
                                        <p className='py-2 my-0 text-muted'>Mar 1, 2023 <span className='fw-semibold'>. No end date</span></p>
                                        <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 txt-14 text-primary'>
                                            <span className='border-bottom border-primary'> View Payments</span>
                                        </p>
                                    </div>
                                </div>
                            )}
                            <p className=' ps-1 ps-md-2'>
                                <span className={`d-flex justify-content-start gap-2 align-items-center w-md-50 w-100   hover-here  ${visibleIndexes[index]['address2'] ? 'opened-main-adress' : ''}`}>
                                    <svg className='color-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0003 8.70977L13.6673 4.56177C12.7045 3.81274 11.3561 3.81274 10.3933 4.56177L5.05927 8.70977C4.40968 9.21494 4.02989 9.99187 4.03027 10.8148V18.0148C4.03027 19.1193 4.9257 20.0148 6.03027 20.0148H18.0303C19.1348 20.0148 20.0303 19.1193 20.0303 18.0148V10.8148C20.0303 9.99177 19.6503 9.21477 19.0003 8.70977" stroke="#545454" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 15.0001C13.79 16.3331 10.208 16.3331 8 15.0001" stroke="#545454" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className={`w-auto wrapper-text hover-data cursor-pointer fw-semibold ${visibleIndexes[index]['address2'] ? 'opened-address' : ''}`} onClick={() => toggleWrapper(index, 'address2')}>
                                        {item.address2}
                                    </span>
                                </span>
                            </p>
                            {visibleIndexes[index]['address2'] && (
                                <div className="wrapper-container">
                                    <div className="row ms-md-4 ms-0 border-bottom">
                                        <div className="col-md-9 px-4 mt-2 ">
                                            <div className={`row   py-2 py-xxl-4 ps-1    `}>
                                                <div className="  col-md-3 col-xxl-2  d-flex justify-content-start justify-content-md-center align-items-center px-0">
                                                    <div className={`img-box-port d-flex justify-content-center align-items-center p-4 radius-card`}>
                                                        <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className=" col-md-8 d-flex justify-content-center  flex-wrap   align-items-start flex-column p-0 ps-md-2 ">
                                                    <h5 className='fw-semibold py-0 my-0 pt-1'>123 Single Family Home, Hoboken</h5>
                                                    <p className='py-2 my-0'>NJ, 07030</p>
                                                    <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 fw-semibold txt-14 txt-Primary'>
                                                        <span className='d-flex align-items-end'><img height="24px" width="24px" src="/assets/icons/smart-home.png" alt="" />Single Family </span>
                                                        <span className='d-flex align-items-end'><img height="24px" width="24px" src="/assets/icons/bed.svg" alt="" /> 2 Beds</span><span className='d-flex align-items-end'> <img height="24px" width="24px" src="/assets/icons/bath.svg" alt="" /> 1.5 Baths</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' ms-4 ps-4  my-4'>
                                        <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 txt-14 text-primary fw-semibold'>
                                            <span > Latoya Smith, braais Hayes</span>
                                        </p>
                                        <p className='py-2 my-0 text-muted'>Mar 1, 2023 <span className='fw-semibold'>. No end date</span></p>
                                        <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 txt-14 text-primary'>
                                            <span className='border-bottom border-primary'> View Payments</span>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PortfolioFoundData