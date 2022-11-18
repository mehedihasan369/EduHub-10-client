import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../category/Category';

const CourseDetails = () => {
    const data = useLoaderData();
    return (
        <div>
             <Row>
                <Col lg='2' className='d-none d-lg-block border border-primary p-0 left'><Category></Category></Col>
                <Col lg='10'>
                    <h1>course details {data.id} </h1>
                </Col>

            </Row>
            
        </div>
    );
};

export default CourseDetails;