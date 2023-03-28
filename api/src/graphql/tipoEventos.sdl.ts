export const schema = gql`
  type TipoEvento {
    id: Int!
    nombre: String!
    Espacios: [Espacio]!
    Eventos: [Evento]!
  }

  type Query {
    tipoEventos: [TipoEvento!]! @requireAuth
    tipoEvento(id: Int!): TipoEvento @requireAuth
  }

  input CreateTipoEventoInput {
    nombre: String!
  }

  input UpdateTipoEventoInput {
    nombre: String
  }

  type Mutation {
    createTipoEvento(input: CreateTipoEventoInput!): TipoEvento! @requireAuth
    updateTipoEvento(id: Int!, input: UpdateTipoEventoInput!): TipoEvento!
      @requireAuth
    deleteTipoEvento(id: Int!): TipoEvento! @requireAuth
  }
`
