import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Row>
          <Col md={3} style={{backgroundColor: '#85821fd6'}}>
            OSearxh
          </Col>
          <Col md={9} style={{ backgroundColor: 'lightblue' }}>
            <Row>
              <Col md={6}>Featured Adds</Col>
              <Col md={6}>Featured Adds</Col>
            </Row>
            <Row>
              <Col md={6}>Featured Adds</Col>
              <Col md={6}>Featured Adds</Col>
            </Row>
            <Row>
              <Col md={6}>Featured Adds</Col>
              <Col md={6}>Featured Adds</Col>
            </Row>
            <Row style={{backgroundColor: '#a94442'}}>
              <Col md={6}>Adds</Col>
              <Col md={6}>Adds</Col>
            </Row>
            <Row style={{backgroundColor: '#a94442'}}>
              <Col md={6}>Adds</Col>
              <Col md={6}>Adds</Col>
            </Row>
            <Row style={{backgroundColor: '#a94442'}}>
              <Col md={6}>Adds</Col>
              <Col md={6}>Adds</Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </>
    )
}

export default Home
