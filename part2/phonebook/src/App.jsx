import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newName,
    };
    if (persons.some((e) => e.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(noteObject));
    }

    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNewNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}> {person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
