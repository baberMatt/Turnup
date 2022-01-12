import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import API from "../utils/api/API";
import Menuitem from "../components/Menuitem/Menuitem.js";
import { Modal } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import placeholder from '../assets/4short.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Event(props) {
    const [editEvent, setEditEvent] = useState(false);
    const [addDate, setAddDate] = useState(false);
    const [eventNameUpdate, setEventNameUpdate] = useState();
    const [eventBriefDetailsUpdate, setEventBriefDetailsUpdate] = useState();
    const [eventLocationUpdate, setEventLocationUpdate] = useState();
    const [eventDetailsUpdate, setEventDetailsUpdate] = useState();
    const [datesForSubmit, setDatesForSubmit] = useState({})
    const [userIsAttending, setUserIsAttending] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [eventAuth, setEventAuth] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //  MENU OFFLINE
    // const [addMenuItem, setAddMenuItem] = useState(false)
    // const [menutItem, setMenuItem] = useState("");
    // const [itemDetails, setItemDetails] = useState("");
    // const [itemPrice, setItemPrice] = useState(0);

    let { currentEvent } = useParams();

    useEffect(() => {
        API.getEventstring({ eventString: currentEvent }).then(res => {
            if (!res.data) {
                window.location.href = '/notfound';
            }
            props.setEventInFocus(res.data);
            setEventNameUpdate(props.eventInFocus.eventName);
            setEventBriefDetailsUpdate(props.eventInFocus.briefDetails);
            setEventLocationUpdate(props.eventInFocus.location);
            setEventDetailsUpdate(props.eventInFocus.details);
        });

    }, [currentEvent]);

    useEffect(() => {
        function checkHost(host) {
            let checkHostArr = [];
            props.user.hosting.map(item => checkHostArr.push(item._id));
            if (checkHostArr.includes(host)) {
                setEventAuth(true);
            }
        };
        checkHost(props.eventInFocus._id);

        function checkAttending(attending) {
            let checkAttending = attending.map(item => { return item.event });
            if (checkAttending.includes(props.eventInFocus._id)) {
                setUserIsAttending(true);
            }
        };
        checkAttending(props.user.attending);

    }, [props.user]);

    function editingEvent() {
        if (!editEvent) {
            setEditEvent(true);
            setEventNameUpdate(props.eventInFocus.eventName);
            setEventDetailsUpdate(props.eventInFocus.details);
            setEventBriefDetailsUpdate(props.eventInFocus.briefDetails);
            setEventLocationUpdate(props.eventInFocus.location);
        }
        else {
            if (eventNameUpdate || eventBriefDetailsUpdate || eventDetailsUpdate || eventLocationUpdate) {
                updateEvent();
            }
            setEventNameUpdate("");
            setEventDetailsUpdate("");
            setEventBriefDetailsUpdate("");
            setEventLocationUpdate("");
            setEditEvent(false);
            window.location.reload(false);
        };
    };

    function handleEventNameChange(event) {
        setEventNameUpdate(event.target.value);
    };
    function handleEventBriefDetailsUpdate(event) {
        setEventBriefDetailsUpdate(event.target.value);
    };
    function handleEventLocationUpdate(event) {
        setEventLocationUpdate(event.target.value);
    };
    function handleEventDetailsUpdate(event) {
        setEventDetailsUpdate(event.target.value);
    };
    function handleEventImgUploadChange(event) {
        props.setImageForUpload(event.target.files[0]);
    };

    function updateEvent() {
        API.updateEvent(props.eventInFocus._id, {
            eventName: eventNameUpdate,
            briefDetails: eventBriefDetailsUpdate,
            location: eventLocationUpdate,
            details: eventDetailsUpdate
        })
            .catch(err => console.log(err));
    };


    function addingDate() {
        setAddDate(true);
    };

    function submitDate() {
        var dateFormat = require("dateformat");
        let formattedDate = (dateFormat(startDate, "dddd, mmmm, dS, yyyy"));
        API.updateEvent(props.eventInFocus._id, { $push: { datesOpen: formattedDate } });
        setAddDate(false);
        window.location.reload();
    };

    function handleAddDate(e) {
        if (e.target.classList.contains("checkedBtn")) {
            e.target.classList.remove("checkedBtn");
            e.target.innerHTML = "x";
            let dateID = e.target.getAttribute('data-numb');
            let newDates = { ...datesForSubmit };
            delete newDates[`${dateID}`];
            setDatesForSubmit(newDates);
        } else {
            e.target.classList.add("checkedBtn");
            e.target.innerHTML = "o";
            let dateID = e.target.getAttribute('data-numb');
            let chosenDate = document.getElementById(`dateItem${dateID}`).textContent;
            setDatesForSubmit({ ...datesForSubmit, [dateID]: chosenDate });
        };
    };

    function handleAttending() {
        if (!props.isLogged) {
            alert("We sorry, you need to sign in to attend and event, if you don't have an account, create one from our home page");
        } else {
            let dateSubmission = Object.values(datesForSubmit);
            API.updateUser(props.user._id, { $push: { "attending": { event: props.eventInFocus._id, dates: dateSubmission } } });
            API.updateEvent(props.eventInFocus._id, { $push: { "attendees": { guest: props.user._id, dates: dateSubmission } } });
            alert("cant wait to see you there");
            window.location.reload();
        }
        handleClose();
    };

    function deleteThisEvent() {
        props.setAlertProps("deleteEvent");
        props.toggleAlert();
    };

    // ** MENU FUNCTIONALITY OFFLINE ** 
    // 
    // function addingMenuItem() {
    //     setAddMenuItem(true)
    // }

    // function submitMenuItem() {
    //     API.updateEvent(props.eventInFocus._id, {
    //         $push:
    //         {
    //             "menu":
    //             {
    //                 menuItem: menutItem,
    //                 itemDetails: itemDetails,
    //                 itemPrice: itemPrice

    //             }
    //         }
    //     })
    //     setAddMenuItem(false)
    // }

    function removeBannerImage() {
        API.updateEvent(props.eventInFocus._id, {
            images: { banner: "none", thumb: props.eventInFocus.images.thumb },
        })
            .catch(err => console.log(err))
            .then(API.deleteEventImage(props.eventInFocus.images.banner, {}))
        window.location.reload(false);
    };

    function removeThumbImage() {
        API.updateEvent(props.eventInFocus._id, {
            images: { thumb: "none", banner: props.eventInFocus.images.banner },
        })
            .catch(err => console.log(err))
            .then(API.deleteEventImage(props.eventInFocus.images.thumb, {}))
        window.location.reload(false);
    };

    function bailOnEvent() {
        API.updateUser(props.user._id, { $pull: { attending: { event: props.eventInFocus._id } } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .then(API.updateEvent(props.eventInFocus._id, { $pull: { attendees: { guest: props.user._id } } }))
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload(false);
    };

    return (
        <div id="event" className="d-flex justify-content-center">
            <Container fluid>
                <div className="shadowEvent eventMain">
                    <Row className="mt-3 headerContent mx-0   eventContent d-flex justify-content-center">
                        <Col md={12} id="bannerCol" className="d-flex p-0 justify-content-center">
                            {props.eventInFocus.images.banner !== "none" ? <img id="bannerImage" src={'../../../uploads/eventImage/' + props.eventInFocus.images.banner} /> : <img id="bannerImage" src={placeholder} />}
                            <div id="bannerText" className="text-right" >
                                {editEvent ? <input id="eventNameEl" type="text" value={eventNameUpdate} onChange={handleEventNameChange} placeholder={eventNameUpdate} /> : <h1 id="eventNameEl" className="display-1">{props.eventInFocus.eventName}</h1>}
                                {editEvent ? <input id="briefDetailsEl" type="text" value={eventBriefDetailsUpdate} onChange={handleEventBriefDetailsUpdate} placeholder={eventBriefDetailsUpdate} /> : <h5 id="briefDetailsEl">{props.eventInFocus.briefDetails}</h5>}
                            </div>
                            {editEvent ? <div id="bannerUpload">
                                <h6 className="text-center">Upload a Banner Image </h6>
                                <div className="d-flex flex-column align-items-center">
                                    {props.eventInFocus.images.banner !== "none" ?
                                        <div>
                                            <button className="btn btn3" onClick={removeBannerImage}>Remove Image</button>
                                        </div>
                                        :
                                        <div className="d-flex flex-column align-items-center">
                                            <input type="file" className="" onChange={handleEventImgUploadChange} />
                                            <button className="mt-2 h-50 w-50 btn btn3" onClick={() => props.uploadImage("banner")} >Submit</button>
                                        </div>
                                    }
                                </div>
                            </div> : ""}
                            {editEvent ? <div id="thumbUpload" className="d-flex flex-column align-items-center">
                                {props.eventInFocus.images.thumb !== "none" ? <img id="thumbPlace" src={'../../../uploads/eventImage/' + props.eventInFocus.images.thumb} /> : <img className="img-fluid" id="thumbPlace" src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" />}
                                <h6 className="text-center">Upload a Thumbnail </h6>
                                <div className="d-flex flex-column align-items-center">
                                    {props.eventInFocus.images.thumb !== "none" ?
                                        <div>
                                            <button className="btn btn3" onClick={removeThumbImage}>Remove Image</button>
                                        </div>
                                        :
                                        <div className="d-flex flex-column align-items-center">
                                            <input type="file" className="" onChange={handleEventImgUploadChange} />
                                            <button className="mt-2 h-50 w-50 btn btn3" onClick={() => props.uploadImage("thumb")} >Submit</button>
                                        </div>
                                    }
                                </div>
                            </div> : ""}
                        </Col>
                    </Row>
                    <Row className="eventContent eventBox mx-0 d-flex justify-content-center">
                        <Col md={2} className="my-3 eventBtn d-flex flex-column align-items-center justify-content-around">
                            {eventAuth ?
                                <div className="d-flex flex-column align-items-center w-100">
                                    <button className="my-1 btn btn3" onClick={deleteThisEvent}>Delete Event</button>
                                    <button className="my-1 btn btn3" onClick={editingEvent}>Update</button>
                                </div>
                                : ""}
                            {userIsAttending ?
                                <div className="d-flex flex-column align-items-center">
                                    <p className="m-0">currently attending</p>
                                    <button className="px-4 btn btn3" onClick={bailOnEvent}>Bail...</button>
                                </div>
                                : ""}
                            {!userIsAttending && !eventAuth ?
                                <button className="btn btn3" onClick={handleShow}>Attend</button>
                                : ""}
                            <button onClick={props.toggleAttendees} className="btn btn3" style={props.windowSize < 1350 ? { fontSize: ".7rem", paddingLeft: "5px" } : {}}>Who's Turning Up?</button>
                        </Col>
                        <Col md={3} className="my-3 ">
                            <h3>When its happening</h3>
                            {props.eventInFocus.datesOpen ? (
                                props.eventInFocus.datesOpen.map(item => (
                                    <h6>{item}</h6>
                                ))
                            ) : (<h6>No dates on the calendar yet...</h6>)}
                            {editEvent ? <button onClick={addingDate} className="btn btn3 btn-sm">Add a date</button> : ""}
                            {addDate ? <div className="my-3">
                                <DatePicker
                                    selected={startDate}
                                    dateFormat="eeee MMM dd, yyyy"
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                />
                                <button onClick={submitDate} className="ml-1 btn btn3 btn-sm">+</button>
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
                {/* <Row>


                    <Col md={8} className="my-5 mx-auto" >
                        <div className="card mx-auto" style={{ border: "none", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
                            <div className="card-body ">
                                <h5 className="card-title" style={{ textAlign: "center", opacity: ".8" }}>What We Offer</h5>
                                {eventAuth ?
                                    <button className="btn btn3" onClick={addingMenuItem}>Add Menu Item</button>
                                    : ""}

                                <div style={{ borderTop: "solid", borderColor: "gray" }}>
                                    {props.eventInFocus.menu.map(item =>
                                        <Menuitem
                                            menuItem={item.menuItem}
                                            itemDetails={item.itemDetails}
                                            itemPrice={item.itemPrice}
                                            eventAuth={eventAuth}
                                        />
                                    )}
                                </div>
                                {addMenuItem ? <div id="addingMenuItem">
                                    <Row >
                                        <Col md={3}>
                                            <img className="menuThumb" src="https://cdn.shopify.com/s/files/1/0159/3150/6742/products/10-D-Coaster-1st-FULL-PRINT-Fast-food-pattern-design-funny-illustration_1800x1800.jpg?v=1583063900" alt="food" style={{ borderRadius: "50%", width: "60%", height: "100%", objectFit: "cover" }}></img>
                                        </Col>
                                        <Col md={5} className="my-2">
                                            <div className="card" style={{ border: "none" }}>
                                                <input className="menuInput" onChange={event => setMenuItem(event.target.value)} placeholder="New Item Name"></input>
                                                <input className="menuInput" onChange={event => setItemDetails(event.target.value)} placeholder="New Item Description"></input>
                                            </div>

                                        </Col>
                                        <Col md={3}>
                                            <div className="card mx-0 my-3 float-right" style={{ border: "none" }}>
                                                <input className="menuInput" onChange={event => setItemPrice(event.target.value)} placeholder="$0.00"></input>
                                                <button className="w-25 btn btn1" onClick={submitMenuItem}>Add</button>
                                            </div>

                                        </Col>
                                    </Row>
                                </div> : ""}
                            </div>
                        </div>
                    </Col>

                </Row> */}
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Which days are you turning up?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {props.eventInFocus.datesOpen ? (

                                props.eventInFocus.datesOpen.map((item, index) => (

                                    <div>
                                        <h6 id={"dateItem" + index} className=" d-inline-block">{item}</h6>
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
};

export default Event;
