import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";


function User() {
    const [User, setUser] = useState("");

    return (
        <div id="user" className="d-flex justify-content-center">
            <Container fluid>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src="UserImage"></img>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <p>USERNAME</p>
                        <p>REAL NAME</p>
                        <p>ABOUT</p>
                    </div>
                </div>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-12 d-flex justify-content-center">
                        <p>HOSTED EVENTS</p>
                    </div>
                </div>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <p>CALENDER</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <p>EVENTS ATTENDING</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default User;