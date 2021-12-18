import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation setPerson(
    $addPersonName: String!
    $addPersonPhone: String
    $addPersonStreet: String!
    $addPersonCity: String!
  ) {
    addPerson(
      name: $addPersonName
      phone: $addPersonPhone
      street: $addPersonStreet
      city: $addPersonCity
    ) {
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
