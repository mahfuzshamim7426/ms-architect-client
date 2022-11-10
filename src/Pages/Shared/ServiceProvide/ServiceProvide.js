import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ServiceProvide.css'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const ServiceProvide = ({ sectionTitle, allServices }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalImage, setModalImage] = React.useState('');
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
                                        <Card.Img
                                            onClick={() => {
                                                setModalShow(true)
                                                setModalImage(service?.image)
                                            }}
                                            variant="top" src={service?.image} />
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
                <ServiceimageModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    );

    function ServiceimageModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={modalImage} alt="image" />
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
};

export default ServiceProvide;