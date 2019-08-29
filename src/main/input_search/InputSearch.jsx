import React, {Component} from "react";

import "./_input-search.scss";


export default class InputSearch extends Component {
    state = {
        query: '',
    };

    changeQuery = (event) => {
        this.setState({ query : event.target.value })
    };

    render() {
        return (
            <div className={"input__search"}>
                <input className={"form-control"}
                       type="text"
                       onChange={this.changeQuery}
                       placeholder={"Search"}/>
            </div>
        );
    }
}