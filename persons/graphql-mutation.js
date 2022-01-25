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

export const EDIT_NUMBER = gql`
mutation($name: String!, $phone: String!) {
  editPhoneNumber(name: $name, phone: $phone) {
   id
   name
   phone
   address {
     city
     street
   }
  }
}
`