import { makeExecutableSchema } from 'graphql-tools'
// import { addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './resolvers.js'

const typeDefs = `type Author {
  id: Int
  age: Int
  name: String
  books: [String]
}

  type Query {
    authors: [Author]
    authorByAge(age: Int): Author
    authorById(id: Int): Author
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
