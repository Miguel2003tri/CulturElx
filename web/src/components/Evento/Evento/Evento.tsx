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
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <header className="border-b border-gray-200 bg-gray-100 px-4 py-2">
          <h2 className="text-lg font-bold text-gray-800">
            Evento {evento.nombre} Detalles
          </h2>
        </header>
        <table className="w-full">
          <tbody className="divide-y divide-gray-200 bg-gray-50">
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Id</th>
              <td className="px-4 py-2">{evento.id}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Nombre</th>
              <td className="px-4 py-2">{evento.nombre}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">
                Horarios
              </th>
              <td className="px-4 py-2">{evento.horarios}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">
                Tipo evento id
              </th>
              <td className="px-4 py-2">{evento.tipo_eventoId}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Fecha</th>
              <td className="px-4 py-2">{evento.fecha}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Pases</th>
              <td className="px-4 py-2">{evento.pases}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Sala</th>
              <td className="px-4 py-2">{evento.sala}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">
                Duracion
              </th>
              <td className="px-4 py-2">{evento.duracion}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">
                Ubicacion id
              </th>
              <td className="px-4 py-2">{evento.ubicacionId}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">
                Director
              </th>
              <td className="px-4 py-2">{evento.director}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">
                Sinopsis
              </th>
              <td className="px-4 py-2">{evento.sinopsis}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Trailer</th>
              <td className="px-4 py-2">{evento.trailer}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Reparto</th>
              <td className="px-4 py-2">{evento.reparto}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Precio</th>
              <td className="px-4 py-2">{evento.precio}</td>
            </tr>
            <tr className="py-2">
              <th className="px-4 py-2 font-semibold text-gray-800">Img</th>
              <td className="px-4 py-2">{evento.img}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="flex p-9 justify-center space-x-4">
        <Link
          to={routes.editEvento({ id: evento.id })}
          className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 "
        >
          Editar
        </Link>
        <button
          type="button"
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 "
          onClick={() => onDeleteClick(evento.id)}
        >
          Eliminar
        </button>
      </nav>
    </>
  )
}

export default Evento
