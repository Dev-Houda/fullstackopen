import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNewNameChange,
  handleNewNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={handleNewNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNewNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
