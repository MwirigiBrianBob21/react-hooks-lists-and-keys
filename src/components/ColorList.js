import React from "react";
import ColorItem from "./ColorItem"

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  // Using array.map method to change the strings to array of JSX elements

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />
    // return <li key ={color} style={{color: color}}>{color}</li>
  });
////// Very important
  // the key prop allows React internally to keep track of each element in the array of JSX

  // Anytime you are creating an array of JSX elements, you must use the key prop

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>

        {colorElements}
        {/* The code below was before we used .map method */}
        {/* <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li> */}
      </ol>
    </div>
  );
}

export default ColorList;
