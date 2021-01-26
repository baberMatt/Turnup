import React, { useState, useEffect } from "react";
import "./style.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



//const isAuthenticated = require("../../../../config/middleware/isAuthenticated");


function Signup(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (

    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div class="main">

            <section class="signup">
              <div class="container">
                <div class="signup-content">
                  <div class="signup-form">
                    <h2 class="form-title">Sign up</h2>
                    <form method="POST" class="register-form" id="register-form">
                      <div class="form-group">
                        <label for="name"></label>
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                      </div>
                      <div class="form-group">
                        <label for="email"></label>
                        <input type="email" name="email" id="email" placeholder="Your Email" />
                      </div>
                      <div class="form-group">
                        <label for="pass"></label>
                        <input type="password" name="pass" id="pass" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <label for="re-pass"></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                      </div>
                      <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in </label>
                      </div>
                      <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                      </div>
                    </form>
                  </div>
                  <div class="signup-image">
                  </div>
                </div>
              </div>
            </section>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div >
  )
}


export default Signup;