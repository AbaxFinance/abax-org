import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: '',
  fetch
})

export const blockClient = new ApolloClient({
  uri: '',
  fetch
})
