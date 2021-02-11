
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Carousell from '../components/Carousel/Carousel'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/pancakes.jpg'
import BrowseCard from '../components/Browsecard/browseCard'



function Browse(props) {
    const [browse, setBrowse] = useState([]);
    const [sortedFood, setSortedFood] = useState([]);
    const [sortedMaker, setSortedMaker] = useState([]);


    useEffect(() => {
        API.getEvents()
            .then(res => {
                setBrowse(res.data)

            })
    }, [browse])


    return (
        <div id="browsePage">

            <Container fluid>
                <Row >
                    <div className="col-12">
                        <Carousell></Carousell>
                    </div>

                </Row>



                <Row>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <h2 >Food</h2>
                    </div>
                </Row>

                <div className="netf">


                    {browse.map(item =>
                        item.category.first === "Food" ? (
                            <BrowseCard
                                cardTitle={item.eventName}
                                cardText={item.briefDetails} />
                        ) : ("")
                    )}


                </div>

                <Row>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <h2 >Makers</h2>
                    </div>
                </Row>
                <Row style={{ bottom: "5rem" }}>
                    {browse.map(item =>
                        item.category.first === "Maker" ? (
                            <BrowseCard
                                cardTitle={item.eventName}
                                cardText={item.briefDetails} />
                        ) : ("")
                    )}
                </Row>





            </Container>
        </div>
    );
}


export default Browse;