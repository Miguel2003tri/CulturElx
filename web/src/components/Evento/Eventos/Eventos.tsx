import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Evento/EventosCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteEventoMutationVariables, FindEventos } from 'types/graphql'

const DELETE_EVENTO_MUTATION = gql`
  mutation DeleteEventoMutation($id: Int!) {
    deleteEvento(id: $id) {
      id
    }
  }
`

const EventosList = ({ eventos }: FindEventos) => {
  const [deleteEvento] = useMutation(DELETE_EVENTO_MUTATION, {
    onCompleted: () => {
      toast.success('Evento deleted')
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

  const onDeleteClick = (id: DeleteEventoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete evento ' + id + '?')) {
      deleteEvento({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Horarios</th>
            <th>Tipo evento id</th>
            <th>Fecha</th>
            <th>Pases</th>
            <th>Sala</th>
            <th>Duracion</th>
            <th>Ubicacion id</th>
            <th>Director</th>
            <th>Sinopsis</th>
            <th>Trailer</th>
            <th>Reparto</th>
            <th>Precio</th>
            <th>Img</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id}>
              <td>{truncate(evento.id)}</td>
              <td>{truncate(evento.nombre)}</td>
              <td>{truncate(evento.horarios)}</td>
              <td>{truncate(evento.tipo_eventoId)}</td>
              <td>{truncate(evento.fecha)}</td>
              <td>{truncate(evento.pases)}</td>
              <td>{truncate(evento.sala)}</td>
              <td>{truncate(evento.duracion)}</td>
              <td>{truncate(evento.Espacio.nombre)}</td>
              <td>{truncate(evento.director)}</td>
              <td>{truncate(evento.sinopsis)}</td>
              <td><a target={'_blank'} rel="noopener noreferrer" href={evento.trailer}>Trailer</a></td>
              <td>{truncate(evento.reparto)}</td>
              <td>{truncate(evento.precio)}</td>
              <td><img src={evento.img} className="h-12 w-12"></img></td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.evento({ id: evento.id })}
                    title={'Show evento ' + evento.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEvento({ id: evento.id })}
                    title={'Edit evento ' + evento.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete evento ' + evento.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(evento.id)}
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

export default EventosList
