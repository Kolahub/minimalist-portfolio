import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

/**
 * MainNavigation component renders the main navigation bar of the website.
 * It includes a logo, a toggleable menu for mobile view, and navigation links.
 * The menu can be opened and closed by clicking the toggle button.
 */
function MainNavigation() {
  // State to manage the open/closed state of the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  // Function to toggle the menu state
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='bg-white shadow'>
      <div className="container mx-auto md:flex md:justify-between md:items-center md:h-32">
        <div className='flex justify-between items-center h-24 p-4'>
          {/* Logo */}
          <img src={logo} alt='Logo' className='h-8' />
          {/* Menu toggle button for mobile view */}
          <button onClick={toggleMenu} className='md:hidden focus:outline-none' aria-label='Toggle Menu'>
            <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
        {/* Navigation menu */}
        <nav className={`font-subFont overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-mxl' : 'max-h-0'} md:max-h-full md:flex md:items-center bg-slate-600 md:bg-inherit`}>
          <ul className='flex flex-col md:flex-row'>
            {/* Navigation links */}
            {['home', 'portfolio', 'contact me'].map((text) => (
              <li key={text} className='p-4'>
                <NavLink
                  to={text === 'home' ? '/' : `${text.toLowerCase().replace(' ', '')}`}
                  className={({ isActive }) => (isActive ? 'text-cusCyan uppercase font-semibold' : 'text-gray-200 md:text-cusGrayDarkBlue uppercase hover:text-cusCyan transition')}
                  onClick={closeMenu} // Close the menu when a link is clicked
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;