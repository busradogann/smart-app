import React from "react";

import "./_goals-achieved.scss";

import arrow_down from "./arrow_down.svg";
import runner_1 from "./runner_1.svg"


export default function GoalsAchieved () {
    return (
        <div className={"goals-achieved"}>
            <div className={"item-1"}>
                <p>Goals achieved</p>
                <ul>
                    <li><img src={arrow_down} alt=""/>Market share</li>
                    <li><img src={arrow_down} alt=""/>Customer Service</li>
                    <li><img src={arrow_down} alt=""/>Increase efficiency</li>
                </ul>
            </div>
            <div className={"item-2"}>
                <img src={runner_1} alt=""/>
            </div>
        </div>
    )
}