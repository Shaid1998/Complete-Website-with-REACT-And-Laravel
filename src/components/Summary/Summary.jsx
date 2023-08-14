
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import {faGlobe, faCheckSquare, faLaptop, faStar} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component {
    render() {
        return (
            <Fragment>            
                <Container fluid={true} className="SummaryFixedBanner p-0" >
                    <div className="SummaryBannerOverLay">
                        <Container className="mt-5 text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col  lg={4} md={6} sm={12} >
                                            <FontAwesomeIcon className='iconProject' icon={faGlobe}/>
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={15}>
                                                    {({countUpRef, start})=>(
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                +
                                            </h1>
                                            <h4 className='countTitle'>Projects Completed At All Resent Past</h4>
                                            <hr className='bg-black w-25'/>
                                        </Col>

                                        <Col  lg={4} md={6} sm={12} className=' text-center'>
                                            <FontAwesomeIcon className='iconProject' icon={faLaptop}/>
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={50}>
                                                    {({countUpRef, start})=>(
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                +
                                            </h1>
                                            <h4 className='countTitle'>Course Completed From University and Online</h4>
                                            <hr className='bg-black w-25'/>
                                        </Col>

                                        <Col  lg={4} md={6} sm={12} className=' text-center'>
                                            <FontAwesomeIcon className='iconProject' icon={faStar}/>
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={7551}>
                                                    {({countUpRef, start})=>(
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                +
                                            </h1>
                                            <h4 className='countTitle'>Hours Spending on Development</h4>
                                            <hr className="bg-black w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12} className=' text-center'>
                                    <Card className="workCard" >
                                        <Card.Body>
                                            <Card.Title className="cardTitle">What I Have Achieved</Card.Title>
                                            <Card.Text>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> Requirment Gathering </p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> System Analysis </p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> Coding Testing </p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className='iconBullent' icon={faCheckSquare}/> Implementation </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container> 
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Summary