import React from 'react'
import { Link } from 'react-router-dom'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Notfound = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="notFound"/>
        <h1>LOOKS LIKE YOU`RE LOST BRO</h1>
        <p>We can`t find your page you are looking for</p>
        <Link to={'/'}>Back To Home{""}
        <span>
          <HiArrowNarrowRight></HiArrowNarrowRight>
        </span></Link>
      </div>
    </section>
  )
}

export default Notfound;