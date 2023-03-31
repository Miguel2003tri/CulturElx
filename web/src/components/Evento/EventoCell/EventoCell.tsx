import type { FindEventoById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Evento from 'src/components/Evento/Evento'

export const QUERY = gql`
  query FindEventoById($id: Int!) {
    evento: evento(id: $id) {
      id
      nombre
      horarios
      tipo_eventoId
      fecha
      pases
      sala
      duracion
      espacioId
      director
      sinopsis
      trailer
      reparto
      precio
      img
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Evento not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ evento }: CellSuccessProps<FindEventoById>) => {
  console.log('holi')

  return <Evento evento={evento} />
}
