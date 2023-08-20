import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient.js'
import AppURL from '../../RestAPI/AppURL.js'

class Analysis extends Component {
  constructor(){
    super();

    this.state={
      ChartData:[]
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppURL.Chart).then(result=>{
      this.setState({ChartData:result});
    }).catch(error=>{
      this.setState({title:'???',subtitle:'???'})
    })
  }
  render() {
    var blue='#051b35';
    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='ServiceMainTitle'>TECHNOLOGY</h1>
            <div className='bottom'></div>
            <Row>
                <Col style={{width:'50%' , height:'350px'}} lg={6} md={12} sm={12}>
                  <ResponsiveContainer>
                      <BarChart width={100} height={350} data={this.state.data}>
                        <XAxis dataKey={"Technology"}/>
                        <Tooltip />
                        <Bar dataKey="Skilled" fill={blue}>

                        </Bar>

                        

                      </BarChart>
                   </ResponsiveContainer>
                </Col>

                <Col lg={6} md={12} sm={12}>
                    <p className="text-justify serviceDescription"> As a recent graduate with a Bachelor of Science in Software
                        Engineering from Daffodil International University, I possess a strong
                        foundation in programming languages, including PHP, JavaScript, and
                        SQL. Although I may be an entry-level candidate, I am confident that
                        my skills and enthusiasm make me an excellent candidate for this
                        position.<br></br><br></br>

                        During my time at Daffodil International University University, I
                        completed multiple projects that enhanced my understanding of web
                        development and PHP. In one of my major projects.<br></br><br></br>

                        Collaboration and adaptability are two essential qualities that I have
                        refined through group projects  and I am eager to apply these skills
                        in a professional setting. Furthermore, I am continuously seeking to
                        expand my skill set and stay current with industry trends by
                        participating in coding challenges .<br></br><br></br>
                      </p>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis