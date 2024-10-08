import React from 'react'

function ReportsIcons({ hovered }) {

  return (
    <svg
      className={hovered}
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H11.697" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 14V18H22" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 11V7C18 5.89543 17.1046 5 16 5H14" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="8" y="3" width="6" height="4" rx="2" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="18" cy="18" r="4" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 11H12" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 15H11" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

  )
}


export default ReportsIcons