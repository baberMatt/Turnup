
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import Login from "../components/Login";

// import API from "../utils/api/API";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





function Event() {
    const [Event, setEvent] = useState("");







    return (
        <div id="event" className="d-flex justify-content-center">
            <Container fluid>
                <div className="row my-3 d-flex justify-content-center">
                    <div className="md-12 d-flex justify-content-center">
                        <img src="https://www.eventelephant.com/wp-content/uploads/2019/01/EventElephant.jpg" />
                    </div>
                </div>
                <div className="row my-3 d-flex justify-content-around">
                    <div className="col-md-3 text-center">
                        <div className="border d-flex flex-column">
                            <p>Event Name </p>
                            <p>Event Name </p>
                            <p>Even Name </p>
                            <p>Event Name</p>
                        </div>
                    </div>
                    <div className="col-md-7 text-center">
                        <div className="border">
                            <p>Hours of Operation</p>
                            <p>Hours of Operation</p>
                            <p>Hours of Operation</p>
                            <p>Hours of Operation</p>
                       </div>
                    </div>
                </div>
                <Row>
                    <Col size="md-12">
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Event;
