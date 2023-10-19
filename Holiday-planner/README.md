# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
================================================
<div class="full-menu">
                                    <div class="logo-icon">
                                        <img src={logo} alt="logo-icon-white" />
                                    </div>
                                    <div class="container">
                                        <div class="full-menu-logo-row">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="site-branding">
                                                        <a href="index.html" title="Travel & Tour"><img src={logo} alt="Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-5">
                                                <div class="menu-container">
                                                    <ul>
                                                        <li>
                                                            <Link to='/'>Home</Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/About'>About us</Link>
                                                        </li>
                                                        <li class="dropdown-items">
                                                            <Link to='/Destination'>Destination</Link>                                                                <ul class="sub-menu">
                                                                <li>
                                                                    <Link to='/'>Destination</Link>                                                                    </li>
                                                                <li>
                                                                    <Link to='/'>Destination details</Link>                                                                    </li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown-items">
                                                            <Link to='/Tour'>Tour</Link>                                                                <ul class="sub-menu">
                                                                <li>
                                                                    <Link to='/'>Tour</Link>                                                                    </li>
                                                                <li>
                                                                    <Link to='/'>Tour details</Link>                                                                    </li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown-items">
                                                            <Link to='/Blog'>Blog</Link>                                                                <ul class="sub-menu">
                                                                <li>
                                                                    <Link to='/'>Blog</Link>                                                                    </li>
                                                                <li>
                                                                    <Link to='/'>Blog details</Link>                                                                    </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to='/Contact'>Contact us</Link>                                                            </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ================================================
                                .full-menu {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100vw;
    height: 100vh;
    background: var(--dark-color);
    overflow: hidden;
    overflow-y: auto;
    transition: var(--transition);
    opacity: 0;
}

.full-menu .full-menu-logo-row {
    padding-top: 60px;
    padding-bottom: 13vh;
}

.full-menu .full-menu-logo-row .site-branding img {
    width: 349px;
}

.full-menu .menu-container {
    position: relative;
    padding: 5vh 0;
}

.full-menu .menu-container:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 500%;
    height: 100%;
    background: #393939;
    z-index: 1;
}

.full-menu .menu-container>ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.full-menu .menu-container ul li {
    margin-bottom: 5px;
}

.full-menu .menu-container ul li a {
    color: var(--white-color);
    font-family: var(--secondary-font-family);
    font-size: max(3.7vh, 15px);
    line-height: max(4.7vh, 25px);
    font-weight: bold;
    position: relative;
    display: inline-flex;
    transition: var(--transition);
}

.full-menu .menu-container ul li a:before {
    content: '';
    position: absolute;
    top: 52%;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--yellow-color);
    z-index: -1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    -webkit-transition: -webkit-transform 0.95s cubic-bezier(0.23, 1, 0.23, 1);
    transition: transform 0.95s cubic-bezier(0.23, 1, 0.23, 1), -webkit-transform 0.95s cubic-bezier(0.23, 1, 0.23, 1);
}

.full-menu .menu-container ul li a:hover,
.full-menu .menu-container ul li.active a {
    color: var(--yellow-color);
}

.full-menu .menu-container ul li a:hover:before,
.full-menu .menu-container ul li.active a:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: left;
    transform-origin: left;
}

.full-menu .menu-container ul li.dropdown-items>a {
    margin-right: max(3vh, 15px);
}

.full-menu .menu-container ul li.dropdown-items>a:after {
    content: "\f078";
    position: absolute;
    color: #fff;
    font-size: max(2.3vh, 15px);
    line-height: max(2.3vh, 15px);
    right: -3vh;
    top: 55%;
    transition: var(--transition);
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transform: translate(0, -50%);
}

.full-menu .menu-container ul li.dropdown-items.dropdown-open>a:after {
    transform: translate(0, -50%) rotate(180deg);
}

.full-menu .menu-container .sub-menu {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 0 0 30px;
}

.full-menu .menu-container .sub-menu li a {
    font-size: max(3vh, 15px);
    line-height: max(4vh, 25px);
}

.full-menu .menu-container .dropdown-items.dropdown-open .sub-menu {
    display: flex;
}

.full-menu .logo-icon {
    right: 50px;
    left: auto;
    bottom: 50px;
}

.full-menu .logo-icon img,
.search-overlay-inner .logo-icon img {
    height: 34vh;
}

.full-menu-social {
    position: absolute;
    bottom: 0;
    right: 15px;
}

.full-menu-social ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.full-menu-social ul li a {
    width: 50px;
    height: 50px;
    font-size: 20px;
    display: inline-flex;
    background: var(--yellow-color);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
}

.full-menu-social ul li {
    margin-bottom: 15px;
}

.full-menu-social ul li:last-child {
    margin-bottom: 0;
}

