import type {
  QueryResolvers,
  MutationResolvers,
  TipoEventoRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tipoEventos: QueryResolvers['tipoEventos'] = () => {
  return db.tipoEvento.findMany()
}

export const tipoEvento: QueryResolvers['tipoEvento'] = ({ id }) => {
  return db.tipoEvento.findUnique({
    where: { id },
  })
}

export const createTipoEvento: MutationResolvers['createTipoEvento'] = ({
  input,
}) => {
  return db.tipoEvento.create({
    data: input,
  })
}

export const updateTipoEvento: MutationResolvers['updateTipoEvento'] = ({
  id,
  input,
}) => {
  return db.tipoEvento.update({
    data: input,
    where: { id },
  })
}

export const deleteTipoEvento: MutationResolvers['deleteTipoEvento'] = ({
  id,
}) => {
  return db.tipoEvento.delete({
    where: { id },
  })
}

export const TipoEvento: TipoEventoRelationResolvers = {
  Espacios: (_obj, { root }) => {
    return db.tipoEvento.findUnique({ where: { id: root?.id } }).Espacios()
  },
  Eventos: (_obj, { root }) => {
    return db.tipoEvento.findUnique({ where: { id: root?.id } }).Eventos()
  },
}
