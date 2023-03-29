import type { FindEspacioById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Espacio from 'src/components/Espacio/Espacio'
import Evento from 'src/components/Evento/Evento'

import { Link, routes } from '@redwoodjs/router'
import EventoCell from 'src/components/Evento/EventoCell'
import EventosCell from 'src/components/Evento/EventosCell'
export const QUERY = gql`
  query FindEspacioById($id: Int!) {
    espacio: espacio(id: $id) {
      id
      Eventos{
        id
        nombre
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>


export const Empty = () => <div>Espacio not foundt</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ espacio }: CellSuccessProps<FindEspacioById>) => {
  return (
    <>
      {espacio.Eventos.map((evento) => (
        <Link to={routes.evento({ id: evento.id })} className="text-xl">


        <article
          key={evento.id}
          className="border-grey-900 flex items-center justify-center border-2"
        >
          <p>{evento.nombre}</p>
        </article>
        </Link>
      ))}

    </>
  )
}
//  <p>{JSON.stringify(espacio)}</p>
