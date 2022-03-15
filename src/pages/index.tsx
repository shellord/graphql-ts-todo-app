import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import TodoItem from '@/components/todo/TodoItem'

const Home: NextPage = () => {
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
            <Box mb='5'>
              <TodoItem content='Do something' />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
