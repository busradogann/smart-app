import React from "react";

import "./_sidebar.scss";

import ThinkingMan from "../icons/thinking_man/ThinkingMan";
import Homelink from "../sidebar/homelink/Homelink";
import Envelope from "../icons/envelope/Envelope";
import Clock from "../icons/clock/Clock";
import Calendar from "../icons/calendar/Calendar";
import Logout from "../icons/logout/Logout";


export default function Sidebar () {
    return (
        <div className={"side"}>
            <div className={"item-1"}>
                <ThinkingMan />
            </div>
            <div className={"item-2"}>
                <Homelink />
                <Envelope />
                <Clock />
                <Calendar />
            </div>
            <div className={"item-3"}>
                <Logout />
            </div>
        </div>
    )
}