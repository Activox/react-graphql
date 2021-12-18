import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query getAllPersons {
    allPersons {
      id
      name
      phone
      address {
        city
        street
      }
    }
  }
`;

export const FIND_A_PERSON = gql`
  query findAPerson($name: String!) {
    findPerson(name: $name) {
      id
      name
      phone
      address {
        city
        street
      }
    }
  }
`;