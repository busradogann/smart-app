import React from "react";

import "./_welcome-to-smart.scss";


export default function WelcomeToSmart () {
    return (
        <div className={"welcome-to-smart"}>
            <p className={"title__welcome-to-smart"}>Welcome to SMART</p>
            <p className={"description__welcome-to-smart"}>Goal setting and goal management <br/> software for high achievers.</p>
            <button className={"button__get-started"}>Get Started</button>
        </div>
    )
}