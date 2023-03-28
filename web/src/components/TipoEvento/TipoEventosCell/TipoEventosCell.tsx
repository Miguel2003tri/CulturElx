import type { FindTipoEventos } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TipoEventos from 'src/components/TipoEvento/TipoEventos'

export const QUERY = gql`
  query FindTipoEventos {
    tipoEventos {
      id
      nombre
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tipoEventos yet. '}
      <Link to={routes.newTipoEvento()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tipoEventos }: CellSuccessProps<FindTipoEventos>) => {
  return <TipoEventos tipoEventos={tipoEventos} />
}
