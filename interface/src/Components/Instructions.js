import React from "react";
import classes from './instruction.module.css'
const Instructions = () => {
  const instructions = {
    iPhone: [
      "open the camera app",
      "face your rear camera towards QR Code",
      "Tap the notification to open the link associated with the QR code.",
    ],
    android: [
      "open google app",
      "click on the camera icon on right of search bar",
      "face your rear camera towards QR Code",
    ],
  };

  const instElem = Object.keys(instructions).map((device) => {
    return (
      <div className={classes.instHolder}>
        <h3>{device}</h3>
        <ul>
          {instructions[device].map((instr) => {
            return <li>{instr}</li>;
          })}
        </ul>
      </div>
    );
  });
  return instElem;
};
export default Instructions;
