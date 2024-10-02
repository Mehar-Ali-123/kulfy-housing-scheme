import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import CancelButton from '../../../Components/Common/CancelButton';
import NextButton from '../../../Components/Common/SaveButton';
import ResidentDetailsToAdd from '../../../Components/ResidentComponents/ResidentDetailsToAdd/ResidentDetailsToAdd';
import CheckBoxes from '../../../Components/Checkbox/CheckBoxes';
import ResidentFinishModal from '../../../Components/ResidentComponents/ResidentFinishModal/ResidentFinishModal';
import ErrorModal from '../../../Components/ErrorModal/ErrorModal';

function SetupResident() {
    const [searchText, setSearchText] = useState('');
    const [matchingAddresses, setMatchingAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addressRows, setAddressRows] = useState([{ id: 1 }]);
    const [showComponent1, setShowComponent1] = useState(false); // Add a state for Component 1
    const [showComponent2, setShowComponent2] = useState(false); // Add a state for Component 2
    const [isOpen, setIsOpen] = useState(false)
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 

    const handleSaveButtonClick = () => {
        setShowComponent1(true);
        setShowComponent2(true);
    };
    const handleAddAnotherAddress = () => {
        const newAddress = { id: Date.now() };
        setAddressRows([...addressRows, newAddress]);
    };

    const handleRemoveAddress = (idToRemove) => {
        if (idToRemove === 1) {
            return;
        }

        const updatedRows = addressRows.filter((address) => address.id !== idToRemove);
        setAddressRows(updatedRows);
    };

    const data = [
        {
            id: 1,
            address: "123 Single Family Home, Hoboken NJ, 07030",
        },
        {
            id: 2,
            address: "456 Apartment, Hoboken NJ, 07030",
        },
        {
            id: 3,
            address: "789 Townhouse, Hoboken NJ, 07030",
        },
        {
            id: 4,
            address: "789 Townhouse, Hoboken NJ, 07030",
        },
        {
            id: 5,
            address: "789 Townhouse, Hoboken NJ, 07030",
        },
        {
            id: 6,
            address: "789 Townhouse, Hoboken NJ, 07030",
        },
        {
            id: 7,
            address: "789 Townhouse, Hoboken NJ, 07030",
        },
    ];

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchText(query);

        const filteredAddresses = data.filter((item) =>
            item.address.toLowerCase().includes(query)
        );
        setMatchingAddresses(filteredAddresses);
        setSelectedAddress(null);
    };

    const handleAddressClick = (address) => {
        setSelectedAddress(address);
        setSearchText(address);
    };

    const handleCancelSearch = () => {
        setSearchText('');
        setMatchingAddresses([]);
        setSelectedAddress(null);
    };
    return (
        <>
            <div className=' '>
                <div className="container-fluid mb-5 h-120p ">
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                            <div>

                                {showComponent1 ? (
                                    <h2 className='text-center mt-5  fwt-600'>
                                        Setup Lease
                                    </h2>
                                )
                                    :
                                    <h2 className='text-center mt-5  fwt-600'>
                                        Setup Residents
                                    </h2>
                                }
                                <div className="col-md-10 mx-auto mb-5">
                                    <p className='text-center'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-10 mt-3  ">
                            <p className='text-primary cursor-pointer' onClick={()=>{setIsErrorModalOpen(true)}}>error api click me</p>
                                <p className='fw-semibold'>Select property</p>
                                <div className="col-md-12 bkg-light radius-bar position-relative">
                                    <span className="p-input-icon-right w-100">
                                        <i className="pi pi-search" />
                                        <InputText
                                            className='w-100 py-2 txt-18'
                                            placeholder='Search by address, state, or property name'
                                            value={searchText}
                                            onChange={handleSearch}
                                        />
                                    </span>
                                </div>
                                <button className='mt-4 px-3 py-1 bg-transparent radius-button border-btn z-n1'>
                                    Cancel
                                </button>
                                {/* Conditionally render the container based on searchText length */}
                                {searchText.length > 0 && (
                                    <div className="mt-4 col-md-12 searched-data position-absolute box-shadow bg-light radius-bar z-2 px-0" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                        {selectedAddress ? (
                                            // Only display the selected address
                                            <div className="position-relative box-shadow bg-light radius-bar z-2 px-0">
                                                <div className="wrapper-container">
                                                    <div className="row ms-3 border-bottom">
                                                        <div className="col-md-12">
                                                            <div className={`row py-2 py-xxl-4`}>
                                                                <div className="col-md-3 col-xxl-4 d-flex justify-content-center align-items-center px-0">
                                                                    <div className={`img-box-port d-flex justify-content-center align-items-center p-4 radius-card`}>
                                                                        <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 d-flex justify-content-center align-items-start flex-column ps-2">
                                                                    <h5 className='fw-semibold py-0 my-0 pt-1'>{selectedAddress}</h5>
                                                                    <p className='py-2 my-0'>NJ, 07030</p>
                                                                    {/* Add more details here */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className='cancel-search w-100 d-flex justify-content-center align-items-center p-2 text-primary' onClick={handleCancelSearch}>Cancel Search</button>
                                            </div>
                                        ) : (
                                            // Display matching addresses
                                            matchingAddresses.map((item) => (
                                                <div key={item.id} className="  wrapper-container " onClick={() => handleAddressClick(item.address)}>
                                                    <div className="row ms-3 border-bottom">
                                                        <div className="col-md-12">
                                                            <div className={`row py-2 py-xxl-4`}>
                                                                <div className="mb-2  mb-md-0 col-md-3 col-xxl-4 d-flex justify-content-start  justify-content-md-center align-items-center px-0">
                                                                    <div className={`img-box-port d-flex justify-content-center  align-items-center p-4 radius-card`}>
                                                                        <img height="100%" width="100%" src="/assets/icons/homeDataFound.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 d-flex justify-content-center align-items-start flex-column ps-2">
                                                                    <h5 className='fw-semibold py-0 my-0 pt-1'>{item.address}</h5>
                                                                    <p className='py-2 my-0'>NJ, 07030</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                                {selectedAddress && searchText.length > 0 && (
                                    <>
                                        {showComponent2 ? (
                                            <div className="mt-5 pt-5">
                                                <div className="row mt-5 mt-md-0">
                                                    <div className="col-md-12">
                                                        <h2 className=' mt-5 fw-semibold fwt-600'>
                                                            Setup Lease
                                                        </h2>
                                                        <div>
                                                            <CheckBoxes heading="Lease type" option1="Fixed Dates" option2="Month To Month" />
                                                        </div>
                                                        <div className="col-md-12 mt-3 mx-0 px-0">
                                                            <div className="row">
                                                                <div className="mt-3 col-md-6">
                                                                    <p className="fw-semibold py-2 my-0">Lease Start Date</p>
                                                                    <div className="box-shadow radius-card d-flex align-items-center justify-content-between">

                                                                        <InputText
                                                                            className="py-3 pe-4 txt-18 w-75 "

                                                                        />
                                                                        <img className='me-3' height={30} width={30} src="/assets/icons/calendar.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="mt-3 col-md-6">
                                                                    <p className="fw-semibold py-2 my-0">Lease End Date</p>
                                                                    <div className="box-shadow radius-card d-flex align-items-center justify-content-between">

                                                                        <InputText
                                                                            className="py-3 pe-4 txt-18 w-75 "

                                                                        />
                                                                        <img className='me-3' height={30} width={30} src="/assets/icons/calendar.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-4 col-md-11 pt-5 mb-5 d-flex align-items-center justify-content-center gap-3   me-4">
                                                    <CancelButton /> <NextButton content="Finish" onClick={() => { setIsOpen(true) }} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className='pt-5 my-5'>
                                                    {addressRows.map((address) => (
                                                        <ResidentDetailsToAdd
                                                            key={address.id} 
                                                            removeButton={addressRows.length > 1 && (
                                                                <span className='text-primary pe-0 pe-md-5 cursor-pointer' onClick={() => handleRemoveAddress(address.id)}> <img src="/assets/icons/circle-minus-blue.svg" alt="" />Remove</span>
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="mt-3 col-md-11">
                                                    <p className='text-primary mt-3 cursor-pointer' onClick={handleAddAnotherAddress}>
                                                        <img src="/assets/icons/circle-plus-blue.svg" alt="" /> Add another person
                                                    </p>
                                                </div>
                                                <div className="col-md-11  my-4 mb-5 d-flex align-items-center justify-content-center gap-3   me-4">
                                                    <CancelButton /> <NextButton content="Save" onClick={handleSaveButtonClick} />
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ResidentFinishModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />

            <ErrorModal
                isOpen={isErrorModalOpen}
                errorContent={<h4 className='mt-4 fw-semibold mt-3'><span className='txt-Primary'>Whoops!</span> Slip-up on our end. Try again?</h4>}
                onRequestClose={() => setIsErrorModalOpen(false)}
                errorImage={<img src="/assets/icons/apiError.svg" />}
            />

            <ResidentFinishModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
        </>
    );
}

export default SetupResident;