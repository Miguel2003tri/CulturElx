import type {
  QueryResolvers,
  MutationResolvers,
  EspacioRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const espacios: QueryResolvers['espacios'] = () => {
  return db.espacio.findMany()
}

export const espacio: QueryResolvers['espacio'] = ({ id }) => {
  return db.espacio.findUnique({
    where: { id },
  })
}

export const createEspacio: MutationResolvers['createEspacio'] = ({
  input,
}) => {
  return db.espacio.create({
    data: input,
  })
}

export const updateEspacio: MutationResolvers['updateEspacio'] = ({
  id,
  input,
}) => {
  console.log(input)

  return db.espacio.update({
    data: input,
    where: { id },
  })
}

export const deleteEspacio: MutationResolvers['deleteEspacio'] = ({ id }) => {
  return db.espacio.delete({
    where: { id },
  })
}

export const Espacio: EspacioRelationResolvers = {

  Eventos: (_obj, { root }) => {
    return db.espacio.findUnique({ where: { id: root?.id } }).Eventos()
  },
}
