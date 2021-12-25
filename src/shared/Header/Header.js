import './header.css';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoMdArrowDropdown} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useEffect, useRef } from 'react';

const Header = () => {
    const sidebarRef=useRef();
    const [sidebarActive, setSidebarActive]=useState(false);

    const dropdownRef=useRef();
    const [dropdownActive, setDropdownActive]=useState(false);

    const handleSidebarClick=(e)=>{
        e.preventDefault();
        setSidebarActive((previousState)=>{
            return !previousState;
        });
    }
    
    const handleDropdownClick=(e)=>{
        e.preventDefault();
        setDropdownActive((previousState)=>{
            return !previousState;
        });
    }

    useEffect(()=>{
        document.addEventListener('mousedown', (e)=>{
            if(!sidebarRef.current.contains(e.target)){
                setSidebarActive((previousState)=>{
                    return false;
                });
            }
        });

        
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setDropdownActive(!dropdownActive);
            }
        };

        if(dropdownActive){
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [dropdownActive]);

    return (
        <>
        {/* navbar */}
        <div className='navbar'>
            <div className='container'>
                <Link href="#" className='bars-icon-btn'>
                    <GiHamburgerMenu className="bars-icon" onClick={handleSidebarClick} />
                </Link>

                <Link className='brand-logo' to="/"><img className='brand-logo-img' src="logo.svg" alt='logo' /></Link>              
                <nav>
                    <ul>
                        <li><NavLink className='menu-items' activeClassName="active-menu-item" exact to='/'>Home</NavLink></li>
                        <li><NavLink className='menu-items' activeClassName="active-menu-item" exact to='/About'>About</NavLink></li>
                        <li>
                            <NavLink className='menu-items' activeClassName="active-menu-item" onClick={handleDropdownClick} exact to='/Services'>Services<IoMdArrowDropdown className={dropdownActive?'dropdown-icon-active':"dropdown-icon-inactive"}/></NavLink>
                            {/* dropdown */}
                            <div ref={dropdownRef} className={dropdownActive?'dropdown-active':"dropdown-inactive"}>
                                <ul>
                                    <li className="dropdown-items"><NavLink to='/sales-and-marketing-consulting'>Marketing and Sales Consulting</NavLink></li>
                                    <li className="dropdown-items"><NavLink to='/technology-and-it-services'>Technology and IT Services</NavLink></li>
                                    <li className="dropdown-items"><NavLink to='/api-integration'>API Integration</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li><NavLink className='menu-items' activeClassName="active-menu-item" exact to='/contact'>Contact</NavLink></li>
                    </ul> 
                </nav>
            </div>
        </div>

    {/* sidebar */}
        <div ref={sidebarRef} className={sidebarActive?'side-menu-active':"side-menu"}>
            <div className='back-arrow-box'>
                <IoIosArrowBack className="back-arrow" onClick={handleSidebarClick} />
            </div>
            <div className="brand-logo-box" onClick={handleSidebarClick}>
                <Link className="brand-logo" to="/">
                    <img className='brand-logo-sidebar' style={{maxWidth:'12rem', maxHeight:'6rem'}} src="logoWhite.svg" alt='logo'/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li onClick={handleSidebarClick}><NavLink  className='menu-items' activeClassName="active-menu-item" exact to='/'>Home</NavLink></li>
                    <li onClick={handleSidebarClick} ><NavLink className='menu-items' activeClassName="active-menu-item" exact to='/About'>About</NavLink></li>
                    <li>
                        <NavLink className='menu-items' activeClassName="active-menu-item" onClick={handleDropdownClick} exact to='/Services'>Services<IoMdArrowDropdown className={dropdownActive?'dropdown-icon-active':"dropdown-icon-inactive"}/></NavLink>
                        {/* dropdown */}
                        <div  ref={dropdownRef} className={dropdownActive?'dropdown-active':"dropdown-inactive"}>
                            <ul>
                                <li onClick={handleSidebarClick} className="dropdown-items"><NavLink to='/sales-and-marketing-consulting'>Marketing and Sales Consulting</NavLink></li>
                                <li onClick={handleSidebarClick} className="dropdown-items"><NavLink to='/technology-and-it-services'>Technology and IT Services</NavLink></li>
                                <li onClick={handleSidebarClick} className="dropdown-items"><NavLink to='/api-integration'>API Integration</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={handleSidebarClick}><NavLink className='menu-items' activeClassName="active-menu-item" exact to='/contact'>Contact</NavLink></li>
                </ul> 
            </nav>
        </div>
        </>
);
};

export default Header;