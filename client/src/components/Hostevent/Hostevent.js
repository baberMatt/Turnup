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

            <Modal isOpen={props.modalHost} toggle={props.toggleHost} className={className}>
                <ModalHeader toggle={props.toggleHost}></ModalHeader>
                <ModalBody>
                    <div class="d-inline-block">
                        <input onChange={event => props.setEventName(event.target.value)} placeholder="Event Name" />
                        <select onChange={event => props.setEventType(event.target.value)} placeholder="Event Type">
                            <option value="Select One">Select One</option>
                            <option value="Pop Up">Pop Up</option>
                            <option value="Ghost Kitchen">Ghost Kitchen</option>
                        </select>
                    </div>
                    <div class="">
                        <textarea onChange={event => props.setBriefDetails(event.target.value)} rows="1" cols="75">Brief description here</textarea>
                    </div>
                    <div class="">
                        <textarea onChange={event => props.setDetails(event.target.value)} rows="4" cols="75">Brief description here</textarea>
                        
                    </div>
                    <div class="">
                        <select onChange={event => props.setMainCat(event.target.value)} placeholder="Main Category">
                            <option value="Select One">Select One</option>
                            <option value="Food">Food</option>
                            <option value="Maker">Maker</option>
                        </select>
                        <input onChange={event => props.setSubCat1(event.target.value)} placeholder="Sub Category" />
                        <input onChange={event => props.setSubCat2(event.target.value)} placeholder="Sub Category" />
                    </div>
                    <div class="">
                        <input onChange={event => props.setLocation(event.target.value)} placeholder="Location" />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={hostFormSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={props.toggleHost}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}


export default Hostevent;
