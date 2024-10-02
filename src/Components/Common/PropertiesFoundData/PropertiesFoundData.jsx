import React from 'react';

function PropertiesFoundData() {
    const data = [
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:true},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:true},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:true},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},
        {address:"4817 Straight Flush Dr " , location:"Las Vegas, 0123" , userName:"John Doe" , isCorrect:false},

    ]
  return (
    <>
      <div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-4 px-4 mt-4">
              <div className={`row property-data-hover py-2 py-xxl-4 ps-1 ps-xxl-3 ${item.isCorrect ? 'box-shadow-completed-data' : ''} box-shadow radius-card`}>
                <div className="col-xxl-3 col-md-4 mb-3 mb-md-0 d-flex justify-content-center align-items-center px-0">
                  <div className={` ${item.isCorrect ? 'img-box' : 'img-box-pending'} d-flex justify-content-center align-items-center p-4 radius-card`}>
                    <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-start flex-column ps-2 ps-md-1 ps-xxl-3">
                  <h6 className='fw-semibold py-0 my-0 pt-1'>{item.address}</h6>
                  <p className='py-0 my-0'>{item.location}</p>
                  <p className='py-1 my-0 d-flex justify-content-start align-items-center gap-3 txt-14 text-primary'>
                    <span><img src={item.iconSrc} alt="" />{item.userName}</span>
                    <span>View Payments</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PropertiesFoundData;