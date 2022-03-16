import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Todo {
    id: ID
    content: String
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(content: String!): Todo
  }
`
