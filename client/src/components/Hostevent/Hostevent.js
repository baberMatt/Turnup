import React, { useState, useEffect } from "react";
import "./style.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';





function Hostevent(props) {
    const {
        buttonLabel,
        className
    } = props;

    function hostFormSubmit() {
        


        if ( (props.eventType === "Select One") || ( props.eventType === "" ) ) {
            alert("please select a event type")
            return;
        }

        if  ( (props.mainCat === "Select One") || (props.mainCat === "") ){
            alert("please select a category")
            return;
        }

        props.handleHostFormSubmit();
        props.toggleHost();
    }


    return (

        <div>

            <Modal id="modalBackground" isOpen={props.modalHost} toggle={props.toggleHost} className={className}>
                <ModalHeader toggle={props.toggleHost}>
                    <h4>Gives us some details about your event.</h4>
                    <h6>Dont worry, you'll be able to add more info likes dates on the hosted page...</h6>
                </ModalHeader>
                <ModalBody>
                    <div className="d-inline-block">
                        <input className="styleInput" onChange={event => props.setEventName(event.target.value)} placeholder="Event Name" />
                        <select onChange={event => props.setEventType(event.target.value)} placeholder="Event Type">
                            <option value="Select One">Select One</option>
                            <option value="Pop Up">Pop Up</option>
                            <option value="Ghost Kitchen">Ghost Kitchen</option>
                        </select>
                    </div>
                    <div className="">
                        <textarea onChange={event => props.setBriefDetails(event.target.value)} rows="1" cols="75">Brief description here</textarea>
                    </div>
                    <div className="">
                        <textarea onChange={event => props.setDetails(event.target.value)} rows="4" cols="75">Brief description here</textarea>
                        
                    </div>
                    <div className="">
                        <select onChange={event => props.setMainCat(event.target.value)} placeholder="Main Category">
                            <option value="Select One">Select One</option>
                            <option value="Food">Food</option>
                            <option value="Maker">Maker</option>
                        </select>
                        <input onChange={event => props.setSubCat1(event.target.value)} placeholder="Sub Category" />
                        <input onChange={event => props.setSubCat2(event.target.value)} placeholder="Sub Category" />
                    </div>
                    <div className="">
                        <input onChange={event => props.setLocation(event.target.value)} placeholder="Location" />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="hostingButtons" color="primary" onClick={hostFormSubmit}>Submit</Button>{' '}
                    <Button className="hostingButtons"  color="secondary" onClick={props.toggleHost}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}


export default Hostevent;
