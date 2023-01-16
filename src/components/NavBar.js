import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

const NavBar = () => {

    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }
  
    const closeSideBar = () => {
      setOpen(false)
    }

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <Link id="home" className="menu-item" href="/home" onClick={closeSideBar}>Home</Link>
        <Link id="about" className="menu-item" href="/about" onClick={closeSideBar}>About</Link>
        <Link id="awards" className="menu-item" href="/awards" onClick={closeSideBar}>Awards & Publications</Link>
        <Link id="outreach" className="menu-item" href="/outreach" onClick={closeSideBar}>Outreach</Link>
        <Link id="Gallery" className="menu-item" href="/gallery" onClick={closeSideBar}>Gallery</Link>
        <Link id="contact" className="menu-item" href="/contact" onClick={closeSideBar}>Contact</Link>
    </Menu>
  )
}

export default NavBar