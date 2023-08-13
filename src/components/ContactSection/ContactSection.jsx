import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'


class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Quick Connect</h1>
              <Form>
                <Form.Group  >
                  <Form.Label>Your Name </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" /> 
                  </Form.Group>
                    <Form.Group  >
                      <Form.Label>Your Email </Form.Label>
                      <Form.Control type="email" placeholder="Enter Your email" /> 
                      </Form.Group>
                        <Form.Group  >
                          <Form.Label>Message  </Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
               </Form>

            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Discuss Now</h1>
              <p className="serviceDescription">
                  Dhaka, Bangladesh<br></br>
                  <FontAwesomeIcon icon={faEnvelope}  /> Email : shaidurrahman225@gmail.com<br></br>
                  <FontAwesomeIcon icon={faPhone}  /> Phone : +8801928466221<br></br>
              </p>

            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactSection