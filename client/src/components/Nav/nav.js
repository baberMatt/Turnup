import React, { useState, } from "react";
import "./style.css"


// import UserContext from "../../utils/userContext";

function Nav(props) {
    const [navtabs, setNavtabs] = useState([false, false, false, false]);


    function navTabClick(event) {
        let tabNumb = event.currentTarget.dataset.tab || 0 ;
        let check = tabNumb - 1;
        if (!navtabs[check]) {
            let openNav = [...navtabs]
            openNav[check] = true;
            setNavtabs(openNav)
        }
        else {
            let closeNav = [...navtabs]
            closeNav[check] = false;
            setNavtabs(closeNav);
        }
    }


    return (
        <div id="nav">
            <nav id="tabContainer">
                <div id={"navtab1" + (navtabs[0] ? "isUp" : "")} onClick={navTabClick}  data-tab="1" class="navtab">
                    <a class="navlink" href="#">Home</a>
                </div>
                <div id="navtab2" onClick={navTabClick} style={{}} data-tab="2" class="navtab">
                    <a class="navlink" href="#">Pop Ups</a>
                </div>
                <div id="navtab3" onClick={navTabClick} style={{}} data-tab="3" class="navtab">
                    <a class="navlink" href="#">Ghost Kitchen</a>
                </div>
                <div id="navtab4" onClick={navTabClick} style={{}} data-tab="4" class="navtab">
                    <a class="navlink" href="#">About Us</a>
                </div>

            </nav>

        </div>
    );

}

export default Nav;