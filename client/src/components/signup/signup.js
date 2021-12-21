import React, { useState, useEffect, useRef } from "react";
import "./style.css"
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from "react-bootstrap/Overlay";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';





function Signup(props) {

  const [show, setShow] = useState(false);
  const target = useRef(null);
  

  useEffect(() => {
    if (props.showWarning === "Try another password...") {
      setShow(!show)
      setTimeout(() => {
        setShow(show)
      },  2000);
    }

  }, [props.showWarning])


  const {
    buttonLabel,
    className
  } = props;

  return (

    <div>

      <Modal id="signUpBody" isOpen={props.modalSignUp} toggle={props.toggleSignUp} className={className}>
        <ModalHeader toggle={props.toggleSignUp}>
          <h4>Welcome to Turnup</h4>
          <h6>sign up and see what its all about!</h6>
        </ModalHeader>
        <ModalBody>
          <div className="">
            <p className="mt-2 mb-0">User Name<span className="asterisk"> *</span></p>
            <input onChange={e => props.setUserName(e.target.value)} type="text" username="username" id="username" className="m-0" placeholder="theDude" />
          </div>
          <div className="">
            <p className="mt-2 mb-0">Email Address<span className="asterisk"> *</span></p>
            <input onChange={e => props.setEmail(e.target.value)} type="email" name="email" id="email" className="m-0" placeholder="jLebowksi@gmail.com" />
          </div>
          <div className="">

            <p className="mt-2 mb-0 inline-block" ref={target} onClick={() => setShow(!show)}>Password<span className="asterisk"> *</span></p>
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}
                style={{
                  width: "30%",
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}>
                   password must inclued at least 1 uppercase, 1 lowercase, 1 number and 1 symbole ( !@#$%^&* )
                </Tooltip>
              )}
            </Overlay>

            <input onChange={e => props.setPassword(e.target.value)} type="password" name="pass" id="pass" className="m-0" placeholder="*******" />
          </div>
          <div className="">
            <p className="mt-2 mb-0">Confirm password<span className="asterisk"> *</span></p>
            <input onChange={e => props.setPassConfirm(e.target.value)} type="password" name="re_pass" id="re_pass" className="m-0" placeholder="********" />
          </div>
          <div className="mt-3">
            {props.showWarning ?
              <h4 className="warning pulse text-center mb-0">{props.showWarning}</h4>
              : <h4 className="mb-0">{'\u00A0'}</h4>}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn3" color="primary" onClick={props.handleSignUpSubmit}>Submit</Button>{' '}
          <Button className="btn btn3" color="secondary" onClick={props.toggleSignUp}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div >
  )
}


export default Signup;
