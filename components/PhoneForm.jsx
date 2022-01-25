import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_NUMBER } from "../persons/graphql-mutation";

const PhoneForm = () => {
  const [name, setName] =  useState('')
  const [phone, setPhone] = useState('')
  const [changeNumber]=useMutation(EDIT_NUMBER)

  const handleSubmit = (e) => {
    e.preventDefault();

    changeNumber({
      variables: {
        name,
        phone
      },
    });

    setName('')
    setPhone('')
  };

  return (
    <div>
      <h2>Edit Phone Person</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input placeholder="Name" id="name" value={name} onChange={ evt => setName(evt.target.value)} />
        <input placeholder="Phone" id="phone" value={phone} onChange={evt => setPhone(evt.target.value)} />
        <button>Change Phone</button>
      </form>
    </div>
  );
};

export default PhoneForm;
