import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title, description, image, order, link}) {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={image} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={link} target="_blank">Check on Github</a>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard