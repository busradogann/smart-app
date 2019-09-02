import React, {Component} from "react";

import "./_smart-progress.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import runner_1 from "./runner_1.svg";

export default class SmartProgress extends Component {

    clickedAchieved = () => {
        document.getElementsByClassName("progress-bar bg-warning")[0].style.width= "32.1px";
        document.getElementsByClassName("a__achieved")[0].style.color= "#ffffff";
        document.getElementsByClassName("a__active")[0].style.color= "#B7B7B7";
        document.getElementsByClassName("achieved-dote")[0].style.display= "inline-block";
        document.getElementsByClassName("active-dote")[0].style.display= "none";
        document.getElementsByClassName("p__percent")[0].innerHTML= "32.1px";
    };

    clickedActive = () => {
        document.getElementsByClassName("progress-bar bg-warning")[0].style.width= "64.4px";
        document.getElementsByClassName("a__active")[0].style.color= "#ffffff";
        document.getElementsByClassName("a__achieved")[0].style.color= "#B7B7B7";
        document.getElementsByClassName("achieved-dote")[0].style.display= "none";
        document.getElementsByClassName("active-dote")[0].style.display= "inline-block";
        document.getElementsByClassName("p__percent")[0].innerHTML= "64.2px";
    };

    render() {
        return (
            <div className={"smart-progress"}>
                <div>
                    <img src={runner_1} alt=""/>
                </div>
                <div>
                    <p>SMART progress
                        <p className={"p__percent"}>32.1%</p>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <div className={"achieved"} onClick={this.clickedAchieved}>
                            <a href="#" className={"a__achieved"}>Achieved</a>
                            <p className={"achieved-dote"}>.</p>
                        </div>
                        <div className={"active"} onClick={this.clickedActive}>
                            <a href="#" className={"a__active"}>Active</a>
                            <p className={"active-dote"}>.</p>
                        </div>
                    </p>
                </div>
            </div>
        );
    }

}