import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../category/Category';

const CourseDetails = () => {
    const data = useLoaderData();
    return (
        <div>
             <Row>
                <Col lg='2' className='d-none d-lg-block border border-primary p-0 left'><Category></Category></Col>
                <Col lg='10'>
                    <h1>course details {data.id} </h1>
                    <Link to={`/premiumCourse/:id`} className="outline-dark text-decoration-none btn btn-outline-dark fw-bold w-100 " >Premium Access</Link>
   
                </Col>

            </Row>
            
        </div>
    );
};

export default CourseDetails;