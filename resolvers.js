const authors = [
  {
    id: 1,
    name: 'Herman Melville',
    age: 199,
    books: [
      'Moby Dick',
      'Bartleby, the Scrivener',
      'Typee',
      'Benito Cereno',
      'The Confidence Man'
    ]
  },
  {
    id: 2,
    name: 'Nathaniel Hawthorne',
    age: 214,
    books: ['The Scarlet Letter', 'Young Goodman Brown', 'The Birth-Mark']
  },
  {
    id: 3,
    name: 'Henry David Thoreau',
    age: 201,
    books: ['Walden', 'Civil Disobedience', 'Walking', 'The Maine Woods']
  }
]

const resolvers = {
  Query: {
    authors: () => {
      return authors
    },
    // author: (root, args) => {
    //   const age = args.age
    //   return authors.find(author => author.age === age)
    // }
    authorByAge: (root, { age }) => {
      return authors.find(author => author.age === age)
    },
    authorById: (root, { id }) => {
      return authors.find(author => author.id === id)
    }
  }
}

export default resolvers
