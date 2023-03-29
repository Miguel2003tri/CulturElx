import type { EditEventoById, UpdateEventoInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EventoForm from 'src/components/Evento/EventoForm'

export const QUERY = gql`
  query EditEventoById($id: Int!) {
    evento: evento(id: $id) {
      id
      nombre
      horarios
      tipo_eventoId
      fecha
      pases
      sala
      duracion
      espacioId
      director
      sinopsis
      trailer
      reparto
      precio
      img

    }
    espacios{
      id
      nombre
    }
    tipoEventos{
      id
      nombre
    }
  }
`
const UPDATE_EVENTO_MUTATION = gql`
  mutation UpdateEventoMutation($id: Int!, $input: UpdateEventoInput!) {
    updateEvento(id: $id, input: $input) {
      id
      nombre
      horarios
      tipo_eventoId
      fecha
      pases
      sala
      duracion
      espacioId
      director
      sinopsis
      trailer
      reparto
      precio
      img
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ evento, espacios,tipoEventos }: CellSuccessProps<EditEventoById>) => {
  const [updateEvento, { loading, error }] = useMutation(
    UPDATE_EVENTO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Evento updated')
        navigate(routes.eventos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEventoInput,
    id: EditEventoById['evento']['id']
  ) => {
    updateEvento({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Evento {evento?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventoForm
          evento={evento}
          espacios={espacios}
          tipoEventos={tipoEventos}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
