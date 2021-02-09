import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/api/API.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// on page load, get user from params and call db.getall
// setUser to res
// 



function User(props) {
    const [aboutMeUpdate, setAboutMeUpdate] = useState(props.user.about)
    const [editAbout, setEditAbout] = useState(false)
    const [attendingEvents, setAttendingEvents] = useState("")
    let { Username } = useParams();
    console.log(Username)

    // useEffect(() => {

    //     API.getUsername({ Username: Username }).then(res => {
    //         console.log(res)
    //         if (!res.data.user.islogged) {
    //             props.setUser(res.data);
    //             console.log("effect rendered")
    //         }
    //     })

    // }, [Username])

    // console.log(user)
    function editAboutMe() {
        setEditAbout(true);
    }

    function handleAboutChange(event) {
        setAboutMeUpdate(event.target.value)
    }

   
    function updateAbout() {
        API.updateUser(props.user._id, {about: aboutMeUpdate})
        .catch(err => console.log(err));
        setEditAbout(false);
    }


    return (
        <div id="userPage" className="d-flex justify-content-center">
            <Container fluid>
                <Row className="Row contentBox d-flex justify-content-around mt-5">
                    <Col md={3} className="d-flex justify-content">
                        <div >
                            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" id="profileImage"></img>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex mt-3 justify-content">
                        <div className="Row d-flex justify-content">
                            <div className="col-md-12 d-flex justify-content-center">
                                <div>
                                    <h3 className="d-inline-block">{props.user.Username}</h3>{props.user.islogged ? <button id="logOutBtn" className="btn">Log Out</button> : ""}
                                    <h6 className="mt-2">{props.user.firstName} {props.user.lastName}</h6>
                                    <h6 className="mt-4">ABOUT ME</h6>{props.user.islogged ? <button id="logOutBtn" onClick={editAboutMe} className="btn">Edit About Me</button> : ""}
                                    {editAbout ? <textarea type="text" value={aboutMeUpdate} onChange={handleAboutChange} rows="5" cols="80">{props.user.about}</textarea> : <p>{props.user.about}</p>}
                                    {editAbout ? <button className="btn" onClick={updateAbout}>Update</button> : "" }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="Row contentBox d-flex justify-content-center mt-5" >
                    <Col md={10} id="hostingCol" className="d-flex justify-content-center my-3">
                        <h3 className="d-inline-block">Pop Ups I'm Hosting</h3>{props.user.islogged ? <button id="hostBtn" className="btn d-flex align-self-end">Host an Event</button> : ""}
                        {/* <div className="m-auto"> */}
                            {/* {props.user.attending.length ? "" : <h6>I'm not currently hosting any events</h6>} */}
                        {/* </div> */}
                    </Col>
                </Row>

                <Row className="contentBox my-5 d-flex justify-content-around">
                    <Col md={4} className="d-flex flex-column justify-content-center my-3">
                        <h3 className="text-center">CALENDER</h3>
                        <div id="calendar">
                            <Calendar></Calendar>
                        </div>
                    </Col>
                    <Col md={4} className="my-3">
                        <h3>EVENTS ATTENDING</h3>
                        <div>
                            <ul>
                                <li>
                                    <h3>EVENT 1</h3>
                                </li>
                                <li>
                                    <h3>EVENT 2</h3>
                                </li>
                                <li>
                                    <h3>EVENT 3</h3>
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>


            </Container>
        </div>
    );
}

export default User;