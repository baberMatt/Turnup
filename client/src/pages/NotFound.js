import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import notFound from '../assets/notFound.png'
import '../App.css';

function NotFound(props) {

  return (
    <div id="notFound">
      <Container fluid>
        <Row className="justify-content-center pt-5">
          <Col lg={6} className="p-3 d-flex" id="notFound">
              <div id="notFoundContent" className="m-auto">
                <h4 id="notFoundText" className="text-center m-auto">"I don't think this is what you're looking for..."</h4>
                <img id="notFoundImg" className="img-fluid" src={notFound} alt="image displayed for not found"/> 
              </div>          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;