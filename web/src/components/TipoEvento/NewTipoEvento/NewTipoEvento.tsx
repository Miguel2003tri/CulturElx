import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TipoEventoForm from 'src/components/TipoEvento/TipoEventoForm'

import type { CreateTipoEventoInput } from 'types/graphql'

const CREATE_TIPO_EVENTO_MUTATION = gql`
  mutation CreateTipoEventoMutation($input: CreateTipoEventoInput!) {
    createTipoEvento(input: $input) {
      id
    }
  }
`

const NewTipoEvento = () => {
  const [createTipoEvento, { loading, error }] = useMutation(
    CREATE_TIPO_EVENTO_MUTATION,
    {
      onCompleted: () => {
        toast.success('TipoEvento created')
        navigate(routes.tipoEventos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTipoEventoInput) => {
    createTipoEvento({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TipoEvento</h2>
      </header>
      <div className="rw-segment-main">
        <TipoEventoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTipoEvento
