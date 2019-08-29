import React from "react";

import "./_week-calendar.scss";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";


export default function WeekCalendar () {
    return (
        <div className={"week-calendar"}>
            <mobiscroll.Form>
                <mobiscroll.FormGroup>
                    <label>
                        <mobiscroll.Calendar
                            weeks={1}
                            display="inline"
                            placeholder="Please Select..."
                        >
                            <input type="hidden" />
                        </mobiscroll.Calendar>
                    </label>
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        </div>
    )
}