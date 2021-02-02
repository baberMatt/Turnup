
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Carousell from '../components/Carousel/Carousel'





function Browse() {
    const [Browse, setBrowse] = useState("");


    return (
        <div>
    <Container fluid></Container>
        <div id="browse" className="d-flex justify-content-center">
            
            <Container fluid>

        <Carousell></Carousell>
            
            </Container>
        </div>
        </div>
    );
}


export default Browse;