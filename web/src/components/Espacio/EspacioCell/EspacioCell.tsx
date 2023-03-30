import { Evento } from '@prisma/client'
import type { FindEspacioById } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindEspacioById($id: Int!) {
    espacio: espacio(id: $id) {
      id
      nombre
      Eventos {
        id
        nombre
        img
        fecha
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

      <div className="flex w-full items-center justify-center">
        <p className="pb-10 text-7xl text-black">{espacio.nombre}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center pl-44">
        {espacio.Eventos.map((evento) => (
          <Link to={routes.evento({ id: evento.id })} key={evento.id}>
            <article className="w-1/2">
              <div className="mb-9 flex flex-col items-center justify-center">
                <img alt="" src={evento.img} className="h-80 w-96"></img>
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
//  <p>{JSON.stringify(espacio)}</p>
