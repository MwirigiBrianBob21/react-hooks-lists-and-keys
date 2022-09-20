import React from "react";

function ColorItem(props) {
    return <li style = {{color: props.color }}>{props.color}</li>
}

export default ColorItem;