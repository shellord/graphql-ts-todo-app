import { gql } from '@apollo/client'

export const TODOS = gql`
  query AllTodos {
    todos {
      id
      content
    }
  }
`
