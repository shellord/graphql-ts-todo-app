import {
  AllTodosDocument,
  useAllTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} from '@/types/generated'
import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'

import Layout from '@/components/layout/Layout'
import TodoItem from '@/components/todo/TodoItem'

const Home: NextPage = () => {
  const { data, loading, error } = useAllTodosQuery()
  const [createTodo] = useCreateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [todoText, setTodoText] = useState('')

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!</Text>

  const onTodoAddHandler = () => {
    createTodo({
      variables: {
        content: todoText,
      },
      refetchQueries: [{ query: AllTodosDocument }],
    })
  }

  const onDeleteTodoHandler = (id: string) => {
    deleteTodo({
      variables: {
        deleteTodoId: id,
      },
      refetchQueries: [{ query: AllTodosDocument }],
    })
  }
  return (
    <Layout>
      <Box mt='10'>
        <Box>
          <Text fontSize='xl'>Add New Todo</Text>
          <Divider my='3' />

          <Flex>
            <Input onChange={(e) => setTodoText(e.target.value)} />
            <Button ml='5' colorScheme='green' onClick={onTodoAddHandler}>
              Add
            </Button>
          </Flex>
        </Box>
        <Box mt='10'>
          <Text fontSize='xl'>Todo List</Text>
          <Divider my='3' />
          <Flex direction='column'>
            {data?.todos.map((item) => {
              return (
                <Box mb='5' key={item.id}>
                  <TodoItem
                    content={item.content}
                    onDelete={() => onDeleteTodoHandler(item.id)}
                  />
                </Box>
              )
            })}
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
