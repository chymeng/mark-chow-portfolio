import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../constants/constants'

const Projects = () => {
  return (
    <div className="section-container">
      <div className="section">
        {projects.map((x, index) => (
          <div key={index}>
            <Link to={`${x.to}`} target="_blank">
              <h2 className="secondary-heading">{x.title}</h2>
            </Link>
            <p>{x.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
