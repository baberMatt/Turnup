
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
    const [browse, setBrowse] = useState({});
    
    
    
    
    useEffect(()=>{
        API.getEvents()
        .then(res=>{
            setBrowse(res.data)

        })
    },[browse])

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
                    
                    {browse.length ? (
                        browse.map(item=>(
                            <BrowseCard 
                            cardTitle={item.eventName}
                            cardText={item.briefDetails}
                            />
                            
                            
                        ))
                    ) : (<h3>No events for this category</h3>)
                    }
                   
                </div>

                <Row>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <h2 >Makers</h2>
                    </div>
                </Row>
                <Row style={{ bottom: "5rem" }}>
                    <div className="col-4 my-5">
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-5">
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-5">
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </Row>


               


            </Container>
        </div>
    );
}


export default Browse;