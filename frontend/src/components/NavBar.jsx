import React from 'react'
import { useGlobalContext } from '../context/ContextProvider'
import { BiMoon, BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navLinks = [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Add Expense',
          link: '/add-expense'
        },
        {
          title: 'Expenses',
          link: '/all-expenses'
        },
        {
          title: 'Reports',
          link: '/reports'
        },
      ]

    const { mode, toggleMode } = useGlobalContext()
  
    return (
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-3xl font-semibold text-white">Expense Tracker</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navLinks.map((link, index) => (
                <Link
                    key={index}
                    to={link.link}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                >
                    {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* top right theme toggle */}
        <div className="absolute top-15 right-0 p-5">
          <button onClick={toggleMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none">
            {mode === 'light' ? <BiMoon className="h-5 w-5" /> : <BiSun className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  