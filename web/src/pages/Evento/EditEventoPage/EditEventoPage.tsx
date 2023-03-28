import EditEventoCell from 'src/components/Evento/EditEventoCell'

type EventoPageProps = {
  id: number
}

const EditEventoPage = ({ id }: EventoPageProps) => {
  return <EditEventoCell id={id} />
}

export default EditEventoPage
