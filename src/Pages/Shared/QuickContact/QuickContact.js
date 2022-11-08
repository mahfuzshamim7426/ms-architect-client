import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './QuickContact.css'

const QuickContact = () => {
    return (
        <div className='quick-contact'>
            <div className="container">
                <div className="quick-contact-wrapper">
                    <div className="left-box">
                        <h4 className='section-subtitle text-white'>Contact Me</h4>
                    </div>
                    <div className="right-box">
                        <h2 className='section-title'>LET'S DISCUSS YOUR PROJECT</h2>
                        <p className='section-desc  text-white'>Fill out the form and our manager will contact you for consultation.</p>
                        <div className='form-box'>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    Your Name
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                                <InputGroup.Text id="basic-addon3">
                                    Your Query
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                        <div className='service-btn-wrapper'>
                            <button className='service-btn text-center mt-4 align-center'>Let&apos;s Talk</button>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default QuickContact;