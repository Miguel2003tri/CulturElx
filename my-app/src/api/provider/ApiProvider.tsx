import React from 'react'

import { ApolloProvider } from '@apollo/client'

import { getClient } from './apollo-client'

interface ApiProviderProps {
  children: React.ReactElement
  uri: string
}

export const ApiProvider = ({ children, uri }: ApiProviderProps) => {
  return <ApolloProvider client={getClient(uri)}>{children}</ApolloProvider>
}
