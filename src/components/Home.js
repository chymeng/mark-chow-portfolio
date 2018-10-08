import React from 'react'
import profilePicture from '../assets/mark.jpg'
import Menu from './Menu'

const Home = () => {
  return (
    <div className="home">
      <div className="head">
        <img
          src={profilePicture}
          alt="Mark Chow professional headshot"
          className="profile-image"
        />
      </div>
      <div className="left">
        <div className="body">
          <h1 className="primary-heading">Mark Chow</h1>
          <h2 className="secondary-heading">
            Aspiring Marketer
            <br /> Looking To Spread Your
            <br /> Message
          </h2>
        </div>
        <div className="footer">
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Home
