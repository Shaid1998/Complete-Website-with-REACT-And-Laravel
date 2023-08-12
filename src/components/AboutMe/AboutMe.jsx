import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png'

class AboutMe extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='ServiceMainTitle'>ABOUT ME</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='AboutImage'>
                        <img className='aboutImg' src={face} />
                    </div>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <div className='aboutMeBody'>
                        <h2 className='aboutMeDetails'>Hi There, I'm</h2>
                        <h2 className='aboutMeTitle'>Md. Shaidur Rahman</h2>
                        <h3 className='aboutMeDetails'>Work as <span>Developer</span></h3>
                    </div>
                
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutMe