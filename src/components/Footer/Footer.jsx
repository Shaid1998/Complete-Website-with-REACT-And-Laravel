import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
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

                    <Col lg={3} md={6} sm={12}>
                        <h1 className='footerName'>Contact Us</h1>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <h1 className='footerName'>Information</h1>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <h1 className='footerName'>Address</h1> 
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Footer