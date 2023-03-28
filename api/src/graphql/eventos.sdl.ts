export const schema = gql`
  type Evento {
    id: Int!
    nombre: String!
    horarios: String!
    Tipo_evento: TipoEvento!
    tipo_eventoId: Int!
    fecha: String!
    pases: String!
    sala: String!
    duracion: String!
    ubicacion: Espacio!
    ubicacionId: String!
    director: String!
    sinopsis: String!
    trailer: String!
    reparto: String!
    precio: Int!
    img: String!
  }

  type Query {
    eventos: [Evento!]! @requireAuth
    evento(id: Int!): Evento @requireAuth
  }

  input CreateEventoInput {
    nombre: String!
    horarios: String!
    tipo_eventoId: Int!
    fecha: String!
    pases: String!
    sala: String!
    duracion: String!
    ubicacionId: String!
    director: String!
    sinopsis: String!
    trailer: String!
    reparto: String!
    precio: Int!
    img: String!
  }

  input UpdateEventoInput {
    nombre: String
    horarios: String
    tipo_eventoId: Int
    fecha: String
    pases: String
    sala: String
    duracion: String
    ubicacionId: String
    director: String
    sinopsis: String
    trailer: String
    reparto: String
    precio: Int
    img: String
  }

  type Mutation {
    createEvento(input: CreateEventoInput!): Evento! @requireAuth
    updateEvento(id: Int!, input: UpdateEventoInput!): Evento! @requireAuth
    deleteEvento(id: Int!): Evento! @requireAuth
  }
`
