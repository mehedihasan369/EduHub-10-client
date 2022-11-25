import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    const data = useLoaderData();
    return (
        <div>
             <div className='d-flex bg-info align-items-center'>
            <div className='w-50 p-5 text-dark'>
                <h1>EduHub Blogs</h1>
                <h4>Freedom to learn</h4>
            
                <h4>Everywhere, always</h4>
            
            </div>
            <img src="./Blog post-amico.png " alt="" className='w-50 p-5'/>
           </div>

           <Row>
                  {
                        data.map(data=>  <Col lg='6' md='6'> 

<>
      <Card className='my-4 m-4 p-4'>
        <Card.Img variant="top" style={{height:'18rem' }} src={data.image} />
        <Card.Body>
          <Card.Text>
           <h3>{data.title}</h3>
          </Card.Text>
         <Link to ={`/blogs/${data.id}`} className='btn btn-outline-primary fw-semibold' >Read more..</Link>
        </Card.Body>
      </Card>

    </>
                         </Col>)
                    }
                </Row>

        </div>
    );
};

export default Blogs;