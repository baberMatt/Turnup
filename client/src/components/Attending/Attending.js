import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

function Attending(props) {

    return (
        <div className="my-4" id="attending">
            <div className="shadowBox">
                    <Col md={12} className="hostedBox">
                        <Row className="d-flex justify-content-around py-2">
                            <Col md={2} className="d-flex flex-column justify-content-around">
                                <a href={'/event/' + props.eventString } ><button className="btn btn2 btn-sm">Check It!</button></a>
                            </Col>
                            <Col md={8}>
                                <h6 className="m-0">{props.eventName}</h6>
                                <p>Categories</p>
                                <h6 className="m-0">{props.firstCat}_{props.secondCat}_{props.thirdCat}</h6>
                                <p>a little about...</p>
                                <p>{props.briefDetails}</p>
                            </Col>
                        </Row>
                    </Col>
                </div>

        </div>
    );
}

export default Attending;