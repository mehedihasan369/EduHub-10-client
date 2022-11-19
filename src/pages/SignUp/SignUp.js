import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
    .then( result => {
        const user = result.user;
        console.log(user);
        form.reset();
    })
    .catch( e => console.error(e));
}
    return (
        <div className='d-lg-flex  '>
           <img src="./Mobile login-pana.png" alt="" className='w-50 h-50 m-5 ps-5'/>
            <div className=' m-5 pt-5'>
                <h4>Already registered ?? Then go to <Link to='/login'>login.</Link></h4>
                <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>



 
     


    <h5>or <Button  className='m-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button></h5>

            </div>
        </div>
    );
};

export default SignUp;