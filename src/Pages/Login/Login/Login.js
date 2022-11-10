import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const { user, signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form?.email?.value;
        const password = form?.password?.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                // get jwt token
                fetch('https://ms-architect-server.vercel.app/jwt-creator', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('msarc-token', data.token);
                        form.reset();
                        navigate(from, { replace: true })
                        // navigate('/')
                    });

            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                // get jwt token
                fetch('https://ms-architect-server.vercel.app/jwt-creator', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('msarc-token', data.token);
                        navigate(from, { replace: true })
                        // navigate('/')
                    });

            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <Form onSubmit={handleSubmit} className='form-items-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='form-item' name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='form-item' name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <p>Don't Have an Account? <Link to='/signup'>Create a New Account</Link></p>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"><div className='d-flex align-items-center'><FaGoogle /><div className='ms-2'>Google Login</div></div></button>
        </div>
    );
};

export default Login;