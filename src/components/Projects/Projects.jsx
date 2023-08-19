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
        RestClient.GetRequest(AppURL.ProjectDetails).then(result=>{
          this.setState({projectData:result});
        })
      }
      
        
  render() {
    const MyList = this.state.projectData;
        const MyView = MyList.map(MyList=>{
          return <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img variant="top" src={MyList.small_image} />
                        <Card.Body>
                            <Card.Title className='serviceName'>{MyList.short_title}</Card.Title>
                            <Card.Text className='serviceDescription'>{MyList.short_description}</Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>
                </Col>
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