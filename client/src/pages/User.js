import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/api/API.js";
import Hostevent from "../components/Hostevent/Hostevent.js"
import Hosted from "../components/Hosted/Hosted.js"
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
    const [firstNameUpdate, setFirstNameUpdate] = useState(props.user.firstName)
    const [lastNameUpdate, setLastNameUpdate] = useState(props.user.lastName)
    const [editAbout, setEditAbout] = useState(false)
    const [attendingEvents, setAttendingEvents] = useState("")



    let { Username } = useParams();
    const history = useHistory();

    useEffect(() => {

        API.getUsername({ Username: Username }).then(res => {
            if (!res.data.islogged) {
                props.setUser(res.data);
                console.log("effect rendered")
                console.log("props are " + props.user.Username)
            }
        })

    }, [Username])

    // console.log(user)
    function editAboutMe() {
        if ( !editAbout ) {
            setEditAbout(true);
        }
        else {
            setEditAbout(false)
        }
    }

    function handleLogOut() {
        API.updateUser(props.user._id, { islogged: false })
            .catch(err => console.log(err));
        history.push("/")
    }

    function handleAboutChange(event) {
        setAboutMeUpdate(event.target.value)
    }
    
    function handleFirstNameChange(event) {
        setFirstNameUpdate(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastNameUpdate(event.target.value)
    }


    function updateAbout() {
        API.updateUser(props.user._id, { 
            about: aboutMeUpdate, 
            firstName: firstNameUpdate,
            lastName: lastNameUpdate
        })
            .catch(err => console.log(err));
        setEditAbout(false);
    }


    return (
        <div id="userPage" className="d-flex justify-content-center">

            <Container fluid>
                <div className="shadowUser">
                <Row className="Row contentBox boxInner d-flex justify-content-around mt-5">
                    
                    <Col md={3} className="d-flex justify-content">
                        <div >
                            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" id="profileImage"></img>
                        </div>
                    </Col>
                    <Col md={5} className="d-flex mt-3 justify-content">
                        <div className="Row d-flex justify-content">
                            <div className="col-md-12 d-flex justify-content-center">
                                <div>
                                    <h3 className="">{props.user.Username}</h3>
                                    {editAbout ? <input type="text" value={firstNameUpdate} onChange={handleFirstNameChange} placeholder={firstNameUpdate} /> : <h6 className="d-inline-block mt-2">{props.user.firstName}</h6>} {editAbout ? <input type="text" value={lastNameUpdate} onChange={handleLastNameChange} placeholder={lastNameUpdate} /> : <h6 className="d-inline-block mt-2"> {props.user.lastName}</h6>}
                                    <h6 className="mt-4">ABOUT ME</h6>
                                    {editAbout ? <textarea type="text" value={aboutMeUpdate} onChange={handleAboutChange} rows="5" cols="80">{props.user.about}</textarea> : <p>{props.user.about}</p>}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} className="d-flex flex-column justify-content-between my-3">
                    {props.user.islogged ? <button onClick={handleLogOut} className="btn btn1 editButtons">Log Out</button> : ""}
                    {editAbout ? <button  onClick={updateAbout} className="btn btn3 editButtons">Update</button> : ""}
                    {props.user.islogged ? <button onClick={editAboutMe} className="btn btn1 editButtons">Edit About Me</button> : ""}
                    
                    </Col>
                    
                </Row>
                </div>
                <div className="shadowUser">
                <Row className="Row contentBox boxInner d-flex justify-content-center mt-5" >
                    <Col md={12} id="hostingCol" className="d-flex justify-content-center my-3">
                        <h3 className="d-inline-block">Pop Ups I'm Hosting</h3>{props.user.islogged ? <button id="hostBtn" onClick={props.toggleHost} className="btn btn1 d-flex align-self-end">Host an Event</button> : ""}
                    </Col>   
                
                        {props.user.hosting.length ? (
                            props.user.hosting.map(item => (
                                <Hosted
                                    eventName={item.eventName}
                                    firstCat={item.category.first}
                                    secondCat={item.category.second}
                                    thirdCat={item.category.third}
                                    briefDetails={item.briefDetails}
                                    location={item.location}
                                />
                            ))
                        ) : (<h6 className="mb-4">I'm not hosting any events currently</h6>)
                        }
                </Row> 

                </div>       
                
                <div className="shadowUser">      
                <Row className="contentBox boxInner my-5 d-flex justify-content-around">
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
                </div> 

            </Container>
        </div>
    );
}

export default User;