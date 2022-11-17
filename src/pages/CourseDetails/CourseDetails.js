import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Category from '../category/Category';

const CourseDetails = () => {
    return (
        <div>
             <Row>
                <Col lg='2' className='d-none d-lg-block border border-primary p-0 left'><Category></Category></Col>
                <Col lg='10'>
                    <h1>course details</h1>
                </Col>

            </Row>
            
        </div>
    );
};

export default CourseDetails;