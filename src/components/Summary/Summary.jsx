import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="SummaryFixedBanner p-0">
                    <div className='SummaryBannerOverLay'>
                        <Container className='text-center'>
                            <Row>
                                <Col className='text-center' lg={8} md={6} sm={12}>
                                    <Row className='countSelection'>
                                        <Col>
                                            <h1 className='countNumber'>15+</h1>
                                            <h4 className='countTitle'>Projects Completed</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>


                                        <Col>
                                            <h1 className='countNumber'>50+</h1>
                                            <h4 className='countTitle'>Course Completed</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>


                                        <Col>
                                            <h1 className='countNumber'>8+</h1>
                                            <h4 className='countTitle'>Hours Daily Spending on Development</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>

                                </Col>

                                <Col className='text-center' lg={8} md={6} sm={12}>
                                
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