import React from 'react'

function AddButton({buttonText,addBtnImg}) {
  return (
    <>
    <div>
        <button className='bkg-dark text-light d-flex justify-content-center align-items-center p-2 px-3 radius-button txt-16  fw-600px gap-2'>
           <img src={addBtnImg} alt="" /> {buttonText}
        </button>
    </div>
    </>
  )
}

export default AddButton