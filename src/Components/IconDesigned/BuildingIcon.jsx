import React, { useState } from 'react'

function BuildingIcon({hovered}) {
    
    return (
         <svg
             className={hovered}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path     d="M15 5V7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
                <path    d="M15 11V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
                <path    d="M15 17V19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
                <path      d="M5 5H19C20.1046 5 21 5.89543 21 7V10C19.8954 10 19 10.8954 19 12C19 13.1046 19.8954 14 21 14V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10V7C3 5.89543 3.89543 5 5 5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
       
    )
}

export default BuildingIcon