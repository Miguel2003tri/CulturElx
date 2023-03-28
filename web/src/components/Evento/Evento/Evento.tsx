import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteEventoMutationVariables,
  FindEventoById,
} from 'types/graphql'

const DELETE_EVENTO_MUTATION = gql`
  mutation DeleteEventoMutation($id: Int!) {
    deleteEvento(id: $id) {
      id
    }
  }
`

interface Props {
  evento: NonNullable<FindEventoById['evento']>
}

const Evento = ({ evento }: Props) => {
  const [deleteEvento] = useMutation(DELETE_EVENTO_MUTATION, {
    onCompleted: () => {
      toast.success('Evento deleted')
      navigate(routes.eventos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEventoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete evento ' + id + '?')) {
      deleteEvento({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Evento {evento.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{evento.id}</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{evento.nombre}</td>
            </tr>
            <tr>
              <th>Horarios</th>
              <td>{evento.horarios}</td>
            </tr>
            <tr>
              <th>Tipo evento id</th>
              <td>{evento.tipo_eventoId}</td>
            </tr>
            <tr>
              <th>Fecha</th>
              <td>{evento.fecha}</td>
            </tr>
            <tr>
              <th>Pases</th>
              <td>{evento.pases}</td>
            </tr>
            <tr>
              <th>Sala</th>
              <td>{evento.sala}</td>
            </tr>
            <tr>
              <th>Duracion</th>
              <td>{evento.duracion}</td>
            </tr>
            <tr>
              <th>Ubicacion id</th>
              <td>{evento.ubicacionId}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>{evento.director}</td>
            </tr>
            <tr>
              <th>Sinopsis</th>
              <td>{evento.sinopsis}</td>
            </tr>
            <tr>
              <th>Trailer</th>
              <td>{evento.trailer}</td>
            </tr>
            <tr>
              <th>Reparto</th>
              <td>{evento.reparto}</td>
            </tr>
            <tr>
              <th>Precio</th>
              <td>{evento.precio}</td>
            </tr>
            <tr>
              <th>Img</th>
              <td>{evento.img}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEvento({ id: evento.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(evento.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Evento
