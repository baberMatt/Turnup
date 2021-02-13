import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

function Eventguest(props) {

    console.log(props.host)

    return (
        <div id="eventGuest" className="my-3 d-flex justify-content-center">
            <Row className="d-flex border-top pt-3 justify-content-center">
                <Col md={3}>
                    <img className="thumbnail" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" id="profileImage"></img>
                </Col>

                <Col md={8} className="m-auto">
                    <a href={'/user/' + props.Username}><h6>{props.Username}</h6></a>
                    {props.host 
                        ? ( <p>Hosting</p> 
                        ) : (
                            (<><p>dates they'll turnup...</p> 
                           
                            {props.dates.map( (item, index) => (
                            <p>{item}</p>
                            ))}
                            </>
                        ))}
                    
                </Col>
            </Row>

        </div>
    );
}

export default Eventguest;