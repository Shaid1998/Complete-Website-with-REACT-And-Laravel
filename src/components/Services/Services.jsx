import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designicon from '../../asset/image/design.png'
import ecomerceicon from '../../asset/image/ecommerce.png'
import webicon from '../../asset/image/web.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import RestClient from '../../RestAPI/RestClient.js'
import AppURL from '../../RestAPI/AppURL.js'

class Services extends Component {
  constructor(){
    super();
    this.state={
      serviceData:[]
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppURL.Services).then(result=>{
      this.setState({serviceData:result});
    })
  }
  render() {
    const MyList = this.state.serviceData;
    const MyView = MyList.map(MyList=>{
      return <Col lg={4} md={6} sm={12}>
                <div className='serviceCard text-center'>
                  <img className='ecomerceicon' src={MyList.service_logo} />
                  <h1 className='serviceName'>{MyList.service_name}</h1>
                  <p className='serviceDescription'>{MyList.service_description}</p>
                </div>
              </Col >
    })
    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='ServiceMainTitle'>MY SERVICES</h1>
            <div className='bottom'></div>
            <Row>
                {MyView}
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services