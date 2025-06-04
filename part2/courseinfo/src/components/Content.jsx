import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = ({ courseParts }) => {
  console.log(courseParts);
  return (
    <div>
      {courseParts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total courseParts={courseParts} />
    </div>
  );
};

export default Content;
