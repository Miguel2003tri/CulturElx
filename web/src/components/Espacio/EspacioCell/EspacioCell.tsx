import type { FindEspacioById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Espacio from 'src/components/Espacio/Espacio'

export const QUERY = gql`
  query FindEspacioById($id: Int!) {
    espacio: espacio(id: $id) {
      id
      nombre
      tipo_eventoId
      lat
      lng
      ubicacion
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Espacio not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ espacio }: CellSuccessProps<FindEspacioById>) => {
  return <Espacio espacio={espacio} />
}
