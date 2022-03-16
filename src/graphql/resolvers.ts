import type { Context } from '@/graphql/context'
import { Resolvers } from '@/graphql/generated/generated'

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
