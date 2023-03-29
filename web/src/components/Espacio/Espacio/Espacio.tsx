import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteEspacioMutationVariables,
  FindEspacioById,
} from 'types/graphql'

const DELETE_ESPACIO_MUTATION = gql`
  mutation DeleteEspacioMutation($id: Int!) {
    deleteEspacio(id: $id) {
      id
    }
  }
`

interface Props {
  espacio: NonNullable<FindEspacioById['espacio']>
}

const Espacio = ({ espacio }: Props) => {
  const [deleteEspacio] = useMutation(DELETE_ESPACIO_MUTATION, {
    onCompleted: () => {
      toast.success('Espacio deleted')
      navigate(routes.espacios())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEspacioMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete espacio ' + id + '?')) {
      deleteEspacio({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Espacio {espacio.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{espacio.id}</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{espacio.nombre}</td>
            </tr>
            <tr>
              <th>Tipo evento id</th>
              <td>{espacio.tipo_eventoId}</td>
            </tr>
            <tr>
              <th>Lat</th>
              <td>{espacio.lat}</td>
            </tr>
            <tr>
              <th>Lng</th>
              <td>{espacio.lng}</td>
            </tr>
            <tr>
              <th>Ubicacion</th>
              <td>{espacio.ubicacion}</td>
            </tr>
            <tr>
              <th>Imagen</th>
              <td>{espacio.img}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEspacio({ id: espacio.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(espacio.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Espacio
