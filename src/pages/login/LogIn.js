import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


const LogIn = () => {
    return (
        <div className='d-lg-flex  '>
             <img src="Mobile login-bro.png" alt="" className='w-50 h-50 m-5 ps-5'/>

             <div className=' m-5 pt-5'>
             <h4>Not registered ?? Please sign up <Link to='/signup'>here.</Link></h4>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <h5>or <Button  className='m-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button></h5>
             </div>
        
        </div>
    );
};

export default LogIn;