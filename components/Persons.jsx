import { useLazyQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";

import {FIND_A_PERSON} from "../persons/graphql-queries"

const Persons = ({ persons }) => {
  const [getPerson, result] = useLazyQuery(FIND_A_PERSON);
  const [person, setPerson] = useState(null);

  const showPerson = (name) => {
    getPerson({ variables: { name: name } });
  };

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  if (person) {
    return (
      <div>
        <h3>{person.name}</h3>
        <div>ID: {person.id}</div>
        <div>
          Addres: {person.address.street}, {person.address.city}{" "}
        </div>
        <div>Phone Number: {person.phone}</div>
        <button onClick={() => setPerson(null)}>Close</button>
      </div>
    );
  }

  if (persons === null) return null;

  return (
    <div>
      <h2>List of Persons</h2>
      {persons.map((person) => (
        <div
          key={person.id}
          onClick={() => {
            showPerson(person.name);
          }}
        >
          {person.name}
        </div>
      ))}
    </div>
  );
};

export default Persons;
