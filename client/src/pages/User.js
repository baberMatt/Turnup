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
import profilePic from '../assets/profile.png'
import 'react-calendar/dist/Calendar.css';
import '../App.css'
// on page load, get user from params and call db.getall
// setUser to res
// 



function User(props) {
    const [aboutMeUpdate, setAboutMeUpdate] = useState();
    const [firstNameUpdate, setFirstNameUpdate] = useState();
    const [displayTab, setDisplayTab] = useState("aboutMe");
    const [lastNameUpdate, setLastNameUpdate] = useState();
    const [editAbout, setEditAbout] = useState(false);
    const [attendingEvents, setAttendingEvents] = useState("");
    const [displayedUser, setDisplayedUser] = useState({ Username: "user", hosting: [], attending: [], profilePicture: { imageName: "none" } });
    

    let { Username } = useParams();
    const history = useHistory();

    useEffect(() => {

        API.getUsername({ Username: Username }).then(res => {
            console.log("theDate", res.data)
            if(!res.data) {
                window.location.href = '/notfound'
            }
            setDisplayedUser(res.data);
        })

        setAboutMeUpdate(displayedUser.about)
        setFirstNameUpdate(displayedUser.firstName)
        setLastNameUpdate(displayedUser.lastName)

    }, [Username])




    function editAboutMe() {
        if (!editAbout) {
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

    function handleImageUploadChange(event) {
        props.setImageForUpload(event.target.files[0])
    }


    function updateAbout() {
        API.updateUser(props.user._id, {
            about: aboutMeUpdate,
            firstName: firstNameUpdate,
            lastName: lastNameUpdate
        })
            .catch(err => console.log(err));
        setEditAbout(false);
        window.location.reload(false);
    }

    function removeImage() {
        API.updateUser(props.user._id, {
            profilePicture: { imageName: "none" },
        })
        .catch(err => console.log(err))
        .then(API.deleteProfileImage(props.user.profilePicture.imageName, {}))
        window.location.reload(false);
    }

    function deleteThisUser() {
        props.setAlertProps("deleteUser")
        props.toggleAlert()
    }
    
    function bailEvent(target) {
        
        API.updateUser(props.user._id, { $pull: { attending: { event: target } } })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .then(API.updateEvent(target, { $pull: { attendees: { guest: props.user._id } } }))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
        window.location.reload(false);

    }



    return (
        <div id="userPage" className="d-flex justify-content-center">

            <Container fluid>
                <div className="mt-5">
                    <Row id="dashLinkBox" className="d-flex justify-content-center">
                        <Col md={2} className="text-center p-0 dashLink">
                            <a href="#" className="m-auto" onClick={() => setDisplayTab("aboutMe")}>About Me</a>
                        </Col>
                        <Col md={2} className="text-center p-0 dashLink">
                            <a href="#" className="m-auto" onClick={() => setDisplayTab("popUps")} >My Pop Ups</a>

                        </Col>
                    </Row>
                    {displayTab === "aboutMe" ?
                        <div className="shadowUser about">

                            <Row className="Row contentBox boxInner d-flex justify-content-center py-5">

                                <Col md={3} className="d-flex justify-content">
                                    <div className="my-3" >
                                        {displayedUser.profilePicture.imageName === "none" ?
                                            <img src={profilePic} id="profileImage"></img>
                                            :
                                            <img src={'../../../uploads/profileImage/' + displayedUser.profilePicture.imageName} id="profileImage"></img>
                                        }

                                        {editAbout ?
                                            <div>
                                                <h6 className="text-center">Upload a profile pic</h6>
                                                {displayedUser.profilePicture.imageName !== "none" ?
                                                    <div>
                                                        <button className="btn btn3" onClick={removeImage}>Remove Image</button>
                                                    </div>
                                                    :
                                                    <div className="d-flex flex-column align-items-center">
                                                        <input type="file" className="" onChange={handleImageUploadChange} />
                                                        <button className="h-50 w-50 mt-2 btn btn3" onClick={() => props.uploadImage("profile")}>Submit</button>
                                                    </div>
                                                }
                                            </div> : ""}
                                    </div>
                                </Col>
                                <Col md={5} className="d-flex mt-3 justify-content">
                                    <div className="Row d-flex justify-content">
                                        <div className="col-md-12 d-flex justify-content-center">
                                            <div>
                                                <h3 className="">{displayedUser.Username}</h3>
                                                {editAbout ? <input type="text" value={displayedUser.firstName} onChange={handleFirstNameChange} placeholder="first name" /> : <h6 className="d-inline-block mt-2">{displayedUser.firstName}</h6>} {editAbout ? <input type="text" value={displayedUser.lastName} onChange={handleLastNameChange} placeholder="last name" /> : <h6 className="d-inline-block mt-2"> {displayedUser.lastName}</h6>}
                                                <h6 className="mt-4">ABOUT ME</h6>
                                                {editAbout ? <textarea type="text" value={aboutMeUpdate} onChange={handleAboutChange} rows="5" cols="80">{displayedUser.about}</textarea> : <p>{displayedUser.about}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                {props.isLogged ?
                                    <Col md={2} className="d-flex flex-column justify-content-between my-3">
                                        {editAbout ? <button onClick={updateAbout} className="btn btn3 editButtons">Update</button> : ""}
                                        {editAbout ? <button onClick={deleteThisUser} className="btn btn3 editButtons">Delete Me!</button> : ""}
                                        <button onClick={editAboutMe} style={props.windowSize < 1350 ? { fontSize: ".6rem", paddingLeft: "7px" } : {}} className="btn btn3 editButtons">Edit About Me</button>

                                    </Col>
                                    : ""}
                                <Col md={12} className="mt-5">
                                    <hr id="aboutHR" />
                                </Col>
                                <Col md={4} className="d-flex flex-column justify-content-center my-3 mr-5">
                                    <h3 className="text-center">CALENDER</h3>
                                    <div id="calendar">
                                        <Calendar></Calendar>
                                    </div>
                                </Col>
                                <Col md={4} className="my-3 ml-5" id="attendingBox">
                                    <h3 className="text-center">EVENTS ATTENDING</h3>
                                    {console.log(displayedUser)}
                                    
                                    {displayedUser.hosting.length ?
                                        displayedUser.hosting.map(item =>
                                            <Attending
                                                eventName={item.eventName}
                                                eventString={item.eventString}
                                                firstCat={item.category.first}
                                                secondCat={item.category.second}
                                                thirdCat={item.category.third}
                                                briefDetails={item.briefDetails}
                                                isHost={displayedUser.Username}

                                            />
                                        )
                                        : ""
                                    }
                                    {displayedUser.attending.length ?
                                        displayedUser.attending.map(item =>
                                            <Attending
                                                eventName={item.event.eventName}
                                                eventString={item.event.eventString}
                                                firstCat={item.event.category.first}
                                                secondCat={item.event.category.second}
                                                thirdCat={item.event.category.third}
                                                briefDetails={item.event.briefDetails}
                                                _id={item.event._id}
                                                bailEvent={bailEvent}
                                                isHost={false}
                                            />
                                        )
                                        : ""
                                    }
                                    {displayedUser.hosting.length || displayedUser.attending.length ?
                                        ""
                                        : <h6 className="text-center mt-5">I'm not currently attending any events</h6>}
                                </Col>

                            </Row>

                        </div>
                        : ""}
                    {displayTab === "popUps" ?
                        <div className="shadowUser">

                            <Row className="Row contentBox boxInner d-flex justify-content-center mt-5" >
                                <Col md={12} id="hostingCol" className="d-flex justify-content-center my-3">
                                    <h3 className="d-inline-block">Pop Ups I'm Hosting</h3>{props.isLogged ? <button id="hostBtn" onClick={props.toggleHost} className="btn btn3 d-flex align-self-end">Host an Event</button> : ""}
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
                                            datesOpen={item.datesOpen}
                                            banner={item.images.banner}
                                        />
                                    ))
                                ) : (<h6 className="mb-4">I'm not hosting any events currently</h6>)
                                }
                            </Row>

                        </div>
                        : ""}

                </div>
            </Container>
        </div>
    );
}

export default User;