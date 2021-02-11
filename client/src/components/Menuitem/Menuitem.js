import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css"


function Menuitem(props) {
    
    return (
        <div className="">
            <Row>
                <Col md={12} className="mx-auto menueItem" style={{ marginTop: "1rem" }}>
                    <Row>
                        <Col md={3}>
                            <img src="" alt="food" style={{ borderRadius: "50%", width: "60%", height: "100%", objectFit: "cover" }}></img>
                        </Col>
                        <Col md={5} className="my-2">
                            <div className="card" style={{ border: "none" }}>
                                <h5 className="card-title">{props.itemName}</h5>
                                <p>{props.description}</p>
                            </div>

                        </Col>
                        <Col md={3}>
                            <div className="card mx-0 my-3 float-right" style={{ border: "none" }}>
                                <p>{props.price}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Menuitem;
