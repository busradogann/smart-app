import React from "react";

import "./_profile.scss";
import profile from "./profile.png";


export default function Profile () {
    return (
        <div className={"profile"}>
            <div className={"profile-photo"}>
                <img src={profile} alt="profile"/>
            </div>
            <div>
                <p className={"profile-name"}>Boniface Esanji</p>
            </div>
        </div>
    )
}