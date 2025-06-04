import React from "react";
import Part from "./Part";

const Content = ({ courseParts }) => {
  console.log(courseParts);
  return (
    <div>
      {courseParts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
