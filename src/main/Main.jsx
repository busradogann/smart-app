import React from "react";

import "./_main.scss";
import "../icons/notification/notification.svg";
import InputSearch from "./input_search/InputSearch";
import Notification from "../icons/notification/Notification";
import SmartPlanning from "./smart_planning/SmartPlanning";
import WeekCalendar from "./week_calendar/WeekCalendar";
import GoalsAchieved from "./goals_achieved/GoalsAchieved";
import SmartProgress from "./smart_progress/SmartProgress";


export default function Main() {
    return (
        <div className={"main"}>
            <div className={"item_1"}>
                <InputSearch />
                <Notification/>
            </div>
            <div className={"item_2"}>
                <SmartPlanning/>
            </div>
            <div className={"item_3"}>
                <WeekCalendar />
            </div>
            <div className={"item_4"}>
                <GoalsAchieved/>
                <SmartProgress/>
            </div>
        </div>
    );
}