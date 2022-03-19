import { Resolvers } from '@/types/generated'

import type { Context } from '@/lib/graphql/context'

export const resolvers: Resolvers<Context> = {
  Query: {
    todos: async (_parent, _args, ctx) => {
      const todos = await ctx.prisma.todo.findMany()
      return todos
    },
  },
  Mutation: {
    createTodo: async (_parent, args, ctx) => {
      const todo = await ctx.prisma.todo.create({
        data: {
          content: args.content,
        },
      })
      return todo
    },
    deleteTodo: async (_parent, args, ctx) => {
      const todo = await ctx.prisma.todo.delete({
        where: {
          id: args.id,
        },
      })
      return todo
    },
  },
}
