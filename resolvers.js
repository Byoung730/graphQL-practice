const authors = [
  {
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
    name: 'Nathaniel Hawthorne',
    age: 214,
    books: ['The Scarlet Letter', 'Young Goodman Brown', 'The Birth-Mark']
  },
  {
    name: 'Henry David Thoreau',
    age: 201,
    books: ['Walden', 'Civil Disobedience', 'Walking', 'The Maine Woods']
  }
]

const resolvers = {
  Query: {
    author: () => {
      return authors
    }
  }
}

export default resolvers
