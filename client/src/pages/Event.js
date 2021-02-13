import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import Menuitem from "../components/Menuitem/Menuitem.js";
// import API from "../utils/api/API";
import { Modal, Form, } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/pancakes.jpg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function Event(props) {
    const [Event, setEvent] = useState("");
    const [editEvent, setEditEvent] = useState(false);
    const [addDate, setAddDate] = useState(false);
    const [eventNameUpdate, setEventNameUpdate] = useState();
    const [eventBriefDetailsUpdate, setEventBriefDetailsUpdate] = useState();
    const [eventLocationUpdate, setEventLocationUpdate] = useState();
    const [eventDetailsUpdate, setEventDetailsUpdate] = useState();
    const [datesForSubmit, setDatesForSubmit] = useState({})


    let { currentEvent } = useParams();
    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());



    const [eventAuth, setEventAuth] = useState(false);






    useEffect(() => {

        API.getEventstring({ eventString: currentEvent }).then(res => {
            props.setEventInFocus(res.data)
            setEventNameUpdate(props.eventInFocus.eventName)
            setEventBriefDetailsUpdate(props.eventInFocus.briefDetails)
            setEventLocationUpdate(props.eventInFocus.location)
            setEventDetailsUpdate(props.eventInFocus.details)
        })

    }, [currentEvent])

    useEffect(() => {
        function checkHost(host) {
            let checkHostArr = []
            props.user.hosting.map(item => checkHostArr.push(item._id))
            if (checkHostArr.includes(host)) {
                setEventAuth(true);
            }

        }
        checkHost(props.eventInFocus._id)
    }, [props.user])


    
    function editingEvent() {
        if (!editEvent) {
            setEditEvent(true);
        }
        else {
            setEditEvent(false)
        }
    }

    function handleEventNameChange(event) {
        setEventNameUpdate(event.target.value)
    }

    function handleEventBriefDetailsUpdate(event) {
        setEventBriefDetailsUpdate(event.target.value)
    }

    function handleEventLocationUpdate(event) {
        setEventLocationUpdate(event.target.value)
    }

    function handleEventDetailsUpdate(event) {
        setEventDetailsUpdate(event.target.value)
    }

  
    function addingDate() {
        setAddDate(true);
    }

    function submitDate() {
        var dateFormat = require("dateformat")
        let formattedDate = (dateFormat(startDate, "dddd, mmmm, dS, yyyy"))
        API.updateEvent(props.eventInFocus._id, { $push: { datesOpen: formattedDate } })
        setAddDate(false)
        window.location.reload();
    }

    function handleAddDate(e) {
        console.log(e.target)
        if (e.target.classList.contains("checkedBtn")) {
            e.target.classList.remove("checkedBtn")
            e.target.innerHTML = "x"
            let dateID = e.target.getAttribute('data-numb')
            let newDates = {...datesForSubmit}
            delete newDates[`${dateID}`]
            setDatesForSubmit(newDates)
        } else {
            e.target.classList.add("checkedBtn") 
            e.target.innerHTML = "o"
            let dateID = e.target.getAttribute('data-numb')
            let chosenDate = document.getElementById(`dateItem${dateID}`).textContent
            setDatesForSubmit({...datesForSubmit, [dateID] : chosenDate })
        }

    }

    function handleAttending() {
         if (!props.isLogged) {
            alert("We sorry, you need to sign in to attend and event, if you don't have an account, create one from our home page")
        } else {
            let dateSubmission = Object.values(datesForSubmit)
            console.log(dateSubmission)
            API.updateUser(props.user._id, { $push: { "attending": { event : props.eventInFocus._id, dates: dateSubmission } } })
            console.log(dateSubmission)
            API.updateEvent(props.eventInFocus._id, { $push: { "attendees": { guest : props.user._id, dates: dateSubmission } } })
            alert("cant wait to see you there")
            window.location.reload();
        }

        handleClose();
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addHost() {
        API.updateEvent(props.eventInFocus._id, { $push: { "hosts": props.user._id } })
        .then(res => console.log("successful host Post"))
        .catch(err => console.log(err));
    }

  
   
    return (
        <div id="event" className="d-flex justify-content-center">
            <Container fluid>
                <div onClick={addHost} id="addHost"></div>
                <div className="shadowEvent">
                    <Row className="mt-3 headerContent  eventContent d-flex justify-content-center">

                        <Col md={12} id="bannerCol" className="d-flex p-0 justify-content-center">
                            <img id="bannerImage" src={props.eventInFocus.photo1} />
                            <div id="bannerText" className="text-right" >
                                {editEvent ? <input id="eventNameInput" type="text" value={eventNameUpdate} onChange={handleEventNameChange} placeholder={eventNameUpdate} /> : <h1 className="display-1">{props.eventInFocus.eventName}</h1>}
                                {editEvent ? <input id="briefDetailsInput" type="text" value={eventBriefDetailsUpdate} onChange={handleEventBriefDetailsUpdate} placeholder={eventBriefDetailsUpdate} /> : <h5>{props.eventInFocus.briefDetails}</h5>}
                            </div>
                        </Col>
                    </Row>
                    <Row className="eventContent eventBox d-flex justify-content-center">
                        <Col md={2} className="my-3 eventBtn d-flex flex-column justify-content-around">
                            {eventAuth ?
                                <button className="btn btn1" onClick={editingEvent}>Update</button>
                                : <button className="btn btn1" onClick={handleShow}>Attend</button>}
                            <button onClick={props.toggleAttendees} className="btn btn1">Who's Turning Up?</button>
                        </Col>
                        <Col md={3} className="my-3 ">
                            <h3>When its happening</h3>
                            {props.eventInFocus.datesOpen ? (
                                props.eventInFocus.datesOpen.map(item => (
                                    <h6>{item}</h6>
                                ))
                            ) : (<h6>No dates on the calendar yet...</h6>)}
                            {editEvent ? <button onClick={addingDate} className="btn btn1 btn-sm">Add a date</button> : ""}
                            {addDate ? <div className="my-3">
                                <DatePicker
                                    selected={startDate}
                                    dateFormat="eeee MMM dd, yyyy"
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                />
                                <button onClick={submitDate} className="ml-1 btn btn1 btn-sm">+</button>
                            </div> : ""}

                            <h3>Where its happening</h3>
                            {editEvent ? <textarea rows="1" cols="60" type="text" value={eventLocationUpdate} onChange={handleEventLocationUpdate} placeholder={eventLocationUpdate} /> : <h6>{props.eventInFocus.location}</h6>}
                        </Col>
                        <Col md={6} className="my-3">
                            <h3>Details</h3>
                            {editEvent ? <textarea rows="5" cols="120" type="text" value={eventDetailsUpdate} onChange={handleEventDetailsUpdate} placeholder={eventDetailsUpdate} /> : <p>{props.eventInFocus.details}</p>}
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

                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Which days are you turning up?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {props.eventInFocus.datesOpen ? ( 
                                
                                props.eventInFocus.datesOpen.map((item, index) => (

                                    <div>
                                        <h6  id={"dateItem" + index} className=" d-inline-block">{item}</h6> 
                                        <button data-numb={index} onClick={handleAddDate} className="btn btn1 btn-sm ml-1">x</button>
                                    </div>
                                ))
                                
                            ) : (<h6 className="popOverDate">Wait till we're on the calendar</h6>)}
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn1 btn-sm" onClick={handleAttending} >Let's GO!</button>
                        <button className="btn btn1 btn-sm" onClick={handleClose} >Close</button>
                        </Modal.Footer>
                    </Modal>
                </>


            </Container>
        </div>
    );
}


export default Event;
