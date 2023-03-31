import type { FindEventos } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
      <div className="mb-5 flex items-center justify-center">
        <Link
          to={routes.newEvento()}
          className="focus:shadow-outline flex flex-wrap items-center justify-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Crear Evento
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center pl-44">
        {eventos.map((evento) => (
          <Link to={routes.evento({ id: evento.id })} key={evento.id}>
            <article className="w-1/2">
              <div className="mb-9 flex flex-col items-center justify-center">
                <img
                  alt=""
                  src={evento.img}
                  className="h-80 w-96 object-cover"
                ></img>
                <p>{evento.nombre}</p>
                <p>Fecha: {evento.fecha}</p>
              </div>

            </article>
          </Link>
        ))}
      </div>


    </>
  )
}

// return <Eventos eventos={eventos} />
