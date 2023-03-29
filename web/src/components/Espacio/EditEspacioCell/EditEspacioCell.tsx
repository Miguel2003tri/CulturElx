import type { EditEspacioById, UpdateEspacioInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EspacioForm from 'src/components/Espacio/EspacioForm'

export const QUERY = gql`
  query EditEspacioById($id: Int!) {
    espacio: espacio(id: $id) {
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
const UPDATE_ESPACIO_MUTATION = gql`
  mutation UpdateEspacioMutation($id: Int!, $input: UpdateEspacioInput!) {
    updateEspacio(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ espacio }: CellSuccessProps<EditEspacioById>) => {
  const [updateEspacio, { loading, error }] = useMutation(
    UPDATE_ESPACIO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Espacio updated')
        navigate(routes.espacios())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEspacioInput,
    id: EditEspacioById['espacio']['id']
  ) => {
    updateEspacio({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Espacio {espacio?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EspacioForm
          espacio={espacio}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
