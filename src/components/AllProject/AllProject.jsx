import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

class AllProject extends Component {
  render() {
    return (
        <Fragment> 
            <Container className='text-center'>
                <h1 className='ServiceMainTitle'>Projects</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='projectCard'>
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/web-template-website-design-concept_53876-125608.jpg?w=826&t=st=1691833008~exp=1691833608~hmac=1ac1cd2e300872dbe350de76ed389106d60d94a26f637b0bfefd311bfa57127c" />
                            <Card.Body>
                                <Card.Title className='serviceName'>Complete Website with REACT Js and Laravel</Card.Title>
                                <Card.Text className='serviceDescription'>
                                    This system is built with the help of Laravel framework. React Js are used to design the front. Laravel is used as the backend. MySQL is used as the database. I’m currently working under this project, and working day by day processes based on agile SDLC model.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className='projectCard'>
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/code-coding-programming-technology-technical-concept_53876-120436.jpg?w=996&t=st=1691833155~exp=1691833755~hmac=2c308cd8e5d5dd7160d72f2d681beb19df4bce64d244336a50e0bbac2e57c853" />
                            <Card.Body>
                                <Card.Title className='serviceName'>Hostel Management Full System With Laravel</Card.Title>
                                <Card.Text className='serviceDescription'>
                                    It is a multivendor e-commerce site, there will be many vendors and many users. Separate login system for each. Admin, Vendor, User are the stockholders of this system. This system is built with the help of Laravel framework. HTML, CSS, PHP are used to design the front.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className='projectCard'>
                            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/php-programming-code-abstract-technology-background_272306-152.jpg?w=1060" />
                            <Card.Body>
                                <Card.Title className='serviceName'>laravel multivendor ecommerce full project</Card.Title>
                                <Card.Text className='serviceDescription'>
                                    It is a multivendor e-commerce site, there will be many vendors and many users. Separate login system for each. Admin, Vendor, User are the stockholders of this system. This system is built with the help of Laravel framework. HTML, CSS, PHP are used to design the front      . 
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default AllProject