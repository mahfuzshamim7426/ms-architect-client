import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const [reviewsData, setReviewsData] = useState([])
    const singleService = useLoaderData()
    let { id } = useParams();
    console.log('id', id)

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/service-reviews/${id}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log('data', data)
                    setReviewsData(data)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [id])

    return (
        <div className='service-details'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='section-title'>Service Details</h3>
                </div>
                <Row xs={1} md={1} className="g-4">
                    {singleService &&
                        <Col >
                            <Card>
                                <Card.Img variant="top" src={singleService?.image} />
                                <Card.Body>
                                    <Card.Title className='section-subtitle'>{singleService?.name}</Card.Title>
                                    <Card.Title className='header-minititle'>Price: ${singleService?.price}</Card.Title>
                                    <Card.Text className='section-desc'>
                                        {singleService?.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                </Row>
            </div>

            <div>
                <Row xs={1} md={3} className="g-4">
                    {reviewsData && reviewsData?.length > 0 &&
                        reviewsData?.map((singleReview, index) => (
                            <Col key={index}>
                                <Card>
                                    <Card.Img variant="top" src={singleReview?.image} />
                                    <Card.Body>
                                        <Card.Title className='section-subtitle'>{singleReview?.name}</Card.Title>
                                        <Card.Title className='header-minititle'>Rating: {singleReview?.rating}</Card.Title>

                                        <Card.Text className='section-desc'>
                                            {singleReview?.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
};

export default ServiceDetails;