.full-menu-social ul li a:hover {
    color: var(--yellow-color);
    background: var(--white-color);
}

.main-navigation.toggle-menu .full-menu {
    left: 0;
    opacity: 1;
    transition: var(--transition);
    z-index: 3;
}


========================================
import React, { useState } from 'react';

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className="navigation-btn" onClick={openModal}>
        Open Modal
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              {/* Your modal content goes here */}
              <h2>Modal Content</h2>
              <p>This is the modal content.</p>
            </div>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
===========================
import React from 'react';
import Modal from './Modal'; // Update the path to your Modal component

function App() {
  return (
    <div className="App">
      {/* Your existing JSX code here */}
      <Modal />
    </div>
  );
}

export default App;

==========================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Dropdown List Example</title>
</head>
<body>
    <ul class="main-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3
            <ul class="dropdown-list">
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
            </ul>
        </li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
</body>
</html>
=================================================
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>

    <div class="content">
        <!-- Your website content goes here -->
    </div>
</body>
</html>
===========================
/* Style for the fixed navigation bar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333; /* Change the background color as needed */
    color: #fff; /* Change the text color as needed */
    padding: 10px 0;
}

.navbar a {
    text-decoration:
    ======================================
    import React from 'react';

const MyComponent = () => {
  const imageSrc = 'your-image-url.jpg';
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover', // You can adjust the background size as needed
    width: '100px', // Set the width of the element
    height: '100px', // Set the height of the element
  };

  return (
    <div style={backgroundImageStyle}>
      {/* Content goes here */}
    </div>
  );
};

export default MyComponent;
==============
import React from 'react';

const MyComponent = () => {
  const imageSrc = 'your-image-url.jpg';
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover', // You can adjust the background size as needed
    width: '100px', // Set the width of the element
    height: '100px', // Set the height of the element
  };

  return (
    <div style={backgroundImageStyle}>
      {/* Content goes here */}
    </div>
  );
};

export default MyComponent;
==========================
import React from "react";
import paymentCom from "../assets/payment-companies-logo.png";
import whiteLogo from "../assets/white-logo.png";
import footerBgImg from "../assets/footer-back.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
,
} from "react-icons/fa";

function footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row footer-header">
          <div className="three-col">
            <div className="footer-row">
              <div className="footer-logo">
                <a href="/">
                  <img src={whiteLogo} alt="Logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  <b>Holiday Planners</b> sit amet consectetur adipisicing elit.
                  Perferendis sapiente tenetur officiis explicabo fugit, sit
                  mollitia eum atque excepturi quaerat autem.
                </p>
              </div>
              <div className="newsletter-form">
                <form>
                  <span className="input-box email-wrap">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter Your Email"
                      required
                    />
                    <button type="submit" className="btn">
                      <span>Submit</span>
                    </button>
                  </span>
                </form>
              </div>
              <div className="payment-companies-logo">
                <img src={paymentCo} alt="Payment" />
              </div>
            </div>
          </div>

          <div className="three-col">
            <div className="footer-row footer-nav">
              <div className="footer-title">
                <div className="h3-title">Navigation</div>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/"> Home</a>
                  </li>
                  <li>
                    <a href="/"> About</a>
                  </li>
                  <li>
                    <a href="/"> Destination</a>
                  </li>
                  <li>
                    <a href="/tour-list"> Tour</a>
                  </li>
                  <li>
                    <a href="/"> Blog</a>
                  </li>
                  <li>
                    <a href="/contact"> Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="three-col">
            <div className="footer-row footer-contact-wp">
              <div className="footer-title">
                <div className="h3-title">Need Help?</div>
              </div>
              <div className="footer-contact">
                <ul>
                  <li>
                    <span className="contact-label">Call Us</span>
                    <a href="tel:1234567890">+123 456 7890</a>
                  </li>
                  <li>
                    <span className="contact-label">Email for Us</span>
                    <a href="mailto:holidayplanners@gmail.com">
                      holidayplanners@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="contact-label">Location</span>
                    <a href="/">Main Street, Kigali - RW</a>
                  </li>
                  <li className="social-icons">
                    <span className="contact-label">Follow Us</span>
                    <ul>
                      <li>
                        <a href="https://fb.com">
                          <span className="icon">
                            <FaFacebookF />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com">
                          <span className="icon">
                            <FaInstagram />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <span className="icon">
                            <FaTwitter />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="row">
            <div className="two-col copyright">
              <p className="copyright-text">
                Copyright &copy; 2023{" "}
                <a href="https://instagram.com/">swwwwwwwwwwww</a>. All
                Rights Reserved.
              </p>
            </div>
            <div className="two-col copyright-link">
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="side-border">
                  <a href="/">Terms of Use</a>
                </li>
                <li>
                  <a href="/">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;

===================================
.site-footer.overlay:before {
    opacity: 0.95;
}

.footer-logo {
    width: 258px;
}

.footer-text p {
    color: var(--white-color);
}

.newsletter-form .form-input {
    background: rgb(255 255 255 / 0.1);
    border-color: var(--white-color);
    padding: 15px 140px 15px 20px;
    color: var(--white-color);
}

.newsletter-form .form-input::placeholder {
    color: var(--white-color);
}

.newsletter-form .sec-btn {
    width: 120px;
    position: absolute;
    right: 0;
    top: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}

.newsletter-form .sec-btn:before {
    background: var(--white-color);
}

.newsletter-form .sec-btn:hover {
    color: var(--yellow-color);
}

.payment-companies-logo img {
    max-width: 200px;
    width: 100%;
}

.footer-title {
    padding: 15px 0;
    border-bottom: 1px solid var(--white-color);
    margin-bottom: 5px;
}

.footer-title .h3-title {
    color: var(--white-color);
}

.footer-nav-wp {
    padding: 0 30px 0 60px;
}

.footer-contact-wp {
    padding: 0 30px;
}

.footer-menu ul {
    margin-top: 15px;
}

.footer-menu ul li {
    margin-bottom: 15px;
}

.footer-menu ul li:last-child {
    margin-bottom: 0;
}

.footer-menu ul li a {
    padding-left: 20px;
    color: var(--white-color);
    position: relative;
    transition: var(--transition);
}

.footer-menu ul li a:before {
    content: '';
    position: absolute;
    top: 52%;
    left: 0;
    transform: translate(0, -50%);
    width: 5px;
    height: 5px;
    background: var(--white-color);
    transition: var(--transition);
}

.footer-menu ul li a:hover {
    color: var(--yellow-color);
}

.footer-contact>ul>li {
    padding-left: 15px;
    border-left: 3px solid var(--yellow-color);
    margin: 20px 0;
}

.footer-contact>ul>li:last-child {
    margin-bottom: 0;
}

.footer-contact ul li .contact-label {
    display: block;
    color: var(--white-color);
    font-size: 12px;
    line-height: 17px;
}

.footer-contact ul li a {
    color: var(--white-color);
    font-family: var(--secondary-font-family);
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
}

.footer-contact ul li a:hover {
    color: var(--yellow-color);
}

.footer-contact>ul>li.social-icons ul li {
    display: inline-block;
    margin-right: 10px;
}

.footer-contact>ul>li.social-icons ul li a {
    color: var(--yellow-color);
}

.footer-contact>ul>li.social-icons ul li a:hover {
    color: var(--white-color);
}

.bottom-footer {
    padding: 25px 0;
    border-top: 1px solid var(--white-color);
    position: relative;
    z-index: 2;
}

.copyright-text {
    color: var(--white-color);
}

.bottom-footer .copyright-text a {
    color: var(--yellow-color);
    transition: var(--transition);
}

.bottom-footer .copyright-text a:hover {
    text-decoration: underline !important;
    color: var(--white-color);
}

.copyright-link ul {
    text-align: right;
}

.copyright-link ul li {
    display: inline-block;
    padding: 0 5px 0 8px;
    position: relative;
}

.copyright-link ul li:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 80%;
    background: var(--white-color);
    transform: translate(0, -50%);
}

.copyright-link ul li:first-child:before {
    content: none;
}

.copyright-link ul li a {
    color: var(--white-color);
}

.copyright-link ul li a:hover {
    color: var(--yellow-color);
}
.common-sec {
    padding-top: 70px;
    padding-bottom: 70px;
    position: relative;
    

}

.pt-70 {
    padding-top: 70px;
}

.pb-70 {
    padding-bottom: 70px;
}

.mb-30 {
    margin-bottom: 30px;
}

.mb-40 {
    margin-bottom: 40px;
}

.mt-30 {
    margin-top: 30px;
}

.mt-40 {
    margin-top: 40px;
}
=============================
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <label class="custom-checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
        Check this box
    </label>
</body>
</html>
======================================
// Registration.js

import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would implement the registration/authentication logic
    // For a simple example, you can log the form data
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
===============================
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0
====================
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Contact Us</h1>
    <form action="" method="post">
        <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required>
        </div>
        <div class="form-group">
            <label for="service">Service</label>
            <input type="text" id="service" name="service" required>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div class="form-group">
            <button type="submit" id="submit-button">Submit</button>
        </div>
    </form>
</body>
</html>
=========================
body {
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
}

============================
import React from 'react';

class OptionSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: 'option1' };
  }

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Select an option:</label>
        <select value={this.state.selectedOption} onChange={this.handleChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default OptionSelect;
=======================
render() {
  return (
    <div>
      <label>Select an option:</label>
      <select value={this.state.selectedOption} onChange={this.handleChange}>
        <option value="option1">
          <Link to="/page1">Option 1</Link>
        </option>
        <option value="option2">
          <Link to="/page2">Option 2</Link>
        </option>
        <option value="option3">
          <Link to="/page3">Option 3</Link>
        </option>
      </select>
      <p>Selected option: {this.state.selectedOption}</p>
    </div>
  );
}
=======================
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Planned Trips</li>
          <li>Explore Destinations</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="main-content">
        {/* Your dashboard content goes here */}
        <h1>Welcome to the Holiday Planner Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
=====================
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  background-color: #333;
  color: #fff;
  width: 250px;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  padding: 20px;
}

/* Add more styling as needed */
===========================================
import React, { Component } from 'react';
import './UserTable.css'; // Import your CSS for styling

class UserTable extends Component {
  constructor() {
    super();
    this.users = [
      {
        userId: 1,
        username: 'User1',
        userEmail: 'user1@example.com',
        userResponsibility: 'Role 1',
      },
      {
        userId: 2,
        username: 'User2',
        userEmail: 'user2@example.com',
        userResponsibility: 'Role 2',
      },
      // Add more users as needed
    ];
  }

  handleEditUser(userId) {
    // Implement the edit user functionality here
    alert(`Edit user with ID: ${userId}`);
  }

  handleDeleteUser(userId) {
    // Implement the delete user functionality here
    const updatedUsers = this.users.filter(user => user.userId !== userId);
    this.users = updatedUsers;
    this.forceUpdate(); // This forces a re-render
  }

  render() {
    return (
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>User Email</th>
              <th>User Responsibility</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.users.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.userEmail}</td>
                <td>{user.userResponsibility}</td>
                <td>
                  <button onClick={() => this.handleEditUser(user.userId)}>Edit</button>
                  <button onClick={() => this.handleDeleteUser(user.userId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
======================
import React, { useState } from 'react';
import './UserTable.css'; // Import your CSS for styling

function UserTable() {
  const [users, setUsers] = useState([
    {
      userId: 1,
      username: 'User1',
      userEmail: 'user1@example.com',
      userResponsibility: 'Role 1',
    },
    {
      userId: 2,
      username: 'User2',
      userEmail: 'user2@example.com',
      userResponsibility: 'Role 2',
    },
    // Add more users as needed
  ]);

  const handleEditUser = (userId) => {
    // Implement the edit user functionality here
    alert(`Edit user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    // Implement the delete user functionality here
    const updatedUsers = users.filter((user) => user.userId !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>User Email</th>
            <th>User Responsibility</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.userEmail}</td>
              <td>{user.userResponsibility}</td>
              <td>
                <button onClick={() => handleEditUser(user.userId)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.userId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
========================================
import React from 'react';

function Edit({ onClose, item, onSave }) {
  const [name, setName] = React.useState(item.name);
  const [email, setEmail] = React.useState(item.email);
  const [country, setCountry] = React.useState(item.country);
  const [status, setStatus] = React.useState(item.status);

  const handleSave = () => {
    onSave(item.id, name, email, country, status);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Country:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label>Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Edit;
===================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit'; // Import the Edit component
import '../styles/Users.css';

function Users() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // ... (existing code)

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  return (
    <div className="tour-table-container">
      <h2 className="tour-detail">User Details</h2>
      <table className="tour-table">
        {/* ... (existing code) */}
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              {/* ... (existing code) */}
              <td className="options">
                <button className="option" onClick={handleEditClick}>
                  EDIT
                </button>
                <button className="option op">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditModalOpen && <Edit />}
    </div>
  );
}

export default Users;
000000000000000000000000000000000000000000000
// Edit.jsx
import React from 'react';
import '../styles/Edit.css';

function Edituser({ user, onClose, onSave }) {
  // Assuming the "user" prop contains the user's information

  const handleSave = () => {
    // Add code to save the edited user data and then close the modal
    // You can pass the edited data to the "onSave" function
    // and handle saving in your parent component
    onSave(/* Pass the edited data here */);
    onClose();
  };

  return (
    <div className="edit-modal">
      <div className="edit-header">
        <h2>Edit User</h2>
        <button className="edit-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="edit-body">
        <form>
          <div className="form-group">
            <label>Image:</label>
            <input type="text" value={user.image} />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={user.name} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={user.email} />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" value={user.country} />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input type="text" value={user.status} />
          </div>
        </form>
      </div>
      <div className="edit-footer">
        <button className="edit-button edit-save" onClick={handleSave}>
          Save
        </button>
        <button className="edit-button edit-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Edituser;


