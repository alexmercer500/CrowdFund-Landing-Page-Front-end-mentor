import React, { useRef } from 'react'
import './header.css'
import Logo from '../images/logo.svg'
import HamOpen from '../images/icon-hamburger.svg'
import HamClose from '../images/icon-close-menu.svg'

function Header() {
  const headRef = useRef();
  const navMenuRef = useRef()

  function navToggle(){
    const navBar = headRef.current
    navBar.classList.toggle('active')
    
    const navMenu = navMenuRef.current
    navMenu.classList.toggle('close');
  }

  return (
    <div className='upper-section'>
    <header>
        <img className='logo' src={Logo} alt='Logo of Company'/>
        <nav ref={headRef}>
            <a href='#'>About</a>
            <a href='#'>Discover</a>
            <a href='#'>Get Started</a>
        </nav>
        <div className='nav-toggle' onClick={navToggle} ref={navMenuRef}>
            <img className='nav-open' src={HamOpen} alt='Open Navigation menu' />
            <img className='nav-close' src={HamClose} alt='Close Navigation menu' />
        </div>
    </header>
    </div>
  )
}

export default Header