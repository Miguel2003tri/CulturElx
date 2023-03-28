import type { FindTipoEventoById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TipoEvento from 'src/components/TipoEvento/TipoEvento'

export const QUERY = gql`
  query FindTipoEventoById($id: Int!) {
    tipoEvento: tipoEvento(id: $id) {
      id
      nombre
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TipoEvento not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tipoEvento,
}: CellSuccessProps<FindTipoEventoById>) => {
  return <TipoEvento tipoEvento={tipoEvento} />
}
