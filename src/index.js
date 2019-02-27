// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.

import Border from "./Border/Border";
import style from "./Index/index.css";

// Components.

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className = {style.showBackground}>
            <Border/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));