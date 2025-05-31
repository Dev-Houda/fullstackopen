import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <ul>
      {props.parts.map((part) => (
        <li>
          <Part part={part.name} exercises={part.exercises} />
        </li>
      ))}
    </ul>
  );
};

export default Content;
