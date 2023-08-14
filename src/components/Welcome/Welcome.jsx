import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import one from '../../asset/image/page1.png'
import two from '../../asset/image/page2.png'
import three from '../../asset/image/page3.png'
import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';

export class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <div className='intro-area-top'>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className='text-center section-title'>
                                    <div className='intro-area-inner-2'>
                                        <h4 className='sub-title double-line'>Welcome</h4>
                                        <h2 className='maintitle'>An Commiting Developer</h2>
                                        <Container className='text-center'>
                                            <Row>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={one} />
                                                    <h1 className='serviceName'>Friendly</h1>
                                                    <p className='serviceDescription'>lorem ipsum doller</p>
                                                </Col>

                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={two} />
                                                    <h1 className='serviceName'>Develop the way you want</h1>
                                                    <p className='serviceDescription'>lorem ipsum doller</p>
                                                </Col>

                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={three} />
                                                    <h1 className='serviceName'>best service</h1>
                                                    <p className='serviceDescription'>lorem ipsum doller</p>
                                                </Col>
                                            </Row>
                                            <Row className="intro-footer bg-base text-center mt-5">
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={imgone} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="text-justify homeIntro">Development</h5>
                                                            <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={imgtwo} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="text-justify homeIntro">Web Design</h5>
                                                            <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={imgthree} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="text-justify homeIntro">Ecommerce</h5>
                                                            <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                                        </Col>
                                                    </Row>
                                                 </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Welcome