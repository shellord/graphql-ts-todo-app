module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  semi: false,
  arrowParens: 'always',
  importOrder: [
    '^@/graphql/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
