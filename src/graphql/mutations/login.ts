import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(authInput: { email: $email, password: $password }) {
      accessToken
    }
  }
`;
