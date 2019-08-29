import React from "react";

import "./_goals-achieved.scss";

import arrow_down from "./arrow_down.svg";


export default function GoalsAchieved () {
    return (
        <div className={"goals-achieved"}>
            <div className={"goals"}>
                <p>Goals achieved</p>
                <ul>
                    <li><img src={arrow_down} alt=""/>Market share</li>
                    <li><img src={arrow_down} alt=""/>Customer Service</li>
                    <li><img src={arrow_down} alt=""/>Increase efficiency</li>
                </ul>
            </div>
        </div>
    )
}