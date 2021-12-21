import React, { useState, useEffect } from "react";
import "./style.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Eventguest from '../Eventguest/Eventguest.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Attendees(props) {
  const {
    buttonLabel,
    className
  } = props;



  
  return (

    <div>

      <Modal id="attendeesBody" isOpen={props.modalAttendees} toggle={props.toggleAttendees} className={className}>
        <ModalHeader toggle={props.toggleAttendees}>
          <h3>This is who is turning up for...</h3>
          <h1>{props.eventInFocus.eventName}</h1>
        </ModalHeader>
        <ModalBody>
          <Container>
            <Row className="d-flex justify-content-center">
              <Col md={10}>

                {props.eventInFocus.attendees.map(item =>
                   item.guest.hosting.includes(props.eventInFocus._id) ? (
                    <Eventguest
                      eventID={props.eventInFocus._id}
                      host={"host"}
                      Username={item.guest.Username}
                      attending={item.guest.attending}
                    />
                  ) : (
                      <Eventguest
                        eventID={props.eventInFocus._id}
                        dates={item.dates}
                        Username={item.guest.Username}
                        attending={item.guest.attending}
                      />)
                )}
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button className="attendeeButtons" color="primary" >Submit</Button>{' '}
          <Button className="attendeeButtons" color="secondary" onClick={props.toggleAttendees}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div >
  )
}


export default Attendees;