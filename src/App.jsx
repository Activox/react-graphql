import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import PhoneForm from "./components/PhoneForm";

import {usePersons} from './persons/usePersons'
import Notify from "./components/Notify";
import LoginForm from "./components/LoginForm";
import { useApolloClient } from "@apollo/client";

function App() {
  const { data, error, loading: isLoading } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(()=> !!localStorage.getItem("phonenumbers-user-token"))
  const client = useApolloClient() 
  if (error) return <span style={{ color: "red" }}>{error}</span>;

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() =>setErrorMessage(null), 3000)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("phonenumbers-user-token")
    client.resetStore()
  }

  return (
    <div className="App">
      <header className="App-header">
        <Notify errorMessage={errorMessage} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>GraphQL + React!</p>
            {data && <Persons persons={data.allPersons} />}
          </div>
        )}
        {token ? <button onClick={logout}>Logout</button> : <LoginForm notifyError={notifyError} setToken={setToken}/>}
        {token &&<PhoneForm notifyError={notifyError} />}
        {token &&<PersonForm notifyError={notifyError} />}
      </header>
    </div>
  );
}

export default App;
