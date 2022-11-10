import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ServiceProvide.css'
import { Link } from 'react-router-dom';

const ServiceProvide = ({ sectionTitle, allServices }) => {
    return (
        <div className="service-section">
            <div className='container'>
                <div>
                    <h2 className='section-title  text-center fs-3 mb-5'>{sectionTitle}</h2>
                    <Row xs={1} md={3} className="g-4">
                        {allServices && allServices?.length > 0 &&
                            allServices?.map((service, index) => (
                                <Col key={index}>
                                    <Card>
                                        <Card.Img variant="top" src={service?.image} />
                                        <Card.Body>
                                            <Card.Title className='section-subtitle'>{service?.name}</Card.Title>
                                            <Card.Title className='header-minititle'>Price: ${service?.price}</Card.Title>
                                            <Card.Text className='section-desc'>
                                                <div className='text-wrapper'>
                                                    {service?.description}
                                                </div>...
                                            </Card.Text>
                                            <div className='service-btn-wrapper'>
                                                <Link className='nav-link' to={`/services/${service?._id}`}>
                                                    <button className='service-btn text-center mt-4 align-center'>See Details</button>
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                    {sectionTitle === 'Services' &&
                        <div className='service-btn-wrapper'>
                            <Link className='nav-link' to="/services">
                                <button className='service-btn text-center mt-4 align-center'>See All Services</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;