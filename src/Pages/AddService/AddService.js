import React, { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import './AddService.css';
import { toast, ToastContainer } from 'react-toastify';

const AddService = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Add Service Page Ms-Architect"
    }, [])

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
        fetch('https://ms-architect-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('msarc-token')}`
            },
            body: JSON.stringify(servieData)
        })
            .then(response => response.json())
            .then(response => {
                toast.success('Service Added Successfully', { autoClose: 2000, closeOnClick: true, })
                form.reset();
            })
            .catch(error => {
                console.error(error)
                toast.error('Sorry, Server Error', { autoClose: 2000, closeOnClick: true, })
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
            <ToastContainer closeOnClick />
        </div>
    );
};

export default AddService;