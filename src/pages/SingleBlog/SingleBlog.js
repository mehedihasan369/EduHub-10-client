import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const data = useLoaderData();
    return (
        <Container className='align-items-center w-75'>
            <img src={data.image}  className='w-100 h-50' alt="" />
            <h3>{data.h1}</h3>
            <p>{data.description1}</p>
            <h3>{data.h2}</h3>
            <p>{data.description2}</p>

        </Container>
    );
};

export default SingleBlog;