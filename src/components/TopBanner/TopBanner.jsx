import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import axios from 'axios'
import RestClient from '../../RestAPI/RestClient.js'
import AppURL from '../../RestAPI/AppURL.js'

class TopBanner extends Component {
  constructor(){
    super();
    this.state={
      title:'.......',
      subtitle:'.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppURL.HomeTitle).then(result=>{
      this.setState({title:result[0]['home_title'],subtitle:result[0]['home_sub_title']});
    }).catch(error=>{
      this.setState({title:'???',subtitle:'???'})
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
                            <h1 className='topTitle'>{this.state.title}</h1>
                            <h4 className='topShbTitle'>{this.state.subtitle}</h4>
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