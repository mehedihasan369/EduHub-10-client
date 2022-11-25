import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
    const data = useLoaderData();
    return (
        <div>
                             <Container  className='justify-content-center align-items-center  w-75'>
                   <h1>{data.name}    </h1>  
                   
                   <img src={data.image} className='w-100 h-25'  alt=""  />
                   <p>{data.description}</p>
                   <h3>Topics</h3>
                   <ol>
                   {data.topics.map(topics =><li>{topics}</li>)}
                   </ol>
   
                   </Container>
        </div>
    );
};

export default PremiumCourse;