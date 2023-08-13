import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <h1>Follow Us</h1>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <h1>Contact Us</h1>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <h1>Information</h1>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <h1>Address</h1> 
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Footer