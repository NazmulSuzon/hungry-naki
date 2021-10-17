import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import breakfast1 from '../../images/Breakfast/breakfast1.png'
import breakfast2 from '../../images/Breakfast/breakfast2.png'
import breakfast3 from '../../images/Breakfast/breakfast3.png'
import breakfast4 from '../../images/Breakfast/breakfast4.png'
import breakfast5 from '../../images/Breakfast/breakfast5.png'
import breakfast6 from '../../images/Breakfast/breakfast6.png'
import './Breakfast.css'

const Breakfast = () => {
    return (
        <div >
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img  variant="top" src={breakfast1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="bg-danger text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img variant="top" src={breakfast2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="bg-danger text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img variant="top" src={breakfast3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="bg-danger text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col >
                        <Card className="card-box">
                            <Card.Img  variant="top" src={breakfast4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="bg-danger text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img variant="top" src={breakfast5} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="bg-danger text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card className="card-box">
                            <Card.Img variant="top" src={breakfast6} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="bg-danger text-light border-0">Purchase</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Breakfast;