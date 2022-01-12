import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css"

function Hostevent(props) {
    const [startDate, setStartDate] = useState(new Date())

    useEffect(() => {
        props.setInitDate(startDate)
    }, [startDate])

    const {
        buttonLabel,
        className
    } = props;

    function hostFormSubmit() {
        props.handleHostFormSubmit();
    }

    return (

        <div>

            <Modal id="modalBackground" isOpen={props.modalHost} toggle={props.toggleHost} className={className}>
                <ModalHeader className="py-2" toggle={props.toggleHost}>
                    <h4>Gives us some details about your event.</h4>
                    {props.showWarning ?
                        <h5 className="warning pulse text-center ml-5 mb-0">{props.showWarning}</h5>
                        : <h6>Dont worry, you'll be able to add more info and update this info on the hosted page...</h6>
                    }
                </ModalHeader>
                <ModalBody className="py-2">
                    <div className="d-inline-block">
                        <p className="my-0">Event Name<span className="asterisk">*</span></p>
                        <input className="d-inline styleInput" onChange={event => props.setEventName(event.target.value)} placeholder="Hot Fruit Pies" />
                        <p className="my-0">Event Type<span className="asterisk">*</span></p>
                        <select className="mt-0 mb-2" onChange={event => props.setEventType(event.target.value)} placeholder="Event Type">
                            <option value="Select One">Select One</option>
                            <option value="Pop Up">Pop Up</option>
                            <option value="Ghost Kitchen">Ghost Kitchen</option>
                        </select>
                    </div>
                    <div className="">
                        <p className="my-0">Brief description for the subheader <span className="asterisk">*</span></p>
                        <textarea className="mt-0 mb-2" onChange={event => props.setBriefDetails(event.target.value)} rows="1" cols="75" placeholder="A pie for every fruit"></textarea>
                    </div>
                    <div className="">
                        <p className="my-0">More elaborate details </p>
                        <textarea className="mt-0 mb-2" onChange={event => props.setDetails(event.target.value)} rows="4" cols="75" placeholder="A lot more info about our pies"></textarea>
                    </div>
                    <div className="">
                        <p className="my-0">Main Catergory<span className="asterisk">*</span></p>
                        <select className="mt-0 mb-2" onChange={event => props.setMainCat(event.target.value)} placeholder="Main Category">
                            <option value="Select One">Select One</option>
                            <option value="Food">Food</option>
                            <option value="Maker">Maker</option>
                        </select>
                        <p className="my-0">Sub Catergories</p>
                        <input className="my-1" onChange={event => props.setSubCat1(event.target.value)} placeholder="dessert" />
                        <input className="my-1" onChange={event => props.setSubCat2(event.target.value)} placeholder="handmade" />
                    </div>
                    <div className="">
                        <p className="my-0">Location<span className="asterisk">*</span></p>
                        <input className="mt-0 mb-2" onChange={event => props.setLocation(event.target.value)} placeholder="314 crust st. Cleveland, OH" />
                    </div>
                    <p className="my-0">Intial Date<span className="asterisk">*</span></p>
                    <div className="d-flex my-0">
                        <DatePicker
                            selected={startDate}
                            dateFormat="eeee MMM dd, yyyy"
                            onChange={date => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                        />
                        <p className="text-center m-auto">pick a date, you can add more later</p>
                    </div>
                </ModalBody>
                <ModalFooter className="py-2">
                    <Button className="btn btn3" color="primary" onClick={hostFormSubmit}>Submit</Button>{' '}
                    <Button className="btn btn3" color="secondary" onClick={props.toggleHost}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}


export default Hostevent;
