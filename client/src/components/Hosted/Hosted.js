import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eventBanner from '../../assets/bocce.png'
import "./style.css"


// import UserContext from "../../utils/userContext";

function Hosted(props) {
    console.log("eachEvent", props)
    return (
        <div className="my-2 hostedRoot" >
            
            <div className='d-flex flex-column'>
                <Col md={12} className="hostedBG" style={{backgroundImage: `url('../../../uploads/eventImage/${props.banner}')`, backgroundSize: 'cover', backgroundPosition: "center", opacity: "1" }}>
                    <Row className=" hostedContent d-flex justify-content-around py-2">
                        <Col md={2} className="d-flex flex-column justify-content-around align-items-center">
                            <a href={'/event/' + props.eventString} ><button className="btn btn3 btn-sm">Check It!</button></a>
                        </Col>
                        <Col md={9}>
                            <Row className="d-flex justify-content-around">
                                <Col md={12}>
                                    <h2 className="underline " >{props.eventName}</h2>
                                </Col>
                                <Col md={5}>
                                    <p className="underline mt-3 mb-1">Categories</p>
                                    <h5>{props.firstCat}_{props.secondCat}_{props.thirdCat}</h5>
                                    <p className="underline mt-3 mb-1">a little about...</p>
                                    <h5>{props.briefDetails}</h5>
                                </Col>
                                <Col md={5}>
                                    <p className="underline mt-3 mb-1">find us here...</p>
                                    <h5>{props.location}</h5>
                                    <p className="underline mt-3 mb-1">dates</p>
                                    <h5>{props.datesOpen}</h5>
                                </Col>

                            </Row>
                        </Col>
                        
                    </Row>
                </Col>
                <Col md={12} className="mt-3">
                    <hr id="aboutHR" />
                </Col>
            </div>
        </div>
    );
}

export default Hosted;