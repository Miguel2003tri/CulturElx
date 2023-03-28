import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteTipoEventoMutationVariables,
  FindTipoEventoById,
} from 'types/graphql'

const DELETE_TIPO_EVENTO_MUTATION = gql`
  mutation DeleteTipoEventoMutation($id: Int!) {
    deleteTipoEvento(id: $id) {
      id
    }
  }
`

interface Props {
  tipoEvento: NonNullable<FindTipoEventoById['tipoEvento']>
}

const TipoEvento = ({ tipoEvento }: Props) => {
  const [deleteTipoEvento] = useMutation(DELETE_TIPO_EVENTO_MUTATION, {
    onCompleted: () => {
      toast.success('TipoEvento deleted')
      navigate(routes.tipoEventos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTipoEventoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete tipoEvento ' + id + '?')) {
      deleteTipoEvento({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TipoEvento {tipoEvento.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tipoEvento.id}</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{tipoEvento.nombre}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTipoEvento({ id: tipoEvento.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tipoEvento.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TipoEvento
