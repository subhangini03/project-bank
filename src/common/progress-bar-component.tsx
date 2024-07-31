import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

let ProgressBarComponent = (props) => {
  let { value, maxValue } = props;
  return (
    // <CircularProgressbar
    //   value={value}
    //   className="Sample"
    //   // styles={buildStyles({
    //   //   // Rotation of path and trail, in number of turns (0-1)
    //   //   rotation: 0.25,

    //   //   // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    //   //   strokeLinecap: "butt",

    //   //   // Text size
    //   //   textSize: "16px",

    //   //   // How long animation takes to go from one percentage to another, in seconds
    //   //   pathTransitionDuration: 0.5,

    //   //   // Can specify path transition in more detail, or remove it entirely
    //   //   // pathTransition: 'none',

    //   //   // Colors
    //   //   pathColor: `rgba(62, 152, 199, ${percent / 100})`,
    //   //   textColor: "#f88",
    //   //   trailColor: "#d6d6d6",
    //   //   backgroundColor: "#3e98c7",
    //   // })}
    //   styles={{
    //     // Customize the root svg element
    //     root: {},
    //     // Customize the path, i.e. the "completed progress"
    //     path: {
    //       // Path color
    //       // stroke: `rgba(62, 152, 199, ${value / maxValue})`,
    //       // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    //       strokeLinecap: "round",
    //       // Customize transition animation
    //       transition: "stroke-dashoffset 0.5s ease 0s",
    //       // Rotate the path
    //       // transform: "rotate(0.25turn)",
    //       transformOrigin: "center center",
    //       strokeWidth: 5,
    //     },
    //     // Customize the circle behind the path, i.e. the "total progress"
    //     trail: {
    //       // Trail color
    //       stroke: "#d6d6d6",
    //       // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    //       strokeLinecap: "round",
    //       // Rotate the trail
    //       // transform: "rotate(0.25turn)",
    //       transformOrigin: "center center",
    //       strokeWidth: 5,
    //     },
    //     // Customize background - only used when the `background` prop is true
    //     background: {
    //       fill: "#3e98c7",
    //     },
    //   }}
    // />
    <CircularProgressbar value={value} maxValue={maxValue} />
  );
};

export default ProgressBarComponent;
