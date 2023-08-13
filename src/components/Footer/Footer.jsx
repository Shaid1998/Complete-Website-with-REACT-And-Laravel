import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className='footerSection'>
                <Row>
                    <Col lg={3} md={6} sm={12} className='p-5 text-center'>
                        <h1 className='footerName'>Follow Us</h1>
                        <div className='socialContent'>
                            <a className='facebook social' href='#'><FontAwesomeIcon icon={faFacebook} size='2x' /> </a>
                            <a className='instagram social' href='#'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                            <a className='github social' href='#'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h1 className='footerName'>Contact Us</h1>
                        <p className='mail' ><FontAwesomeIcon icon={faEnvelope} /> Email: shaidurrahman225@gmail.com </p>
                        <p className='mail' ><FontAwesomeIcon icon={faPhone} /> Phone: +8801928466221 </p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h1 className='footerName'>Information</h1>
                        <a className='footerLink' href='#'>About Me</a> <br></br>
                        <a className='footerLink' href='#'>Portfolio</a>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h1 className='footerName'>Address</h1> 
                        <h4 className='footerLink'>Dhaka, Bangladesh</h4>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className='text-center copyrightsection'>
                <a>@copyright 2023 by Md. Shaidur Rahman, All Rights Reserved!</a>
            </Container>
        </Fragment>
    )
  }
}

export default Footer