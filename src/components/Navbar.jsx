import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

// Importing React Icons
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// Importing logo
import logo from '../assets/logo.png'

// Responsive NavBar component that is present app-wide
// Routes ('/home', '/search/', 'results/'
const Navbar = () => {
    // Navigates user to main page
    const navigate = useNavigate('/')

    // State to keep track of which navBar icon is going to be desplayed
    // true = navBar is showing display close menu, false = navBar is not showing, display menu icon
    const [nav, setNav] = useState(false)

    const results = useSelector(
        (state) => state.searchResults.searchResults.length
    )
    // Setting active style in NavLink

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        // regular size nav bar
        <div className="flex justify-between items-center h-24 w-[100%] px-4 bg-white z-100">
            <button onClick={() => navigate('/')}>
                <img src={logo} width="200px" alt="company logo" />
                {/* <h1 className="w-full text-3xl font-bold">APCH.</h1> */}
            </button>
            {/* {As soon as the width is smaller than the md size, it gets hidden
      } */}
            <ul className="hidden md:flex">
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `p-4 underline underline-offset-4`
                                : 'p-4'
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>

                {results > 0 && (
                    <>
                        <strong>|</strong>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `p-4 underline underline-offset-4`
                                        : 'p-4'
                                }
                                to="/resultsnew"
                            >
                                Results
                            </NavLink>
                        </li>
                    </>
                )}

                <strong>|</strong>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `p-4 underline underline-offset-4`
                                : 'p-4'
                        }
                        to="/wishlist"
                    >
                        WishList
                    </NavLink>
                </li>

                <strong>|</strong>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `p-4 underline underline-offset-4`
                                : 'p-4'
                        }
                        to="/apartments"
                    >
                        All Apartments
                    </NavLink>
                </li>
            </ul>
            {/* Responsive size Nav Bar */}
            {/* {As soon as the width is bigger than the md size, it gets hidden */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>

            <div
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r py-6 border-r-gray-900 bg-white ease-in-out duration-500 z-50'
                        : 'fixed left-[-100%]'
                }
            >
                <img src={logo} width="200px" alt="company logo" />
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">
                        <NavLink onClick={handleNav} to="/">
                            Home
                        </NavLink>
                    </li>

                    {results > 0 && (
                        <li className="p-4">
                            <NavLink onClick={handleNav} to="/resultsnew">
                                Results
                            </NavLink>
                        </li>
                    )}
                    <li className="p-4">
                        <NavLink onClick={handleNav} to="/wishlist">
                            WishList
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink onClick={handleNav} to="/apartments">
                            All Apartments
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
