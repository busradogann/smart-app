import React, {Component} from "react";

import "./_logout.scss";
import "./logout.svg";


export default class Logout extends Component {

    clickLogout = () => {
        alert("Logging out...");
    };

    render(){
        return(
            <div className={"logout"} onClick={this.clickLogout}>
                <br/>
            </div>
        );
    }
}