import type {
  NewEventoData,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import NewEvento from '../NewEvento'

export const QUERY = gql`
  query NewEventoData {
    espacios {
      id
      nombre
    }
    tipoEventos {
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
  espacios,
  tipoEventos,
}: CellSuccessProps<NewEventoData>) => {
  return <NewEvento espacios={espacios} tipoEventos={tipoEventos} />
}
