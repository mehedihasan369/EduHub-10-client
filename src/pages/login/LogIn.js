import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';



const LogIn = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

 

      const [error, setError] = useState('');
      const { signIn, setLoading } = useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();
  
      const from = location.state?.from?.pathname || '/';


      const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
            })
            .catch(error => console.error(error))
          }


          const handleGithubSignIn = () => {
            providerLogin(githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = githubProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                const user = token.user;
                console.log(user);

              }).catch(error => console.error(error))
            }
  
      const handleSubmit = event => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
  
          signIn(email, password)
              .then(result => {
                  const user = result.user;
                  console.log(user);
                  form.reset();
                  setError('');
                  if(user.emailVerified){
                      navigate(from, {replace: true});
                  }
                  else{
                      toast.error('Your email is not verified. Please verify your email address.')
                  }
              })
              .catch(error => {
                  console.error(error)
                  setError(error.message);
              })
              .finally(() => {
                  setLoading(false);
              })
      }
    return (
        <div className='d-lg-flex  '>
             <img src="Mobile login-bro.png" alt="" className='w-50 h-50 m-5 ps-5'/>

             <div className=' m-5 pt-5'>
             <h4>Not registered ?? Please sign up <Link to='/signup'>here.</Link></h4>
             <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    <h5>or <Button onClick={handleGoogleSignIn} className='m-2' variant="outline-primary" > <FaGoogle></FaGoogle> Continue with Google</Button></h5>
    <h5>or <Button onClick={handleGithubSignIn} className='m-2' variant="outline-dark" > <FaGithub></FaGithub> Continue with Github</Button></h5>
             </div>
        
        </div>
    );
};

export default LogIn;