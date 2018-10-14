import React from 'react'
import Svg from '../components/Svg'
import { contact } from '../helpers/constants'

const About = () => {
  return (
    <div className="section-container">
      <div className="section">
        <p>
          My name is Mark Chow and I currently reside in Melbourne, Australia.
        </p>
        <p>
          Currently I am in my penultimate year of my Bachelor’s degree (Major
          in Marketing with a minor in Media and Communications) at The Royal
          Melbourne Institute of Technology.
        </p>
        <p>
          I am looking for opportunities within the marketing industry. The
          opportunity to contribute to your business’ success would be an
          honour.
        </p>
        <div className="social-links">
          {contact.map((x, index) => {
            return <Svg key={index} icon={x.icon} a={x.a} />
          })}
        </div>
        <a
          href="https://drive.google.com/file/d/1Ll6cAQ6a42nKyyATuoXIbaeGIxAlaDZ9/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default About
