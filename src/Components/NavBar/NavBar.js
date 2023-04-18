import React from 'react'
import logo from "./Logo/New Logo for DC Comics.jpg"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { useCartLength } from '../../Helper/CartDataContext'

function NavBar() {

  let cartLength = useCartLength();

  return (
    <div className='NavBar'>
    
      <div className='LogoDiv'>
        <Link to={"/"}><img src={logo} className='logo' alt='LogoPicture'/></Link> 
      </div>
      <div className='NavLinksDiv'>
            <ul className='NavLinks'>
                <Link to={"/"} className='link'><li>Home</li></Link>
                <Link to={"/shop"} className='link'><li>Shop</li></Link>  
                <Link to={"/cart"} className='cart link' ><li><FontAwesomeIcon icon={faCartShopping}/>{<div className='notify' style={!cartLength ? {opacity: "0%"} : {opacity: "100%"}}>{cartLength}</div>}</li></Link>
            </ul>
      </div>
    </div>
  )
}

export default NavBar
