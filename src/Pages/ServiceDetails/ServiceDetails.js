import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './ServiceDetails.css'
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const ServiceDetails = () => {
    const [reviewsData, setReviewsData] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const singleService = useLoaderData()
    const { user } = useContext(AuthContext);

    let { id } = useParams();

    useEffect(() => {
        document.title = "Details Service Page Ms-Architect"
    }, [])

    useEffect(() => {
        if (id) {
            fetch(`https://ms-architect-server.vercel.app/service-reviews/${id}`, {
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

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form?.name?.value;
        const image = form?.image?.value;
        const text = form?.text?.value;
        const rating = form?.rating?.value;
        const serviceId = id;
        const serviceName = singleService?.name;
        const email = user?.email;

        const reviewInputData = {
            name,
            image,
            text,
            rating,
            serviceId,
            serviceName,
            email,
        }

        fetch(`https://ms-architect-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
            body: JSON.stringify(reviewInputData)
        })
            .then(response => {
                setModalShow(false)
                toast.success('Review Created Successfully', { autoClose: 2000, closeOnClick: true, })
            })
            .catch(error => {
                toast.error('Sorry, Server Error', { autoClose: 2000, closeOnClick: true, })
            });
    }

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

                <div className='service-btn-wrapper mt-5'>
                    {user && user?.email ?
                        <button
                            onClick={() => {
                                setModalShow(true)
                            }}
                            className='service-btn text-center mt-4 align-center'>Create Reviews</button>
                        :
                        <button
                            onClick={() => {
                                setLoginModalShow(true)
                            }}
                            className='service-btn text-center mt-4 align-center'>Create Reviews</button>
                    }
                </div>

                <div className='mt-5'>
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
                <CreateReviewModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <LoginDirectModal
                    show={loginModalShow}
                    onHide={() => setLoginModalShow(false)}
                />
                <ToastContainer closeOnClick />
            </div>
        </div>
    );

    function CreateReviewModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='section-subtitle'>
                        Create Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleAddReview}>
                        <div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Name</label>
                                <input name="name" class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Image</label>
                                <input name="image" class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formText" class="form-label">Review Text</label>
                                <input name="text" class="form-control" type="text" id="formText" />
                            </div>
                            <select
                                name='rating'
                                class="form-select" aria-label="Default select example">
                                <option selected>Rating number</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                            <div className='service-btn-wrapper'>
                                <button
                                    type='submit'
                                    className='service-btn text-center mt-4 align-center'>Create Review</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
    function LoginDirectModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='section-subtitle'>
                        Please Login To Add A Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><Link to='/login'>Go to Login Page</Link></p>
                </Modal.Body>
            </Modal>
        );
    }
};

export default ServiceDetails;