import React, { useState } from 'react';

function CheckBoxes({ option1, option2, heading }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <p className='fw-semibold my-0 mt-2 py-1 '>{heading}</p>
            <label className='text-muted d-flex gap-2 my-0 py-0 '>
                <input
                    className='checkbox-custom'
                    type="checkbox"
                    checked={selectedOption === option1}
                    onChange={() => handleCheckboxChange(option1)}
                />
                {option1}
            </label>

            {option2 && <label className='text-muted d-flex gap-2 my-0 py-0 mt-2'>
                <input
                    className='checkbox-custom'
                    type="checkbox"
                    checked={selectedOption === option2}
                    onChange={() => handleCheckboxChange(option2)}
                />
                {option2}
            </label>}
        </div>  
    );
} 
export default CheckBoxes;