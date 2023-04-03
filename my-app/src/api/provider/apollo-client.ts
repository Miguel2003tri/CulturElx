import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export function getClient(uri: string) {
  const client = new ApolloClient({
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  })

  return client
}
