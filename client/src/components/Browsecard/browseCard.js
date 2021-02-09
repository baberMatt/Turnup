import React from "react";
import { Button } from 'reactstrap';
// import "./style.css"
import Signup from "../signup/signup"

// import UserContext from "../../utils/userContext";

function BrowseCard(props) {

    return (
        <div className="my-5">
            <div className="card item" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                </div>
            </div>
        </div>
    );
}

export default BrowseCard;
