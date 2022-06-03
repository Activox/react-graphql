import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation getLogin($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;
