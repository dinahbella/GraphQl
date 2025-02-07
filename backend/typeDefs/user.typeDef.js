const { gql } = require("@apollo/client");

const userTypeDef = gql`
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
  }

  type Query {
    users: [User!]
    authUser: User
    user(userId: ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    Login(input: LoginInput!): User
    logOut: LogoutResponse
  }
  input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
  type LogoutResponse {
    message: String!
  }
`;
