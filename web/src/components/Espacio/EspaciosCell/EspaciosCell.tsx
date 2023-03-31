import type { FindEspacios } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

//import Espacios from 'src/components/Espacio/Espacios'

export const QUERY = gql`
  query FindEspacios {
    espacios {
      id
      nombre
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
      <p className="mb-6 flex flex-col items-center justify-center font-medium text-yellow-800">
        Explora los espacios culturales de Elche
      </p>
      {espacios.map((espacio) => (
        <article
          key={espacio.id}
          className="flex items-center justify-center border-2"
        >
          <Link
            to={routes.espacio({ id: espacio.id })}
            className="flex items-center text-xl"
          >
            <div className="mr-7">
              <img
                className="h-48 w-48 object-contain"
                src={espacio.img}
                alt=""
              ></img>
            </div>
            <div className="text-left">
              <h2 className="font-bold">{espacio.nombre}</h2>
              <p className="text-gray-500">{espacio.ubicacion}</p>
            </div>
          </Link>
        </article>
      ))}
    </>
  )
}
