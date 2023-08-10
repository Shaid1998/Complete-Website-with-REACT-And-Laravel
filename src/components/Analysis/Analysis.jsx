import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Analysis extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col>
                    <h1>Bar Chart</h1>
                </Col>

                <Col>
                    <h1>Text</h1>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis