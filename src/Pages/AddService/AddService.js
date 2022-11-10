import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import './AddService.css';

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form?.name?.value;
        const image = form?.image?.value;
        const price = form?.price?.value;
        const description = form?.description?.value;
        const servieData = {
            name,
            image,
            price,
            description,
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
            body: JSON.stringify(servieData)
        })
            .then(response => response.json())
            .then(response => {
                //toast
                //clear form
            })
            .catch(error => {
                console.error(error)
                //toast
            });
    }

    return (
        <div className='form-container'>
            <h2 className='section-title'>Add Service</h2>
            <Form onSubmit={handleSubmit} className='form-items-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control className='form-item' name="name" type="input" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control className='form-item' name="image" type="input" placeholder="Enter image link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className='form-item' name="price" type="input" placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className='form-item' name="description" type="text-area" placeholder="Enter description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;