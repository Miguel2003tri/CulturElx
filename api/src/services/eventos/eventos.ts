import type {
  QueryResolvers,
  MutationResolvers,
  EventoRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const eventos: QueryResolvers['eventos'] = () => {
  return db.evento.findMany()
}

export const evento: QueryResolvers['evento'] = ({ id }) => {
  return db.evento.findUnique({
    where: { id },
  })
}

export const createEvento: MutationResolvers['createEvento'] = ({ input }) => {
  return db.evento.create({
    data: input,
  })
}

export const updateEvento: MutationResolvers['updateEvento'] = ({
  id,
  input,
}) => {
  return db.evento.update({
    data: input,
    where: { id },
  })
}

export const deleteEvento: MutationResolvers['deleteEvento'] = ({ id }) => {
  return db.evento.delete({
    where: { id },
  })
}

export const Evento: EventoRelationResolvers = {
  Tipo_evento: (_obj, { root }) => {
    return db.evento.findUnique({ where: { id: root?.id } }).Tipo_evento()
  },
  ubicacion: (_obj, { root }) => {
    return db.evento.findUnique({ where: { id: root?.id } }).ubicacion()
  },
}
