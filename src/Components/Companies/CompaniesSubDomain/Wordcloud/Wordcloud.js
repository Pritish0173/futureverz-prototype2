import "d3-transition";
// import { select } from "d3-selection";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import "./wordcloud.css";
import data from "./words";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// function getCallback(callback) {
//   return function (word, event) {
//     const isActive = callback !== "onWordMouseOut";
//     const element = event.target;
//     const text = select(element);
//     text
//       .on("click", () => {
//         if (isActive) {
//           window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
//         }
//       })
//     //   .transition()
//     //   .attr("background", "white")
//     //   .attr("font-size", isActive ? "300%" : "100%")
//     //   .attr("text-decoration", isActive ? "underline" : "none");
//   };
// }

const callbacks = {
  getWordColor: (word) => (word.value > 150 ? "orange" : "purple"),
  getWordTooltip: (word) =>
    `The subdomain "${word.text}" is accelerating by ${word.value}.`,
  // onWordClick: getCallback("onWordClick"),
  // onWordMouseOut: getCallback("onWordMouseOut"),
  // onWordMouseOver: getCallback("onWordMouseOver")
};

const options = {
    rotations: 3,
    rotationAngles: [0, 0],
    fontSizes: [10, 40],
  };

// const size = [800, 400];

function Wordcloud({domain}) {

  let worddata = data.filter(word => word.domain===domain);

  return (
        <ReactWordcloud callbacks={callbacks} words={worddata} options={options} />
  );

}

export default Wordcloud;