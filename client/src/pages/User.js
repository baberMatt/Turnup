import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/api/API.js";
import Hostevent from "../components/Hostevent/Hostevent.js"
import Hosted from "../components/Hosted/Hosted.js"
import Attending from "../components/Attending/Attending.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// on page load, get user from params and call db.getall
// setUser to res
// 



function User(props) {
    const [aboutMeUpdate, setAboutMeUpdate] = useState();
    const [firstNameUpdate, setFirstNameUpdate] = useState();
    const [lastNameUpdate, setLastNameUpdate] = useState();
    const [editAbout, setEditAbout] = useState(false);
    const [attendingEvents, setAttendingEvents] = useState("");
    const [displayedUser, setDisplayedUser] = useState({ Username: "user", hosting: [], attending: [] });


    let { Username } = useParams();
    const history = useHistory();

    useEffect(() => {

        API.getUsername({ Username: Username }).then(res => {
                setDisplayedUser(res.data);
        })

        setAboutMeUpdate(displayedUser.about)
        setFirstNameUpdate(displayedUser.firstName)
        setLastNameUpdate(displayedUser.lastName)

    }, [Username])

    
    function editAboutMe() {
        if ( !editAbout ) {
            setEditAbout(true);
        }
        else {
            setEditAbout(false)
        }
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
                                    <h3 className="">{displayedUser.Username}</h3>
                                    {editAbout ? <input type="text" value={firstNameUpdate} onChange={handleFirstNameChange} placeholder={firstNameUpdate} /> : <h6 className="d-inline-block mt-2">{displayedUser.firstName}</h6>} {editAbout ? <input type="text" value={lastNameUpdate} onChange={handleLastNameChange} placeholder={lastNameUpdate} /> : <h6 className="d-inline-block mt-2"> {displayedUser.lastName}</h6>}
                                    <h6 className="mt-4">ABOUT ME</h6>
                                    {editAbout ? <textarea type="text" value={aboutMeUpdate} onChange={handleAboutChange} rows="5" cols="80">{displayedUser.about}</textarea> : <p>{displayedUser.about}</p>}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} className="d-flex flex-column justify-content-between my-3">
                    
                    {editAbout ? <button  onClick={updateAbout} className="btn btn3 editButtons">Update</button> : ""}
                    {props.isLogged ? <button onClick={editAboutMe} className="btn btn1 editButtons">Edit About Me</button> : ""}
                    
                    </Col>
                    
                </Row>
                </div>
                <div className="shadowUser">
                <Row className="Row contentBox boxInner d-flex justify-content-center mt-5" >
                    <Col md={12} id="hostingCol" className="d-flex justify-content-center my-3">
                        <h3 className="d-inline-block">Pop Ups I'm Hosting</h3>{props.isLogged ? <button id="hostBtn" onClick={props.toggleHost} className="btn btn1 d-flex align-self-end">Host an Event</button> : ""}
                    </Col>   
                
                        {displayedUser.hosting.length ? (
                            displayedUser.hosting.map(item => (
                                <Hosted
                                    isLogged={props.isLogged}
                                    eventName={item.eventName}
                                    eventString={item.eventString}
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
                        <h3 className="text-center">EVENTS ATTENDING</h3>
                        {console.log(displayedUser)}
                        {displayedUser.attending ? (
                        displayedUser.attending.map(item =>
                        
                            <Attending
                                eventName={item.event.eventName}
                                eventString={item.event.eventString}
                                firstCat={item.event.category.first}
                                secondCat={item.event.category.second}
                                thirdCat={item.event.category.third}
                                briefDetails={item.event.briefDetails}
                                
                            />
                        )) : (
                            <h3>I'm not currently attending any events</h3>
                        )}
                    </Col>

                </Row>
                </div> 

            </Container>
        </div>
    );
}

export default User;