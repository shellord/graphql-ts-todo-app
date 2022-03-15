import { Button, Flex, Text } from '@chakra-ui/react'

type Props = {
  content: string
}

const TodoItem = ({ content }: Props) => {
  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Text>{content}</Text>
      <Button ml='5' colorScheme='red'>
        Delete
      </Button>
    </Flex>
  )
}

export default TodoItem
