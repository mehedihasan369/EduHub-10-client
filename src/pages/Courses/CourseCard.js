import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({data}) => {
    return (
        <div className='m-2'>
            
            <Card style={{ width: '18rem' ,height:'auto' }}>
            <Card.Img variant="top" src= {data.image} style={{ width: '18rem' ,height:'8rem' }}/>
     
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description.slice(0, 80)}...
        </Card.Text>
        <Link to={`/CourseDetails/${data.id}`} className=" text-decoration-none btn btn-outline-info fw-bold w-100 " >Course Details</Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseCard;