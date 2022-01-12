import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

function Attending(props) {
    const [notBailing, setNotBailing] = useState(true);

    function bailThisEvent() {
        setNotBailing(false);
        setTimeout(() => {
            props.bailEvent(props._id);
        }, 1500);   
    };

    return (
        <div className="my-4" id="attending">
            <div className="shadowBox">
                <Col md={12} className="hostedBox">
                    {notBailing ?
                        <Row className="d-flex justify-content-around py-2">
                            <Col md={3} className="d-flex flex-column p-1 align-items-center justify-content-around">
                                {props.isHost ? <h5 className="ml-1" >Hosting</h5> : ""}
                                <a href={'/event/' + props.eventString} ><button className="btn btn3 btn-sm">Check It!</button></a>
                                {!props.isHost ? <button onClick={bailThisEvent} className="btn btn3 btn-sm mx-auto px-3">Bail...</button> : ""}
                            </Col>
                            <Col md={8}>
                                <h5 className="m-0 underline">{props.eventName}</h5>
                                <p className="mt-2 mb-0 underline">Categories</p>
                                <h6 className="m-0">{props.firstCat}_{props.secondCat}_{props.thirdCat}</h6>
                                <p className="mt-2 mb-0 underline">a little about...</p>
                                <h6>{props.briefDetails}</h6>
                            </Col>
                        </Row>
                        :
                        <Row className="d-flex justify-content-around py-2">
                            <Col md={12}>
                                <h5 className="m-auto text-center p-4">You are no longer attending this event.</h5>
                            </Col>
                        </Row>}
                </Col>
            </div>
        </div>
    );
}

export default Attending;