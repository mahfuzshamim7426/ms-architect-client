import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import './MyReviews.css'
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';

const MyReviews = () => {
    const [reviewsData, setReviewsData] = useState([])
    const [editData, setEditData] = useState({})
    const [reviewClean, setReviewClean] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "My Reviews Page Ms-Architect"
    }, [])

    // ===========fetch all reviews of an user================
    useEffect(() => {
        if (user?.email) {
            fetch(`https://ms-architect-server.vercel.app/reviews/${user?.email}`, {
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
    }, [user, reviewClean])

    const handleDeleteReview = (ID) => {
        console.log('ID', ID)
        fetch(`https://ms-architect-server.vercel.app/reviews/${ID}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
        })
            .then(response => {
                toast.success('Review Deleted Successfully', { autoClose: 2000, closeOnClick: true, })
                setReviewClean(!reviewClean)
            })
            .catch(error => {
                toast.error('Sorry, Server Error', { autoClose: 2000, closeOnClick: true, })
            });
    }

    const handleEditReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form?.name?.value;
        const text = form?.text?.value;
        const rating = form?.rating?.value;

        const reviewInputData = {
            name,
            text,
            rating,
        }
        console.log('reviewInputData', reviewInputData)

        fetch(`https://ms-architect-server.vercel.app/reviews/${editData?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
            body: JSON.stringify(reviewInputData)
        })
            .then(response => {
                setModalShow(false)
                toast.success('Review Updated Successfully', { autoClose: 2000, closeOnClick: true, })
            })
            .catch(error => {
                toast.error('Sorry, Server Error', { autoClose: 2000, closeOnClick: true, })
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
                                            <Card.Title className='section-subtitle'>Name: {singleReview?.name}</Card.Title>
                                            <Card.Title className='section-subtitle'>Service: {singleReview?.serviceName}</Card.Title>
                                            <Card.Title className='header-minititle'>Rating: {singleReview?.rating}</Card.Title>

                                            <Card.Text className='section-desc'>
                                                {singleReview?.text}
                                            </Card.Text>
                                        </Card.Body>
                                        <div className='service-btn-wrapper'>
                                            <div className='d-flex justify-content-between'>
                                                <button
                                                    onClick={() => {
                                                        handleDeleteReview(singleReview?._id)
                                                    }}
                                                    className='service-btn text-center mt-4 align-center'>Delete Review</button>
                                                <button
                                                    onClick={() => {
                                                        setModalShow(true)
                                                        setEditData(singleReview)
                                                    }}
                                                    className='service-btn text-center mt-4 align-center'>Edit Review</button>
                                            </div>
                                            <ToastContainer closeOnClick />
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
                {reviewsData && reviewsData?.length === 0 &&
                    <div className='text-center py-5'>
                        <h3 className='py-5'>No Review Added</h3>
                    </div>
                }
            </div>
        </div>
    );

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='section-subtitle'>
                        Edit Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleEditReview}>
                        <div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Name</label>
                                <input defaultValue={editData?.name} name="name" className="form-control" type="text" id="formFile" />
                            </div>
                            <div className="mb-3">
                                <label for="formText" className="form-label">Review Text</label>
                                <input defaultValue={editData?.text} name="text" className="form-control" type="text" id="formText" />
                            </div>
                            <select
                                name='rating'
                                defaultValue={editData?.rating}
                                className="form-select" aria-label="Default select example">
                                <option selected>Rating number</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className='service-btn-wrapper'>
                            <button
                                type='subit'
                                className='service-btn text-center mt-4 align-center'>Update</button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        );
    }
};


export default MyReviews;