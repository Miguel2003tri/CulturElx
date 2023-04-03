import { ApolloProvider } from '@apollo/client'
import { getClient } from './apollo-client'
import React from 'react'

interface ApiProviderProps {
  children: React.ReactElement
  uri: string
}

export const ApiProvider = ({ children, uri }: ApiProviderProps) => {
  return <ApolloProvider client={getClient(uri)}>{children}</ApolloProvider>
}
