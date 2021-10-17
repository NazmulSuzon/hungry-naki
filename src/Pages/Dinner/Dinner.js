import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import dinner1 from '../../images/Dinner/dinner1.png'
import dinner2 from '../../images/Dinner/dinner2.png'
import dinner3 from '../../images/Dinner/dinner3.png'
import dinner4 from '../../images/Dinner/dinner4.png'
import dinner5 from '../../images/Dinner/dinner5.png'
import dinner6 from '../../images/Dinner/dinner6.png'

const Dinner = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 text-center lunch">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img  variant="top" src={dinner1} />
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
                            <Card.Img variant="top" src={dinner2} />
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
                            <Card.Img variant="top" src={dinner3} />
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
            <Row xs={1} md={2} lg={3} className="g-4 my-2 text-center lunch">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img  variant="top" src={dinner4} />
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
                            <Card.Img   variant="top" src={dinner5} />
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
                            <Card.Img  variant="top" src={dinner6} />
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

export default Dinner;