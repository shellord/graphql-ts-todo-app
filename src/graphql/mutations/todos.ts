import { gql } from '@apollo/client'

export const CREATE_TODO = gql`
  mutation CreateTodo($content: String!) {
    createTodo(content: $content) {
      id
      content
    }
  }
`
export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`
