import React from "react";

const Total = ({ courseParts }) => {
  let total = 0;

  courseParts.map((part) => {
    total += part.exercises;
  });

  return (
    <div>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

export default Total;
