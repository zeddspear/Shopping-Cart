import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer' >
    <span className='footerSpan'>Made by <Link className='footerLink' target='_blank' to={"https://github.com/zeddspear"}>Zeddspear</Link> 2023</span>
      <ul className='footerList'>
        <li className='fList'>Terms of Service</li>
        <li className='fList'>Privacy Policy</li>
        <li className='fList'>Shipping Policy</li>
        <li className='fList'>Our Warranty</li>
        <li className='fList'>Refund Policy</li>
      </ul>
    </div>
  )
}

export default Footer
