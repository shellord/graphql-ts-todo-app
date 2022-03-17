import { Resolvers } from '@/graphql/generated'

import type { Context } from '@/lib/graphql/context'

export const resolvers: Resolvers = {
  Query: {
    todos: async (_parent, _args, ctx: Context) => {
      const todos = await ctx.prisma.todo.findMany()
      return todos
    },
  },
  Mutation: {
    createTodo: async (_parent, args, ctx: Context) => {
      const todo = await ctx.prisma.todo.create({
        data: {
          content: args.content,
        },
      })
      return todo
    },
  },
}
