import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import Menuitem from "../components/Menuitem/Menuitem.js";

// import API from "../utils/api/API";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/pancakes.jpg'





function Event(props) {
    const [Event, setEvent] = useState("");

    let { currentEvent } = useParams();
    const history = useHistory();
    console.log(currentEvent)

    useEffect(() => {

        API.getEventname({ eventString: currentEvent }).then(res => {
            console.log(res)
            props.setEventInFocus(res.data)
        })

    }, [currentEvent])





    return (
        <div id="event" className="d-flex justify-content-center">
            <Container fluid>
                <div className="shadowEvent">
                    <Row className="mt-3  eventContent d-flex justify-content-center">

                        <Col md={12} id="bannerCol" className="d-flex p-0 justify-content-center">
                            <img id="bannerImage" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/10/06121429/twenty20_5ac8d87c-3c0e-4cd3-a827-eccc2f30c894.jpg" />
                            <div id="bannerText" className="text-right" >
                                {/* <h1 className="display-1">{props.eventInFocus.eventName}</h1>
                                <h5>{props.eventInFocus.briefDetails}</h5> */}
                            </div>
                        </Col>
                    </Row>
                    <Row className="eventContent eventBox d-flex justify-content-center">
                        <Col md={1} className="my-3">
                            <button className="btn btn1">Update</button>
                        </Col>
                        <Col md={3} className="my-3 ">
                            <h3>When its happening</h3>
                            <h6>day 1</h6>
                            <h6>day 2</h6>
                            <h6>day 3</h6>
                            <h6>day 4</h6>
                            <h3>Where its happening</h3>
                            {/* <h6>{props.eventInFocus.location}</h6> */}
                        </Col>
                        <Col md={7} className="my-3">
                            <h3>Details</h3>
                            {/* <p>{props.eventInFocus.details}</p> */}
                        </Col>
                    </Row>
                </div>
                 {/* MENU */}
                 <Row>
                    <Col md={8} className="my-5 mx-auto" >
                        <div className="card mx-auto" style={{ border: "none", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
                            <div className="card-body ">
                                <h5 className="card-title" style={{ textAlign: "center", opacity: ".8" }}>What We Offer</h5>
                                <div style={{ borderTop: "solid", borderColor: "gray" }}>
                                    
                                    <Menuitem 
                                    itemName={"food"}
                                    description={"Here go details about the item"}
                                    price={"$10.00"}
                                    />
                                     <Menuitem 
                                    itemName={"food"}
                                    description={"Here go details about the item"}
                                    price={"$10.00"}
                                    />
                                     <Menuitem 
                                    itemName={"food"}
                                    description={"Here go details about the item"}
                                    price={"$10.00"}
                                    />

                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>

                
            </Container>
        </div>
    );
}


export default Event;
