import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../login/graphql-queries";

function LoginForm({ notifyError, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data }] = useMutation(LOGIN, {
    onError: (error) => {
      error.graphQLErrors[0].message;
    },
  });

  useEffect(() => {
    if (data) {
      const token = data.login.value;
      setToken(token);
      localStorage.setItem("phonenumbers-user-tokne", token);
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ variables: { username, password } });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          username{" "}
          <input
            value={username}
            onChange={({ target }) => {
              setUsername(target.value);
            }}
          />
        </div>
        <div>
          password{" "}
          <input
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
    notifyError: PropTypes.func.isRequired,
    setToken: PropTypes.func.isRequired,
};

export default LoginForm;
