import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designicon from '../../asset/image/design.png'
import ecomerceicon from '../../asset/image/ecommerce.png'
import webicon from '../../asset/image/web.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className='ecomerceicon' src={ecomerceicon} />
                        <h1 className='serviceName'>Ecommerce</h1>
                        <p className='serviceDescription'>I will design and develop ecommerce online store website. </p>
                    </div>
                </Col >
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className='designicon' src={designicon} />
                        <h1 className='serviceName'>Web Development</h1>
                        <p className='serviceDescription'>Clean and fresh issue free code to make your website dynamic perfectly. </p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className='webicon' src={webicon} />
                        <h1 className='serviceName'>Web Design</h1>
                        <p className='serviceDescription'>Qualified Web Design and Attractive effects which catches visitor's Eye. </p>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services