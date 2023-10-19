import React from 'react'
import home from '../assets/home2.png'
// import {Link} from "react-router-dom"

function About() {
  return (
    // <Link to={'/App'}>
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
      // </Link>
  )
}

export default About