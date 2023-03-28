import EventoCell from 'src/components/Evento/EventoCell'

type EventoPageProps = {
  id: number
}

const EventoPage = ({ id }: EventoPageProps) => {
  return <EventoCell id={id} />
}

export default EventoPage
