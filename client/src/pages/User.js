import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/api/API";
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// on page load, get user from params and call db.getall
// setUser to res
// 



function User() {
    const [user, setUser] = useState({});
    const [attendingEvents, setAttendingEvents] = useState("")
    let {Username} = useParams();
    

    useEffect(() => {
        API.getUsers().then(res => {
        setUser(res.data);
        })
    }, [])

    return (
        <div id="user" className="d-flex justify-content-center">
            <Container fluid>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src="UserImage"></img>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <p>{user[0].Username}</p>
                        <p>REAL NAME</p>
                        <p>ABOUT</p>
                    </div>
                </div>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-12 d-flex justify-content-center">
                        <p>HOSTED EVENTS</p>
                    </div>
                </div>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <p>CALENDER</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        list
                         map data 
                            attendingEvent 
                              
                    </div>
                </div>
                
            </Container>


            
        </div>
    );
}

export default User;