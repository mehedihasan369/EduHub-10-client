import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../category/Category';
import CourseCard from './CourseCard';
import './Courses.css'

const Courses = () => {
    const data = useLoaderData();
    return (
        <div>
            <Row>
                <Col lg='2' className='d-none d-none d-lg-block bg-dark  p-0 left'><Category></Category></Col>
                <Col lg='10'> <Row>
                  {
                        data.map(data=>  <Col lg='4' md='6'> <CourseCard
                            key={data.id} data={data} ></CourseCard> </Col>)
                    }
                </Row>
                    
                    

                
                
                </Col>

            </Row>
            
           
        </div>
    );
};

export default Courses;