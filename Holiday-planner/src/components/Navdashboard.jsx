import React from "react";
import "../styles/Navdashboard.css";
import {FiSun} from "react-icons/fi"
import { MdDashboard, MdDarkMode } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import image from "/image.jpg";

function Navdashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div class="sliderbar">
          <div class="log"></div>
          <ul class="main">
            <li className="myphoto">
              <div>
                <img src={image} alt="Logo-image" />
                <nav>
                  <span>Hossein</span>
                  <p>Traveller</p>
                </nav>
              </div>
            </li>
            <li className="">
              <Link to="/admin/dashboard">
                <i>
                  <MdDashboard />
                </i>
                <span> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <i>
                  <FaUsersCog />
                </i>
                <span> Users</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/tourtable">
                <i>
                  {" "}
                  <PiAirplaneTiltFill />{" "}
                </i>
                <span>Tour</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/booking">
                <i>
                  <FaChartBar />
                </i>
                <span> Booking</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/settings">
                <i>
                  <AiFillSetting />
                </i>
                <span> Settings</span>
              </Link>
            </li>
            <li class="logout">
              <Link to="/login">
                <i></i>
                <span> Logout</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>

        <div className="maincontent">
          <div className="headerwrapper">
            <div className="headertitle">
              <span>Hello, </span>
              <h2>Hossein</h2>
            </div>
            <div className="toggle">
              <FiSun/>
              <nav>Dark Mode</nav>
              <MdDarkMode/>
            </div>
          </div>
        </div>
  <div className="cont">
    <Outlet/>
  </div>
        </div>
      </div>
      <div className="c"></div>
    </>
  );
}

export default Navdashboard;