import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { useAllTodosQuery } from '@/graphql/generated'

import Layout from '@/components/layout/Layout'
import TodoItem from '@/components/todo/TodoItem'

const Home: NextPage = () => {
  const { data, loading, error } = useAllTodosQuery()

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!</Text>

  return (
    <Layout>
      <Box mt='10'>
        <Box>
          <Text fontSize='xl'>Add New Todo</Text>
          <Divider my='3' />

          <Flex>
            <Input />
            <Button ml='5' colorScheme='green'>
              Add
            </Button>
          </Flex>
        </Box>
        <Box mt='10'>
          <Text fontSize='xl'>Todo List</Text>
          <Divider my='3' />
          <Flex direction='column'>
            {data?.todos?.map((item) => {
              return (
                <Box mb='5' key={item.id}>
                  <TodoItem content={item.content} />
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
