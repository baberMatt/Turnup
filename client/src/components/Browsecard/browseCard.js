import React from "react";
import { Button } from 'reactstrap';
// import "./style.css"
import Signup from "../signup/signup"

// import UserContext from "../../utils/userContext";

function BrowseCard(props) {

    return (
        <div className="">
            <div className="card item shadowUser" style={{width:"14vw", borderRadius:"5mm"}}>
                <div className="card-body">
                    <a href={'/event/' + props.eventString } ><h5 className="card-title">{props.cardTitle}</h5></a>
                    <p className="card-text">{props.cardText}</p>
                </div>
            </div>
        </div>
    );
}

export default BrowseCard;
