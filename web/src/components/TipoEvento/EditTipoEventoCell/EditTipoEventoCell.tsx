import type { EditTipoEventoById, UpdateTipoEventoInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TipoEventoForm from 'src/components/TipoEvento/TipoEventoForm'

export const QUERY = gql`
  query EditTipoEventoById($id: Int!) {
    tipoEvento: tipoEvento(id: $id) {
      id
      nombre
    }
  }
`
const UPDATE_TIPO_EVENTO_MUTATION = gql`
  mutation UpdateTipoEventoMutation($id: Int!, $input: UpdateTipoEventoInput!) {
    updateTipoEvento(id: $id, input: $input) {
      id
      nombre
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tipoEvento,
}: CellSuccessProps<EditTipoEventoById>) => {
  const [updateTipoEvento, { loading, error }] = useMutation(
    UPDATE_TIPO_EVENTO_MUTATION,
    {
      onCompleted: () => {
        toast.success('TipoEvento updated')
        navigate(routes.tipoEventos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTipoEventoInput,
    id: EditTipoEventoById['tipoEvento']['id']
  ) => {
    updateTipoEvento({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TipoEvento {tipoEvento?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TipoEventoForm
          tipoEvento={tipoEvento}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
