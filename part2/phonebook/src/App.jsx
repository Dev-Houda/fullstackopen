import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((e) => e.name === newName)) {
      let personId = persons.find((person) => person.name === newName);
      let updatedEntry = Object.assign(personId, personObject);
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService.update(personId.id, personObject).then(() => {
          setPersons(
            persons.map((person) =>
              person.name === newName ? updatedEntry : person
            )
          );
          console.log(`User ${newName} phone number updated`);
          setNotification(`Updated ${personObject.name} phone number.`);
          setTimeout(() => {
            setNotification("");
          }, 5000);
        });
      }
    } else {
      personService.create(personObject).then((response) => {
        setPersons(persons.concat(response.data));
      });
    }

    setNewName("");
    setNewNumber("");
    setNotification(`Added ${personObject.name}.`);
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  const deletePerson = (id) => {
    personService.del(id).then((response) => {
      confirm(`Delete ${response.data.name}`);
      console.log("deleted");
      window.location.reload();
    });
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      {notification ? <div className="notification">{notification}</div> : ""}
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
