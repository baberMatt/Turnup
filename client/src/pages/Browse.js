
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousell from '../components/Carousel/Carousel'
import BrowseCard from '../components/Browsecard/browseCard'
import right from "../assets/angle-arrow-pointing-to-right.svg"
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

function Browse(props) {
    const [browse, setBrowse] = useState([]);
    const [sortedFood, setSortedFood] = useState([]);
    const [sortedMaker, setSortedMaker] = useState([]);
    const [browseC, setBrowseC] = useState([]);
    const [index, setIndex] = useState(0);
    const [init, setInit] = useState(false);
    const [foodCount, setFoodCount] = useState({start:"", fin:""});
    const [makerCount, setMakerCount] = useState({start:"", fin:""});
    const [foodBackDisplay, setFoodBackDisplay] = useState("");
    const [foodFwdDisplay, setFoodFwdDisplay] = useState("");
    const [makerBackDisplay, setMakerBackDisplay] = useState("");
    const [makerFwdDisplay, setMakerFwdDisplay] = useState("");

    useEffect(() => {
        API.getEvents()
            .then(res => {
                
                setBrowse(res.data)

            })
    }, []);

    useEffect(() => {
        let food = []
        let maker = []
        browse.map(item => {
            if (item.category.first === "Food") {
                food.push(item)
            } else (maker.push(item))
        })
        setSortedFood(food)
        setSortedMaker(maker)
    }, [browse]);

    useEffect(() => {
        setFoodCount({start: 0, fin: 5})
    }, [sortedFood]);

    useEffect(() => {
        setMakerCount({start: 0, fin: 5})
    }, [sortedMaker]);


    function slideFoodUp() {
        let count = {...foodCount};
        if ( (foodCount.fin >= sortedFood.length) ) {
            setFoodFwdDisplay("none");
            return;
        }
        setFoodBackDisplay("");
        setFoodCount({ start: count.start + 5, fin: count.fin + 5});
        
    }

    function slideFoodDown() {
        let count = {...foodCount};
        if ( (foodCount.start <= 0) ) {
            setFoodBackDisplay("none");
            return;
        }
        setFoodFwdDisplay("");
        setFoodCount({ start: count.start - 5, fin: count.fin - 5});
       
    }

    function slideMakerUp() {
        let count = {...makerCount};
        if ( (makerCount.fin >= sortedMaker.length) ) {
            setMakerFwdDisplay("none");
            return;
        }
        setMakerBackDisplay("");
        setMakerCount({ start: count.start + 5, fin: count.fin + 5});
    }

    function slideMakerDown() {
        let count = {...makerCount};
        if ( (makerCount.start <= 0) ) {
            setMakerBackDisplay("none");
            return;
        }
        setMakerFwdDisplay("");
        setMakerCount({ start: count.start - 5, fin: count.fin - 5});
    }


    return (
        <div id="browsePage">
            <Container fluid className="m-0">
                <Row >

                    <div className="col-12 browseMain">
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
                <Row>
                    <Col md={1} className="d-flex">
                        <img className="arrowIcon m-auto" style={{display: foodBackDisplay}} onClick={slideFoodDown} src={leftArrow} ></img>
                    </Col>
                    <Col md={10}>
                        <div className="netf d-flex justify-content-center">
                            {sortedFood.slice(foodCount.start, foodCount.fin).map(item =>
                                <BrowseCard
                                    cardTitle={item.eventName}
                                    eventString={item.eventString}
                                    cardText={item.briefDetails}
                                    cardPhoto={item.images.thumb} />
                            )}
                        </div>
                    </Col>
                    <Col md={1} className="d-flex">
                        <img className="arrowIcon m-auto" style={{display: foodFwdDisplay}} onClick={slideFoodUp} src={rightArrow}></img>
                    </Col>

                </Row>
                <Row>
                    <div className="col-12" style={{ textAlign: "center", marginTop: "3rem", marginBottom: "2rem" }}>
                        <h2 className="cardCategory">Makers</h2>
                    </div>
                </Row>
                <Row>
                    <Col md={1} className="d-flex">
                        <img className="arrowIcon m-auto" style={{display: makerBackDisplay}} onClick={slideMakerDown} src={leftArrow} ></img>
                    </Col>
                    <Col md={10}>
                        <div className="netf d-flex justify-content-center">
                            {sortedMaker.slice(makerCount.start, makerCount.fin).map(item =>
                                <BrowseCard
                                    cardTitle={item.eventName}
                                    eventString={item.eventString}
                                    cardText={item.briefDetails}
                                    cardPhoto={item.images.thumb}
                                />
                            )}
                        </div>
                    </Col>
                    <Col md={1} className="d-flex">
                        <img className="arrowIcon m-auto" style={{display: makerFwdDisplay}} onClick={slideMakerUp} src={rightArrow}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Browse;