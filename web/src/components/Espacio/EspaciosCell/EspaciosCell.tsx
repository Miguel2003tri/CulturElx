import type { FindEspacios } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Espacios from 'src/components/Espacio/Espacios'

export const QUERY = gql`
  query FindEspacios {
    espacios {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No espacios yet. '}
      <Link to={routes.newEspacio()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ espacios }: CellSuccessProps<FindEspacios>) => {
  return <Espacios espacios={espacios} />
}
