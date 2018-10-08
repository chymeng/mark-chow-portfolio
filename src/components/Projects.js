import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../constants/constants'

const Projects = () => {
  return (
    <Fragment>
      {projects.map((x, index) => (
        <div key={index}>
          <Link to={x.to}>{x.title}</Link>
          <p>{x.desc}</p>
        </div>
      ))}
    </Fragment>
  )
}

export default Projects
