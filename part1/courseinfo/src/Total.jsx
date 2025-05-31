import React from "react";
import Part from "./Part";

const Total = (props) => {
  let total = 0;

  props.parts.map((part) => {
    total += part.exercises;
  });

  return (
    <div>
      <p>Number of exercises: {total} </p>
    </div>
  );
};

export default Total;
