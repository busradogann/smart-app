import React from "react";

import "./_main-right.scss";

import Profile from "./profile/Profile";
import Woman from "./woman/Woman";
import WelcomeToSmart from "./welcome_to_smart/WelcomeToSmart";


export default function MainRight () {
    return (
        <div className={"main-right"}>
            <div className={"item-1"}>
                <Profile />
            </div>
            <div className={"item-2"}>
                <Woman />
            </div>
            <hr/>
            <div className={"item-3"}>
                <WelcomeToSmart/>
            </div>
        </div>
    )
}