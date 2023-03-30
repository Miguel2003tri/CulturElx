import type { FindEspacios } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

//import Espacios from 'src/components/Espacio/Espacios'

export const QUERY = gql`
  query FindEspacios {
    espacios {
      id
      nombre
      tipo_eventoId
      lat
      lng
      ubicacion
      img
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
  return (
    <>
      {espacios.map((espacio) => (
        <article
          key={espacio.id}
          className="flex items-center justify-center border-2"
        >
          <div className="mr-7 mt-14">
            <img className=' h-48 w-48  object-contain' src={espacio.img} alt=""></img>
          </div>
          <div>
            <Link to={routes.espacio({ id: espacio.id })} className="text-xl">
              {espacio.nombre}
            </Link>
            <p className="text-gray-500">{espacio.ubicacion}</p>
          </div>
        </article>
      ))}
    </>
  )
}
