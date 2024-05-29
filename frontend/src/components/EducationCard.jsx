import React from 'react';
import { Col } from 'react-bootstrap';

function EducationCard({ school, place, duration, image }) {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={image} />
        <div className='proj-txtx'>
          <h4>{school}</h4>
          <span>{place}, {duration}</span>
        </div>
      </div>
    </Col>
  );
}

export default EducationCard;