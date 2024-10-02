import React from 'react'

function PaymentIcons({hovered}) {
    
  return (
       <svg
           className={hovered}
           width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <rect x="9" y="3" width="6" height="4" rx="2" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M14 11H11.5C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14H12.5C13.3284 14 14 14.6716 14 15.5C14 16.3284 13.3284 17 12.5 17H10" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M12.75 17C12.75 16.5858 12.4142 16.25 12 16.25C11.5858 16.25 11.25 16.5858 11.25 17H12.75ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18H11.25ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10H12.75ZM11.25 11C11.25 11.4142 11.5858 11.75 12 11.75C12.4142 11.75 12.75 11.4142 12.75 11H11.25ZM11.25 17V18H12.75V17H11.25ZM11.25 10V11H12.75V10H11.25Z" fill="#2B2B2B"/>
           </svg>
           
     
  )
}


export default PaymentIcons