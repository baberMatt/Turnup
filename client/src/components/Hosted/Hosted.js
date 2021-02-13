import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"


// import UserContext from "../../utils/userContext";

function Hosted(props) {

    return (
        <div  className="my-5 hostedRoot">
                <div className="shadowBox">
                    <Col md={12} className="hostedBox">
                        <Row className="d-flex justify-content-around py-2">
                            <Col md={2} className="d-flex flex-column justify-content-around">
                                <a href={'/event/' + props.eventString } ><button className="btn btn2 btn-sm">Check It!</button></a>
                            </Col>
                            <Col md={4}>
                                <h3>{props.eventName}</h3>
                                <p>Categories</p>
                                <h5>{props.firstCat}_{props.secondCat}_{props.thirdCat}</h5>
                                <p>a little about...</p>
                                <p>{props.briefDetails}</p>
                            </Col>
                            <Col md={4} className="d-flex flex-column justify-content-end">
                                <p>find us here...</p>
                                <h5>{props.location}</h5>
                                <p>dates</p>
                                <h5>time, time, time</h5>
                                
                            </Col>
                        </Row>
                    </Col>
                </div>
        </div>
    );
}

export default Hosted;