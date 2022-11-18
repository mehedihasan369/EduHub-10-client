import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({data}) => {
    return (
        <div className='m-2'>
            
            <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/category/${data.id}`} className="outline-dark text-decoration-none btn btn-outline-dark fw-bold w-100 " >Lets Start</Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseCard;