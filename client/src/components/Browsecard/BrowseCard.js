import React from "react";

function BrowseCard(props) {
    return (
        <div className="">
            <div className="card item shadowUser" style={{ width: "14vw", borderRadius: "2mm" }}>
                <div className="card-body cardlinks" style={{ backgroundImage: 'url(../../../uploads/eventImage/' + props.cardPhoto + ')', borderRadius: "2mm", WebkitBackgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                    <a className="" href={'/event/' + props.eventString} ><h5 className="card-title smoke">{props.cardTitle}</h5></a>
                    <p className="card-text smoke">{props.cardText}</p>
                </div>
            </div>
        </div>
    );
}

export default BrowseCard;
