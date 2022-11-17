import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Category from '../category/Category';
import CourseCard from './CourseCard';
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <Row>
                <Col lg='2' className='d-none d-none d-lg-block border border-primary p-0 left'><Category></Category></Col>
                <Col lg='10'> <CourseCard></CourseCard></Col>

            </Row>
            
           
        </div>
    );
};

export default Courses;