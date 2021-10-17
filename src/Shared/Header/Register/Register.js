import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="mx-auto border border-danger login-background d-flex justify-content-center align-items-center">
            <div>
            <Form>
                <h1 className="mb-4 text-danger">Please Registration</h1>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" required/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" required/>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                <Button className="mb-2" variant="danger" type="submit">
                    Registration
                </Button>
                <br />
                <Link to="/login" className="fs-4 create-account">Already Have An Account?</Link>
            </Form>
            </div>
        </div>
    );
};

export default Register;