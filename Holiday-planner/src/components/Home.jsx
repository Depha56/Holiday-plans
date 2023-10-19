import React, { useState } from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
// import houses from "../assets/houses.jpg"
import image from "../assets/image.jpg"
import image3 from '../assets/image3.jpg'
import mountain from "../assets/mountain.jpg"
import home from '../assets/home2.png'
import {AiFillClockCircle} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
// import smallImage from '../assets/about-small-image.jpg'


import {FaMapMarkerAlt,FaCalendarAlt,FaCaretDown,FaFlag} from "react-icons/fa"
// import '../styles/Home.css'

const Home = () => {
  const backgrounds = [
    {
      image: mountain,
      content: {
        title: "Russell Baker",
        description: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money",
      },
    },
    {
      image: image,
      content: {
        title: "Susan Heller",
        description: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money",
      },
    },
    {
      image: image3,
      content: {
        title: "Jawaharial Nehru",
        description: "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.",
      },
    },
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const currentBackground = backgrounds[currentBackgroundIndex];

  const handleNextBackground = () => {
    const nextIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    setCurrentBackgroundIndex(nextIndex);
  };

  const handlePrevBackground = () => {
    const prevIndex = (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
    setCurrentBackgroundIndex(prevIndex);
  };
  return (
    <>
      <div className="home_cont"  style={{ backgroundImage: `url(${currentBackground.image})` }}>
        <h1 className='arrayHeader'>{currentBackground.content.title}</h1>
        <p className='arrayPara'>{currentBackground.content.description}</p>
      </div>
      <NextButton onClick={handleNextBackground} />
      <PrevButton onClick={handlePrevBackground} />
      <section className="banner-form">
        <div className="form-container">
          <form action="" className="form">
            <div className="banner-form-input">
              <span className="input-box where-wrap">
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                <input type="text" className="form-input" placeholder="Where To?" />
              </span>
            </div>
            <div className="banner-form-input">
              <span className="input-box when-wrap">
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <select className="form-input">
                  <option>When?</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <span className="arrow">
                  <FaCaretDown />
                </span>
              </span>
            </div>
            <div className="banner-form-input">
              <span className="input-box travel-wrap">
                <span className="icon">
                  <FaFlag />
                </span>
                <select className="form-input">
                  <option>Travel Type</option>
                  <option>Cultural</option>
                  <option>Adventure</option>
                  <option>Historical</option>
                  <option>Seaside</option>
                  <option>Discovery</option>
                </select>
                <span className="arrow">
                  <FaCaretDown />
                </span>
              </span>
            </div>
            <div className="banner-form-input form-btn">
              <span className="input-box button-wrap">
                <button className="sec-btn">
                  <span>Find Now</span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </section>
      {/* ============================HOME ABOUT========================== */}
      <form className="side">
                        <img src= {home} className='imageSide'></img>
                        <div className="sidee">
                          <h5 className="about"> | About us</h5>
                          <h3 className="plan">
                            <small>Plan Your</small> <b>Trip</b>
                            <small>with</small> <b>Us</b>
                          </h3>
                          <p className="pone">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. A small river named Duden
                            flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your
                            mouth. Even the all-powerful Pointing has no control
                            about the blind texts it is an almost
                            unorthographic. Italic Mountains, she had a last
                            view back on the skyline
                          </p>

                          <button
                            className="sec-btn"
                            // onClick={() => {
                            //   navigate("/login");
                            // }}
                          >
                            Read More
                          </button>
                        </div>
                      </form>
    
    </>
  );
};

export default Home;