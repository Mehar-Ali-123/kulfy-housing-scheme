import React from 'react'

function FileUpload() {
  return (
    <>
    <div>
        <div className="row">
            <div className='d-flex justify-content-center align-items-center flex-column upload-div p-5 radius-card'>
                <img src="/assets/icons/IconUpload.svg" alt="" />
                <p className='text-muted fs-5 fw-semibold text-center py-0 my-0'>Drop files here or click to upload</p>
                <p className='text-muted text-center txt-14 py-0 my-0'>(This is just a demo drop zone. Selected files are not actually uploaded.)</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FileUpload