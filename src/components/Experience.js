import React from 'react'
import { employers } from '../helpers/constants'

const Experience = () => {
  return (
    <div className="section-container">
      <div className="section">
        <p>
          My experience in the retail industry has enabled to me develop my
          communication and interpersonal skills.
        </p>
        <p>
          My years of experience have made me extremely comfortable working with
          personal and team targets. Working in the front stage of retail has
          also made me excellent at identifying the needs of customers and
          providing them with a positive customer experience.
        </p>
        <p>
          I have developed leadership skills through my experience in the retail
          industry, especially in taking control of stressful situations and
          supporting my co-workers. My leadership skills have also been shown
          through developing new staff in the processes that we follow in the
          workplace.
        </p>
        <h3> Past & Current Employers</h3>
        <div className="employers">
          {employers.map((x, index) => {
            return <img key={index} src={x.icon} alt={x.alt} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
