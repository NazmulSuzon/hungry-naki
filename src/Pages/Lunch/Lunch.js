import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import lunch1 from '../../images/lunch/lunch1.png'
import lunch2 from '../../images/lunch/lunch2.png'
import lunch3 from '../../images/lunch/lunch3.png'
import lunch4 from '../../images/lunch/lunch4.png'
import lunch5 from '../../images/lunch/lunch5.png'
import lunch6 from '../../images/lunch/lunch6.png'
import './Lunch.css'
const Lunch = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 text-center lunch">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img  variant="top" src={lunch1} />
                            <Card.Body>
                                <Card.Title>Healthy Meal Plan</Card.Title>
                                <Card.Text>
                                    How We Dream About Our Future.
                                </Card.Text>
                                <h4>Price: $23.99</h4>
                                <Button className="bg-danger mt-2 text-light border-0 text-center">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img variant="top" src={lunch2} />
                            <Card.Body>
                                <Card.Title>Fried Chicken Bento</Card.Title>
                                <Card.Text>
                                How We Dream About Our Future.
                                </Card.Text>
                                <h4>Price: $9.99</h4>
                                <Button className="bg-danger mt-2 text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img variant="top" src={lunch3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                How We Dream About Our Future.
                                </Card.Text>
                                <h4>Price: $9.99</h4>
                                <Button className="bg-danger mt-2 text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 mt-2 mb-4 text-center lunch">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img  variant="top" src={lunch4} />
                            <Card.Body>
                                <Card.Title>Indian Lunch</Card.Title>
                                <Card.Text>
                                How We Dream About Our Future.
                                </Card.Text>
                                <h4>Price: $9.99</h4>
                                <Button className="bg-danger mt-2 text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img   variant="top" src={lunch5} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                How We Dream About Our Future.
                                </Card.Text>
                                <h4>Price: $9.99</h4>
                                <Button className="bg-danger mt-2 text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img  variant="top" src={lunch6} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                How We Dream About Our Future.
                                </Card.Text>
                                <h4>Price: $9.99</h4>
                                <Button className="bg-danger mt-2 text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Lunch;