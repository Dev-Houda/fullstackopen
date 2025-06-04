import React from "react";

const Total = ({ courseParts }) => {
  let total = 0;
  const totalEx = courseParts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    total
  );

  return (
    <div>
      <p>
        <strong>total of {totalEx} exercises</strong>
      </p>
    </div>
  );
};

export default Total;
