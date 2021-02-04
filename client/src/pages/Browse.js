
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Carousell from '../components/Carousel/Carousel'





function Browse() {
    const [Browse, setBrowse] = useState("");


    return (
        <div>

            <Container fluid>
                <Row >
                    <div className="col-12">
                        <Carousell></Carousell>
                    </div>

                </Row>



                <Row>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <h2 >Genre 1</h2>
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

                <Row>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <h2 >Genre 1</h2>
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