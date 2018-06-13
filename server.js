import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

const server = express()

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: ''
  })
)

// server.get('/', (req, res) => {
//   res.send('<html><head><body><h1>Hey you</h1></body></head></html>')
// })

server.listen(4000, () => {
  console.log('listening on port 4000')
})
