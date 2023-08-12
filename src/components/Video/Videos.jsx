import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'

class Videos extends Component {
    constructor (){
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
        <h1 className='ServiceMainTitle'>Videos</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className='videoText'>
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

                <Col lg={6} md={6} sm={12} className='videoCard'>
                    <FontAwesomeIcon onClick={this.modalOpen} className='iconProject' icon={faVideoSlash}/>
                </Col>
            </Row> 
        </Container>
        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.modalClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default Videos