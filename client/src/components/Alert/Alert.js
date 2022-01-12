import React from "react";
import "./style.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Alert(props) {

  const {
    buttonLabel,
    className
  } = props;


  return (
    <div>
      <Modal id="signUpBody" isOpen={props.modalAlert} toggle={props.toggleAlert} className={className}>
        <ModalHeader toggle={props.toggleAlert}>
          {props.alert === "welcome" ? <h4>Welcome!!!</h4> : ""}
          {props.alert === "about" ? <h4>You got a pop up? We'll Turnup!</h4> : ""}
          {props.alert === "badLogin" ? <h4>Attention!</h4> : ""}
          {props.alert === "deleteUser" ? <h4>Oh No! We're sorry to see you go...</h4> : ""}
          {props.alert === "deleteEvent" ? <h4>The time has come...</h4> : ""}
        </ModalHeader>
        <ModalBody>
          {props.alert === "welcome" ?
            <h6>So glad you joined us, welcome to your profile page. Feel free to update your bio and add a pic so people know who a little about you. After that feel free to browse our events and see whats going on. If something piques your interest, mark yourself attending. Or if you're here to host your own events, go for it and have your friends sign up so they can attend your event, we love seeing the community grow. Cheers! </h6>
            : ""}
          {props.alert === "about" ?
            <div>
              <h6>Hey there and welcome to Turnup, a top hub for hosting and promoting pop up events. Come on and join the community and from there you can browse, attend and even host your own pop ups. And when the date comes make sure to turn up.</h6>
              <h6>Now that you've got the gist, please know this site is for demostration only. Although you can create a user and host/attend all the events you want, all of the data that is rendering the events is either seed or test data prodived by the developers or previous user that were instructed here to test it. There is no current intent to put this project into production, and therefore none of the events on the page should be considered to be real. </h6>
              <h6>A note from the dev: If you are another developer here to investigate, please do so diligently. This is my first production scale MERN stack application and I have it hosted to be able to have it tested by others and get feed back. Please feel free to do so by opening up an issue in the repo <a href="https://github.com/baberMatt/Turnup">@here</a>. Thanks for your time.</h6>
            </div>
            : ""}
          {props.alert === "badLogin" ?
            <div>
              <h6>You have not entered a incorrect username and password...</h6>
              <img className="img-fluid" src="https://c.tenor.com/hYVsWvkpdrMAAAAC/you-didnt-say-the-magic-word-ah-ah.gif"></img>
            </div>
            : ""}
          {props.alert === "deleteUser" ?
            <div>
              <h6>Are you sure you want to delete your account? This decision will be permanent... however you're always welcome back to make a new account.</h6>
              <button onClick={props.deleteUser} className="btn btn3 editButtons">Delete Me!</button>
            </div>
            : ""}
          {props.alert === "deleteEvent" ?
            <div>
              <h6>Are you sure you want to delete this event? This decision will be permanent... however you're always welcome make another event.</h6>
              <button onClick={props.deleteEvent} className="btn btn3 editButtons">Delete It!</button>
            </div>
            : ""}
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn3" color="secondary" onClick={props.toggleAlert}>Close</Button>
        </ModalFooter>
      </Modal>
    </div >
  )
}


export default Alert;
