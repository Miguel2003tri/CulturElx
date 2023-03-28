import EditTipoEventoCell from 'src/components/TipoEvento/EditTipoEventoCell'

type TipoEventoPageProps = {
  id: number
}

const EditTipoEventoPage = ({ id }: TipoEventoPageProps) => {
  return <EditTipoEventoCell id={id} />
}

export default EditTipoEventoPage
