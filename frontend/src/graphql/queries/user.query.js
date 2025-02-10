import { gql } from "@apollo/client";

export const GET_AUTH_USER = gql`
  query GetAuthUser {
    authUser {
      _id
      name
      username
      profilePicture
    }
  }
`;
