import React from 'react'

function PortfolioIcon({hovered}) {
    
  return (
       <svg
           className={hovered}
           width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3 21V8L12 4L21 8V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M13 13H17V21H7V15H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M13 21V12C13 11.4477 12.5523 11 12 11H10C9.44772 11 9 11.4477 9 12V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
     
  )
}


export default PortfolioIcon