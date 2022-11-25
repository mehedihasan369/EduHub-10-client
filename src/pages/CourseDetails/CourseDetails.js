import React from 'react';
import {  Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf} from "react-icons/fa";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


import Category from '../category/Category';
const ref = React.createRef();

const CourseDetails = () => {
    const data = useLoaderData();
    return (
        <div>
                        
             <Row>
                <Col lg='2' className='d-none d-none d-lg-block bg-dark  p-0 left'><Category></Category></Col>
                <Col lg='10'>

                   <Container ref={ref} className='justify-content-center align-items-center  w-75'>
                   <h1>{data.name}    <Pdf targetRef={ref} filename="code-example.pdf">{({ toPdf }) => <Button onClick={toPdf}><FaFilePdf></FaFilePdf></Button>}</Pdf> </h1>  
                   
                   <img src={data.image} className='w-100 h-25'  alt=""  />
                   <p>{data.description}</p>
                   <h3>Topics</h3>
                   <ol>
                   {data.topics.map(topics =><li>{topics}</li>)}
                   </ol>
                   <Link to={`/premiumCourse/${data.id}`} className="outline-dark text-decoration-none btn btn-outline-dark fw-bold  " >Premium Access</Link>
                   </Container>
                   



                   
   
                </Col>

            </Row>
            
        </div>
    );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Container/>, rootElement);


export default CourseDetails;