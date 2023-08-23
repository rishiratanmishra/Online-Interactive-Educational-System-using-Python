"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='flex bg-slate-50'>
        {/* Mobile Hamburger Menu */}
        <div className='md:hidden bg-gray-800'>
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className='text-white text-xl mt-4 ml-4 cursor-pointer'
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px'
            }}
            onClick={handleMobileMenuClick}
          />
        </div>

        {/* Vertical Navbar */}
        <div
          className={`bg-gray-800 verticalMenuTransition ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}
          style={{
            flex: isMobileMenuOpen ? '0 0 50%' : '0 0 15%',
            width: isMobileMenuOpen ? '50%' : 'auto',
            height: 'calc(100vh - 0px)',
            overflowY: 'auto',
            transition: 'flex 0.3s ease-in-out, width 0.3s ease-in-out',
          }}
        >
          {/* Vertical Navbar Content */}
          <div className='flex flex-col items-center mt-10'>
            <div className='text-red-400 text-2xl'>LOGO</div>
            <div className='text-black mt-6 mb-5'>
              <span>Home</span>
            </div>
          </div>

          <nav className='text-white'>
            <hr />
            <span className='text-left p-2'>Your Activity</span>
            <hr />
            <ul className='flex flex-col gap-4 items-left p-2'>
              <li className='mt-8'>Take Attendance</li>
              <li>Create Notification</li>
              <li>Read Notification</li>
              <li>Chat</li>
              {/* Add more items if needed */}
            </ul>
          </nav>
        </div>

        {/* Horizontal Navbar */}
        <div
          className={`bg-gray-800  ${isMobileMenuOpen ? 'hidden' : 'block'} md:block`}
          style={{ flex: '1', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderLeft: '0px' }}
        >
          {/* Notification Icon */}
          <FontAwesomeIcon icon={faBell} className='text-white text-xl mr-6 cursor-pointer' />

          {/* User Profile Icon */}
          <div className='relative mr-10'>
            <FontAwesomeIcon icon={faUser} className='text-white text-xl cursor-pointer' onClick={handleProfileClick} />
            {isProfileDropdownOpen && (
              <div className='absolute right-0 mt-8 w-40 bg-white rounded-lg shadow-lg'>
                <ul className='text-black p-2'>
                  <li>Your Profile</li>
                  <li>Your Address</li>
                </ul>
              </div>
            )}
                  </div>
                  
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
