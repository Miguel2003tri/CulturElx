import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TipoEvento/TipoEventosCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteTipoEventoMutationVariables,
  FindTipoEventos,
} from 'types/graphql'

const DELETE_TIPO_EVENTO_MUTATION = gql`
  mutation DeleteTipoEventoMutation($id: Int!) {
    deleteTipoEvento(id: $id) {
      id
    }
  }
`

const TipoEventosList = ({ tipoEventos }: FindTipoEventos) => {
  const [deleteTipoEvento] = useMutation(DELETE_TIPO_EVENTO_MUTATION, {
    onCompleted: () => {
      toast.success('TipoEvento deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteTipoEventoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete tipoEvento ' + id + '?')) {
      deleteTipoEvento({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tipoEventos.map((tipoEvento) => (
            <tr key={tipoEvento.id}>
              <td>{truncate(tipoEvento.id)}</td>
              <td>{truncate(tipoEvento.nombre)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tipoEvento({ id: tipoEvento.id })}
                    title={'Show tipoEvento ' + tipoEvento.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTipoEvento({ id: tipoEvento.id })}
                    title={'Edit tipoEvento ' + tipoEvento.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tipoEvento ' + tipoEvento.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tipoEvento.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TipoEventosList
