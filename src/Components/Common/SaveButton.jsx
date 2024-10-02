import React from 'react'

function NextButton({onClick,content}) {
    return (
        <div>
            <button className="save-button text-center py-2 radius-card" onClick={onClick}>
                <span className="fw-semibold txt-18">{content}</span>
            </button>
        </div>
    )
}

export default NextButton