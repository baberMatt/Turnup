import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/api/API.js";
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// on page load, get user from params and call db.getall
// setUser to res
// 



function User(props) {
    
    
    const [attendingEvents, setAttendingEvents] = useState("")
    let { Username } = useParams();
    console.log(props)

    // useEffect(() => {
    //     API.getUser({ Username: props.userName}).then(res => {

    //     setUser(res.data);
    //     console.log("effect rendered")
         
    //     })
    // }, [])

    // console.log(user)

    return (
        <div id="userPage" className="d-flex justify-content-center">
            <Container fluid>
                <div className="Row d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content">
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" id="profileImage"></img>
                    </div>

                    <div className="col-md-8 d-flex justify-content">
                        <div className="Row d-flex justify-content">
                            <div className="col-md-12 d-flex justify-content-center">
                                <div>
                                    <h3>{props.user.firstName}</h3>
                                    <h3>{props.user.lastName}</h3>
                                    <h3>ABOUT ME</h3>
                                    <p>{props.user.about}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="Row d-flex justify-content">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div>
                            <h1>MY EVENTS</h1>
                        </div>
                    </div>
                </div>
                <div className="Row d-flex justify-content">
                    <div className="col-md-12 d-flex justify-content">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Lobortis feugiat vivamus at augue eget arcu dictum varius. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Imperdiet dui accumsan sit amet nulla facilisi morbi. Ipsum consequat nisl vel pretium lectus quam. Morbi tristique senectus et netus et malesuada fames ac. Nam aliquam sem et tortor consequat id porta nibh.</p>
                        </div>
                    </div>
                </div>
                <div className="Row d-flex justify-content">
                    <div className="col-md-6 d-flex justify-content">
                        <div>
                            <h1>CALENDER</h1>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content">
                        <div>
                            <h1>EVENTS ATTENDING</h1>
                        </div>
                    </div>
                </div>
                <div className="Row d-flex justify-content">
                    <div className="col-md-6 d-flex justify-content">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Lobortis feugiat vivamus at augue eget arcu dictum varius. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Imperdiet dui accumsan sit amet nulla facilisi morbi. Ipsum consequat nisl vel pretium lectus quam. Morbi tristique senectus et netus et malesuada fames ac. Nam aliquam sem et tortor consequat id porta nibh.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content">
                        <div>
                            <ul>
                                <li>
                                    <h3>EVENT 1</h3>
                                </li>
                                <li>
                                    <h3>EVENT 2</h3>
                                </li>
                                <li>
                                    <h3>EVENT 3</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default User;