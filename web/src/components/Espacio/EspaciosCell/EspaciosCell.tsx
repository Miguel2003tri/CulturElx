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
          className="border-grey-900 flex items-center justify-center border-2"
        >
          <div className="mr-7">
            <img src={espacio.img} alt={espacio.nombre} className="h-20 w-30" ></img>
          </div>
          <div>
            <Link to={routes.espacio({ id: espacio.id })} className="text-xl">
              {espacio.nombre}
            </Link>
            <p className="text-gray-500">{espacio.ubicacion}</p>
          </div>
          <br />
          <br />
          <br />
        </article>
      ))}
    </>
  )
}
