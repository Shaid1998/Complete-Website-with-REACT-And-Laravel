import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient.js'
import AppURL from '../../RestAPI/AppURL.js'

export class Projects extends Component {
    constructor(){
        super();
        this.state={
          projectData:[]
        }
      }
      componentDidMount(){
        RestClient.GetRequest(AppURL.ProjectHome).then(result=>{
          this.setState({projectData:result});
        }).catch(error=>{
          this.setState({title:'???',subtitle:'???'})
        })
      }
      
        
  render() {
    const MyList = this.state.projectData;
        const MyView = MyList.map(MyList=>{
          return <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                      <img className='ecomerceicon' src={MyList.small_image} />
                      <h1 className='serviceName'>{MyList.short_title}</h1>
                      <p className='serviceDescription'>{MyList.short_description}</p>
                      <Button className='button button-primary'>More</Button>
                    </div>
                  </Col >
        })
    return (
      <Fragment> 
        <Container className='text-center'>
            <h1 className='ServiceMainTitle'>Projects</h1>
            <div className='bottom'></div>
            <Row>
              {MyView}
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Projects