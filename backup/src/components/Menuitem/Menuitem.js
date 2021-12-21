import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css"


function Menuitem(props) {

    console.log(props)
    
    return (
        <div className="">
            <Row>
                <Col md={12} className="mx-auto menueItem" style={{ marginTop: "1rem" }}>
                    <Row>
                        <Col md={3}>
                        <img className="menuThumb" src="https://cdn.shopify.com/s/files/1/0159/3150/6742/products/10-D-Coaster-1st-FULL-PRINT-Fast-food-pattern-design-funny-illustration_1800x1800.jpg?v=1583063900" alt="food" style={{ borderRadius: "50%", width: "60%", height: "100%", objectFit: "cover" }}></img>

                        </Col>
                        <Col md={5} className="my-2">
                            <div className="card" style={{ border: "none" }}>
                                <h5 className="card-title">{props.menuItem}</h5>
                                <p>{props.itemDetails}</p>
                            </div>

                        </Col>
                        <Col md={3}>
                            <div className="card mx-0 my-3 float-right" style={{ border: "none" }}>
                                <p>{props.itemPrice}</p>
                                {props.eventAuth ? <button className=" btn btn1" >Remove</button> : ""}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Menuitem;
