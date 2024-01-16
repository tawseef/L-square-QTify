/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import "./button.css";

function button({children}){
    return (<div>
    <button className="feedbackButton">
    Give Feedback
    </button>

    </div>);
}

export default button;