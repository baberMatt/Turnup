import React, { useState, useEffect } from "react";
import "./style.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';





function Signup(props) {
  const {
    buttonLabel,
    className
  } = props;

  function signUpFormSubmit() {
    props.handleSingUpSubmit();
    props.toggleSignUp();
  }


  return (

    <div>

      <Modal  id="signUpBody" isOpen={props.modalSignUp} toggle={props.toggleSignUp} className={className}>
        <ModalHeader toggle={props.toggleSignUp}>
          <h4>Welcome to Turnup</h4>
          <h6>sign up and see what its all about!</h6>
        </ModalHeader>
        <ModalBody>
          <div className="">
            <input onChange={event => props.setUserName(event.target.value)} type="text" username="username" id="username" placeholder="Your User Name" />
          </div>
          <div className="">
            <input onChange={event => props.setEmail(event.target.value)} type="email" name="email" id="email" placeholder="Your Email" />
          </div>
          <div className="">
            <input onChange={event => props.setPassword(event.target.value)} type="password" name="pass" id="pass" placeholder="Password" />
          </div>
          <div className="">
            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
          </div>
          {/* <div className="">
            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in </label>
          </div> */}
        </ModalBody>
        <ModalFooter>
          <Button className="signupButtons" color="primary" onClick={props.handleSingUpSubmit}>Submit</Button>{' '}
          <Button className="signupButtons" color="secondary" onClick={props.toggleSignUp}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div >
  )
}


export default Signup;
