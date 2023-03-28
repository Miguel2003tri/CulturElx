import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EspacioForm from 'src/components/Espacio/EspacioForm'

import type { CreateEspacioInput } from 'types/graphql'

const CREATE_ESPACIO_MUTATION = gql`
  mutation CreateEspacioMutation($input: CreateEspacioInput!) {
    createEspacio(input: $input) {
      id
    }
  }
`

const NewEspacio = () => {
  const [createEspacio, { loading, error }] = useMutation(
    CREATE_ESPACIO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Espacio created')
        navigate(routes.espacios())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEspacioInput) => {
    createEspacio({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Espacio</h2>
      </header>
      <div className="rw-segment-main">
        <EspacioForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEspacio
