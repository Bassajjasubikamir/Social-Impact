import React, { useState } from 'react'
import LoginButton from '../auth0/LoginButton'
import LogOutButton from '../auth0/LogOutButton'
import Profile from '../header/Profile'
import DropdownButton from '../header/DropdownButton'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
      };

  return (
    <div className='layout'>
        <header className="header p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-white font-bold text-xl">QuickService</div>

            {/* Navigation Buttons (Visible on larger screens) */}
            <nav className="navs hidden md:flex justify-center space-x-4">
              <NavLink to="/" className="text-white hover:text-lg">
                Home
              </NavLink>
              <NavLink to="about" className="text-white hover:text-lg">
                About
              </NavLink>
              <NavLink to='services' className="text-white hover:text-lg">
                Services
              </NavLink>
              <NavLink to="training" className="text-white hover:text-lg">
                Our Training
              </NavLink>
              <NavLink to="contact" className="text-white hover:text-lg">
                Contact Us
              </NavLink>
              <DropdownButton />
            </nav>

            <LoginButton />
            <LogOutButton />
            

            {/* Button to display Navigation Buttons (Visible on smaller screens) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-gray-900"
            >
              Menu
            </button>

            {/* Navigation Buttons (Visible on smaller screens when the button is clicked) */}
            {showMenu && (
              <nav className="navs md:hidden flex flex-col justify-center space-y-2 mt-4 absolute bottom-2 right-5">
                <NavLink to="/" className="text-white hover:text-md">
                  Home
                </NavLink>
                <NavLink to="about" className="text-white hover:text-lg">
                  About
                </NavLink>
                <NavLink to="services" className="text-white hover:text-lg">
                  Services
                </NavLink>
                <NavLink to="training" className="text-white hover:text-lg">
                  Our Training
                </NavLink>
                <NavLink to="contact" className="text-white hover:text-lg">
                  Contact Us
                </NavLink>
              </nav>
            )}

            <Profile />
            

            
          </div>
        </header>
        
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout
