import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

function Eventguest(props) {

    console.log(props.host)

    return (
        <div className="my-5">
            <Row className="d-flex justify-content-center">
                <Col md={3}>
                    <img className="thumbnail" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" id="profileImage"></img>
                </Col>

                <Col md={6} className="m-auto">
                    <a href={'/user/' + props.Username}><h2>{props.Username}</h2></a>
                    {props.host 
                        ? ( <h6>Hosting</h6> 
                        ) : (
                            (<><h6>dates going...</h6> 
                           
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