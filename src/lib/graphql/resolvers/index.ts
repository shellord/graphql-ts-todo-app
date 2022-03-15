import { prisma } from '@/lib/prisma'

export const resolvers = {
  Query: {
    todos: async () => {
      const todos = await prisma.todo.findMany()
      return todos
    },
  },
}
