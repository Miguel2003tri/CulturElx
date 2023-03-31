import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

// eslint-disable-next-line import/order
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
      <div className="mb-5 flex flex-row items-center justify-center">
        <Link
          to={routes.editEspacio({ id: espacio.id })}
          className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
        >
          Edit
        </Link>
        <button
          type="button"
          className="ml-10 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={() => onDeleteClick(espacio.id)}
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default Espacio
