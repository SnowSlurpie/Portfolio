import React from "react";
function pre(props) {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default pre