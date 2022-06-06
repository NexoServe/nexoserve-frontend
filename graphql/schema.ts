import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Link {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [User]
  }

  type User {
    id: String
    email: String
    image: String
    role: Role
    links: [Link]
  }

  enum Role {
    ADMIN
    USER
  }

  type Query {
    links: [Link]!
    users: [User]!
  }
`;
