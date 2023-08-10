
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class Summary extends Component {
     render() {
          return ( 
              <Fragment>   
                <Container fluid={true} className="SummaryFixedBanner p-0" >
                    <div className='SummaryBannerOverLay'>
                        <Container className="text-center">
                            <Row>
                                <Col className="countSection" lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col>
                                            <h1 className='countNumber'>15+</h1>
                                            <h4 className='countTitle'>Projects Completed</h4>
                                            <hr className='bg-white w-25'/>
                                        </Col>

                                        <Col>
                                            <h1 className='countNumber'>50+</h1>
                                            <h4 className='countTitle'>Course Completed</h4>
                                            <hr className='bg-white w-25'/>
                                        </Col>
                                        <Col>
                                            <h1 className='countNumber'>8+</h1>
                                            <h4 className='countTitle'>Hours Daily Spending on Development</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard" >
                                        <Card.Body>
                                            <Card.Title className="cardTitle">What I Have Achieved</Card.Title>
                                            <Card.Text>
                                            <p className="cardSubTitle text-justify"> Requirment Gathering </p>
                                            <p className="cardSubTitle text-justify"> System Analysis </p>
                                            <p className="cardSubTitle text-justify"> Coding Testing </p>
                                            <p className="cardSubTitle text-justify"> Implementation </p>
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