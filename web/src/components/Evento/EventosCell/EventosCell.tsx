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
    <>
      {eventos.map((evento) => (
        <article
          key={evento.id}
          className="border-grey-900 flex items-center justify-center border-2 "
        >
          <div className="mr-7">
            <img src={evento.img} alt={evento.nombre} className="h-28 w-32"></img>
          </div>
          <div>
            <Link to={routes.evento({ id: evento.id })} className="text-xl">
              {evento.nombre}
             <p className='text-sm pt-3 pb-3'> {evento.fecha}</p>
              {/* <p className='text-sm'>{evento.tipo_eventoId}</p> */}
            </Link>

          </div>
        </article>
      ))}
    </>
  )
}

