import React from "react";
import { Button } from 'reactstrap';
// import "./style.css"
import Signup from "../signup/signup"
import img1 from "../../assets/pancakes.jpg"
// import UserContext from "../../utils/userContext";

function BrowseCard(props) {
    console.log(img1)
    
    return (
        <div className="">
            <div className="card item shadowUser" style={{width:"14vw", borderRadius:"5mm" }}>
                <div className="card-body" style={{backgroundImage: `url(${props.cardPhoto})`, borderRadius: "5mm", WebkitBackgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default BrowseCard;
