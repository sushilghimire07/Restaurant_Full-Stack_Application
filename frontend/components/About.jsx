import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'

export const About = () => {
  return (
    <section className='about' id='about'>

        <div className='container'>
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we are serious about is food</p>
                </div>
                <p className="mid">At Sushil's Kitchen, we believe that good food brings people together.
                    Our chefs prepare every meal with fresh ingredients, a lot of love, and true dedication.
                    From traditional Nepali flavors to international dishes, we serve food that feels like home.
                    Quality, taste, and fast service are what we promise every day. </p>


                <Link to="/menu">
                
                        OUR MENU
                            <span><HiOutlineArrowRight/></span>
                          </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>

    </section>
  )
}
