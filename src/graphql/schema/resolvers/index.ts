import type { Context } from '@/graphql/context'

export const resolvers = {
  Query: {
    todos: async (parent: unknown, args: unknown, ctx: Context) => {
      const todos = await ctx.prisma.todo.findMany()
      return todos
    },
  },
}
