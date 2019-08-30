import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import MainRight from "./main-right/MainRight";


export default function App() {
  return (
      <div className={"background"}>
        <div className={"container"}>
          <div className={"body"}>
            <div className={"sidebar"}>
              <Sidebar />
            </div>
            <div className={"main"}>
              <Main />
            </div>
            <div className={"main-right"}>
              <MainRight/>
            </div>
          </div>
        </div>
      </div>
  );
}