export const schema = gql`
  type Evento {
    id: Int!
    espacioId: Int!
    nombre: String!
    horarios: String!
    Tipo_evento: TipoEvento!
    tipo_eventoId: Int!
    fecha: String!
    pases: String!
    sala: String!
    duracion: String!
    Espacio: Espacio!
    director: String!
    sinopsis: String!
    trailer: String!
    reparto: String!
    precio: Int!
    img: String!
  }

  type Query {
    eventos: [Evento!]! @skipAuth
    evento(id: Int!): Evento @skipAuth
  }

  input CreateEventoInput {
    nombre: String!
    horarios: String!
    tipo_eventoId: Int!
    fecha: String!
    pases: String!
    sala: String!
    duracion: String!
    espacioId: Int!
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
    espacioId: Int
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
