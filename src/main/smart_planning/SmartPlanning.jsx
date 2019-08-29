import React from "react";

import "./_smart-planning.scss";

import right_arrow from "./right_arrow.svg";
import cloud from "./cloud.svg";
import graph from "./graph.svg";


export default function SmartPlanning () {
    return (
        <div className={"smart-planning"}>
            <div className={"item-1"}>
                <p className={"p__what-is-smart-planning"}>What is SMART Planning?</p>
                <p className={"p__description"}>Business goals should always be Specific, <br/> Measurable and Achievable.</p>
                <a href="" className={"p__learn-more"}>
                    learn more
                    <img src={right_arrow} className={"right-arrow"} alt=""/>
                </a>
            </div>
            <div className={"item-2"}>
                    <button className={"button__graph"}><img src={graph} alt=""/>Graph</button>
            </div>
            <div className={"item-3"}>
               <button className={"button__cloud"}><img src={cloud} alt=""/>Cloud</button>
            </div>
        </div>
    )
}