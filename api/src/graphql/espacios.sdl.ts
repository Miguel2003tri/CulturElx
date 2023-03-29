export const schema = gql`
  type Espacio {
    id: Int!
    nombre: String!
    tipoDeEvento: TipoEvento!
    tipo_eventoId: Int!
    lat: Float!
    lng: Float!
    ubicacion: String!
    Eventos: [Evento]!
    img: String
  }

  type Query {
    espacios: [Espacio!]! @requireAuth
    espacio(id: Int!): Espacio @requireAuth
  }

  input CreateEspacioInput {
    nombre: String!
    tipo_eventoId: Int!
    lat: Float!
    lng: Float!
    ubicacion: String!
    img: String
  }

  input UpdateEspacioInput {
    nombre: String
    tipo_eventoId: Int
    lat: Float
    lng: Float
    ubicacion: String
    img: String
  }

  type Mutation {
    createEspacio(input: CreateEspacioInput!): Espacio! @requireAuth
    updateEspacio(id: Int!, input: UpdateEspacioInput!): Espacio! @requireAuth
    deleteEspacio(id: Int!): Espacio! @requireAuth
  }
`
