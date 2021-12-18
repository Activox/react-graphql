import React from "react";
import { useMutation } from "@apollo/client";
import { useFormFields } from "../hooks/useFormFields";
import { ALL_PERSONS } from "../persons/graphql-queries";
import { CREATE_PERSON } from "../persons/graphql-mutation";

const PersonForm = ({notifyError}) => {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    phone: "",
    street: "",
    city: "",
  });

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (err)=>{
      notifyError(err.graphQLErrors[0].message)
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({
      variables: {
        addPersonName: fields.name,
        addPersonPhone: fields.phone,
        addPersonStreet: fields.street,
        addPersonCity: fields.city,
      },
    });

    handleFieldChange({
      name: "",
      phone: "",
      street: "",
      city: "",
    });
  };

  return (
    <div>
      <h2>Create new Person</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          placeholder="Name"
          id="name"
          value={fields.name}
          onChange={handleFieldChange}
        />
        <input
          placeholder="Phone"
          id="phone"
          value={fields.phone}
          onChange={handleFieldChange}
        />
        <input
          placeholder="City"
          id="city"
          value={fields.city}
          onChange={handleFieldChange}
        />
        <input
          placeholder="Street"
          id="street"
          value={fields.street}
          onChange={handleFieldChange}
        />
        <button>Add Person</button>
      </form>
    </div>
  );
};

export default PersonForm;
