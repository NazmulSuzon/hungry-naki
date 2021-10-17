import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    return (
        <div className="mx-auto border border-danger login-background d-flex justify-content-center align-items-center">
            <div>
            <Form className="login-form">
                <h1 className="mb-4 text-danger">Please Login</h1>
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
                <Button variant="primary" type="submit" className="bg-danger border-0">
                    Login
                </Button>
                <br />
                <br />
                <Button onClick={signInUsingGoogle} variant="primary" className="bg-danger border-0">
                    Google Sign In
                </Button>
                
                <p className="fs-5 text-dark my-2">---------------------------------------New To <span className="text-danger">Hungry Naki</span>?---------------------------------------</p>
                <Link to="/register" className=" fs-4 create-account">Create Your Account</Link>
            </Form>
            </div>
        </div>
    );
};

export default Login;