import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Navbar = () => {
  return (
    <Container>
      <Row style={{backgroundColor: 'darkgray'}}>
        <Col md={10}> 24 Hours bariivara.com support </Col>
        <Col md={1}> Login </Col>
        <Col md={1}> Signup </Col>
      </Row>
      <Row style={{backgroundColor: 'green'}}>
        <Col md={2}> Home </Col>
        <Col md={2}> About </Col>
        <Col md={2}> Contact Us </Col>
        <Col md={6} style={{textAlign: 'center'}} > Search </Col>
      </Row>
    </Container>
  )
}

export default Navbar
