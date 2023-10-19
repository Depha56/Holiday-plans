import React, { useState } from "react";
import { Link } from "react-router-dom"
import { BiEnvelope, BiMenuAltRight } from 'react-icons/bi'
import { BsTelephoneFill, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaTimes } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../assets/logo.png'
import whiteLogo from '../assets/white-logo.png'
import logoIconwhite from '../assets/logo-icon-white.svg'
import '../styles/Navbar.css'
function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <div className="site-header">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <ul className="contact-list-item">
                                    <li>
                                        <a href="" title="" className='first-child'>
                                            <span className="icon"><BiEnvelope /></span>
                                            <span className="text">dephaingabire@gmail.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="icon"><BsTelephoneFill /></span>
                                            <span className="text">+250 782 955 165</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="header-social">
                                    <li>
                                        <a href="">
                                            <span className="icon"><FaFacebookF /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="icon"><BsInstagram /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" >
                                            <span className="icon"><BsTwitter /></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header-inner">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="site-branding">
                            <a href=""><img src={logo} alt="Logo" /></a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header-menu-side">
                            <div className="header-reserve-btn for-des">
                                <a href="" className="sec-btn">
                                    <span><Link to='/Login'className="lolo">LOGIN</Link></span></a>
                            </div>
                            <div className="search-wp">
                                <div className="search-icon">
                                    <span><AiOutlineSearch /></span>
                                    {/* <FaTimes /> */}
                                </div>
                            </div>
                            {/* =======================MODAL=========================================================                            */}
                            <div className="main-navigation">
                                <button type="button" className="navigation-btn" onClick={openModal}>
                                    <span><BiMenuAltRight /></span>
                                </button>
                                {isModalOpen && (
                                    <div className="modal-overlay">
                                        <div className="modal">
                                            <div className="logo-icon">
                                                <img src={logoIconwhite} alt="logo-icon-white" />
                                            </div>
                                                <div className="full-menu-logo-row">
                                                            <div className="site-branding">
                                                                <a href="index.html" title="Travel & Tour"><img src={whiteLogo} alt="Logo" /></a>
                                                            </div>
                                                            
                                                </div>
                                                <div className="close-modal">
                                          <button className="close-modal-one" onClick={closeModal}>
                                                <FaTimes />
                                            </button>
                                          </div>
                                            <div className="modal-content">
                                             <ul>
                                                <li>
                                                    <Link to='/'className="fff" onClick={closeModal} >Home</Link>
                                                </li>
                                                <li>
                                                    <Link to='/About'href='/About' onClick={closeModal}>About us</Link>
                                                </li>
                                                                                                            
                                               
                                                    
                                                <li>
                                                        <Link to='/Tour' onClick={closeModal}>Tour</Link>
                                                        <select className="select-options">  
                                                    <option value="" className="options"></option>
                                                    <option value="Tour" className="options">Tour</option>
                                                    <option value="Tour details"className="options">Tour details</option>
                                                    </select> 
                                                </li>                                                               
                                                       
                                            
                                                <li>
                                                    <Link to='/Contact'onClick={closeModal}>Contact us</Link> 
                                                </li> 
                                                <li>
                                                    <Link to='/Login'href='/Login' onClick={closeModal}>Login</Link>
                                                </li>                                                       
                                            </ul>
                                          </div>
                                          
                                            
                                        
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
