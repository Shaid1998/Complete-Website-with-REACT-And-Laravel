import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import axios from 'axios'

class TopBanner extends Component {
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/home/title')
    .then(function (response) {
      
      console.log(response.data);
    })
    .catch(function (error) {
      
      console.log(error);
    })
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
            <div className='topBannerOverLay'>
                <Container className='TopContent'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='topTitle'>Md. Shaidur Rahman</h1>
                            <h4 className='topShbTitle'>Web Developer</h4>
                            <Button variant='primary'>Learn More</Button>
                        </Col>
                    </Row>
                </Container>

            </div>

        </Container>
      </Fragment>
    )
  }
}

export default TopBanner