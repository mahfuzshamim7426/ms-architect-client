import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ServiceProvide.css'
const ServiceProvide = () => {
    return (
        <div className="service-section">
            <div className='container'>
                <div>
                    <h2 className='section-title  text-center fs-3 mb-5'>Services</h2>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Col key={index}>
                                <Card>
                                    <Card.Img variant="top" src="./images/cover.jpg" />
                                    <Card.Body>
                                        <Card.Title className='section-subtitle'>Card title</Card.Title>
                                        <Card.Text className='section-desc'>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className='service-btn-wrapper'>
                        <button className='service-btn text-center mt-4 align-center'>See All Services</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;