import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import logo from '../../../logo.jpg';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row className='d-flex flex-md-row flex-column'>
                    <Col className='d-flex flex-column text-lg-center text-white text-decoration-none mt-5'>
                        <Link className='navbar-brand text-2xl' to="/">
                            <img className='logo-img' src="#" alt="" /><small className='h3'>Bizon's Learning</small>
                        </Link>
                        <Link className='footer-menu-item' to='/'>Home</Link>
                        <Link className='footer-menu-item' to='/courses'>Courses</Link>
                        <Link className='footer-menu-item' to='/blog'>Blog</Link>
                        <Link className='footer-menu-item' to='/faq'>FAQ</Link>

                    </Col>

                    <Col className='mt-5 d-flex flex-column' >
                        <Link className='footer-menu-item' to='/terms'>Terms of Use</Link>

                        <Link className='footer-menu-item' to='/privacy'>Privacy Policy</Link>

                        <div className='mt-5'>
                            <a className='social-icon' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a className='social-icon' href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a className='social-icon' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a className='social-icon' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a className='social-icon' href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                        </div>
                    </Col>

                </Row>
                <div className='hr-line'>
                    <hr />
                </div>
                <div>
                    <p className='my-4 h-2 text-white'>© Bizon's Learning, All rights reserved. </p>
                </div>

            </Container>

        </div>
    );
};

export default Footer;