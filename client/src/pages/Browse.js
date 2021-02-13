
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Carousell from '../components/Carousel/Carousel'
import BrowseCard from '../components/Browsecard/browseCard'
import right from "../assets/angle-arrow-pointing-to-right.svg"


function Browse(props) {
    const [browse, setBrowse] = useState([]);
    const [sortedFood, setSortedFood] = useState([]);
    const [sortedMaker, setSortedMaker] = useState([]);
    const [browseC, setBrowseC] = useState([]);
    const [index, setIndex] = useState(0)
    const [init, setInit] = useState(false)
    useEffect(() => {
        API.getEvents()
            .then(res => {
                setBrowse(res.data)

            })
    }, [browse]);

    useEffect(() => {
        let food = []
        let maker = []
        browse.map(item => {
            if (item.category.first === "Food") {
                food.push(item)
            } else (maker.push(item))
        })

        let foodCard = food.slice(0, 5)
        let makerCard = maker.slice(0, 5)


        setSortedFood(foodCard)
        setSortedMaker(makerCard)
    }, [browse]);



    return (
        <div id="browsePage">

            <Container fluid>
                <Row >

                    <div className="col-12 ">
                        <Carousell
                        browse={browse}
                        ></Carousell>
                    </div>

                </Row>



                <Row>
                    <div className="col-12" style={{ textAlign: "center", marginTop: "3rem", marginBottom: "2rem" }}>
                        <h2 className="cardCategory">Food</h2>
                    </div>
                </Row>
                
                <div className="netf d-flex justify-content-center">
                    {sortedFood.map(item =>
                    (
                        <BrowseCard 
                            cardTitle={item.eventName}

                            eventString={item.eventString}
                            cardText={item.briefDetails} 
                            cardPhoto={item.photo1}/>

                            
                             

                    )
                    )}

                </div>

                <Row>
                    <div className="col-12" style={{ textAlign: "center",  marginTop: "3rem", marginBottom: "2rem" }}>
                        <h2 className="cardCategory">Makers</h2>
                    </div>
                </Row>

                <div className="netf d-flex justify-content-center">
                        {sortedMaker.map(item =>
                        (
                            <BrowseCard
                                cardTitle={item.eventName}
                                cardText={item.briefDetails} 
                                cardPhoto={item.photo1}
                                />
                        )
                        )}
                </div>
                <Row>
                    <div></div>
                </Row>






            </Container>
        </div>
    );
}


export default Browse;