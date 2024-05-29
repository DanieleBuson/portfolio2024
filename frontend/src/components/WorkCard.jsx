import React from 'react';
import { Col } from 'react-bootstrap';

function WorkCard({ title, employer, place, duration, description, image }) {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={image} />
        <div className='proj-txtx'>
          <h4>{title} - {employer}</h4>
          <span>{place}, {duration}</span>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
}

export default WorkCard;