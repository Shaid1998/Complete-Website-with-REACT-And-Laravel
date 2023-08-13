import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class PageTop extends Component {
  render() {
        return ( 
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className='topPageOverLay'>
                        <Container className='TopContentPage'>
                            <Row>
                                <Col className='text-center'>
                                    <h4 className='topPageTitle'>{this.props.pagetitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default PageTop