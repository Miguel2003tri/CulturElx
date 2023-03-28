import type { FindEventos } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Eventos from 'src/components/Evento/Eventos'

export const QUERY = gql`
  query FindEventos {
    eventos {
      id
      nombre
      horarios
      tipo_eventoId
      fecha
      pases
      sala
      duracion
      Espacio {
        id
        nombre
      }
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No eventos yet. '}
      <Link to={routes.newEvento()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ eventos }: CellSuccessProps<FindEventos>) => {

  return (
    <ul>
      {eventos.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}

// return <Eventos eventos={eventos} />