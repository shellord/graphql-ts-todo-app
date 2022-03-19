import { Button, Flex, Text } from '@chakra-ui/react'

type Props = {
  content: string
  onDelete: () => void
}

const TodoItem = ({ content, onDelete }: Props) => {
  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Text>{content}</Text>
      <Button ml='5' colorScheme='red' onClick={onDelete}>
        Delete
      </Button>
    </Flex>
  )
}

export default TodoItem
