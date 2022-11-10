import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import './MyReviews.css'

const MyReviews = () => {
    const [reviewsData, setReviewsData] = useState([])
    const { user } = useContext(AuthContext);

    // ===========fetch all reviews of an user================
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/reviews/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    setReviewsData(data)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [user])

    const handleDeleteReview = (ID) => {
        console.log('ID', ID)
        fetch(`http://localhost:5000/reviews/${ID}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                //toast
            })
            .catch(error => {
                console.error(error)
                //toast
            });
    }

    return (
        <div className='my-reviews'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='section-title'>My All Reviews</h3>
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
                                        <div className='service-btn-wrapper'>
                                            <button
                                                onClick={() => {
                                                    handleDeleteReview(singleReview?._id)
                                                }}
                                                className='service-btn text-center mt-4 align-center'>Delete Review</button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;