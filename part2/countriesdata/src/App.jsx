import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);


  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setValue(value);
  };

  let filteredList = countries.filter(country =>
    country.name.toUpperCase().includes(value.toUpperCase())
  );

  if (value.length === 0 || filteredList.length === 0) {
    return <div />;
  }

  if (filteredList.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (listLength > 1) {
    return filteredList.map(country => (
      <div key={country.name}>
        {country.name}{" "}
        <button value={country.name} onClick={setFilterUsingButton}>
          {" "}
          show{" "}
        </button>
      </div>
    ));
  } else {
    return (
      <div>
        <CountryData country={filteredList[0]} />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      {countries.map((country) => {
        if (country.name.common.toUpperCase() === value.toUpperCase()) {
          <pre>{JSON.stringify(country.name.common, null, 2)}</pre>;
        } else {
          <p>Too many matches, specify another filter</p>;
        }
      })}
    </div>
  );
};

/*const App = () => {
  const [value, setValue] = useState("");
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    console.log("effect run, currency is now", currency);

    // skip if currency is not defined
    if (currency) {
      console.log("fetching exchange rates...");
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          setRates(response.data.rates);
        });
    }
  }, [currency]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setCurrency(value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </div>
  );
};*/

export default App;
