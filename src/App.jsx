import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import PhoneForm from "../components/PhoneForm";

import {usePersons} from '../persons/usePersons'
import Notify from "../components/Notify";

function App() {
  const { data, error, loading: isLoading } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null)
  if (error) return <span style={{ color: "red" }}>{error}</span>;

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() =>setErrorMessage(null), 3000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Notify errorMessage={errorMessage} />
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>GraphQL + React!</p>
            {data && <Persons persons={data.allPersons} />}
          </div>
        )}
        <PhoneForm />
        <PersonForm notifyError={notifyError} />
      </header>
    </div>
  );
}

export default App;
