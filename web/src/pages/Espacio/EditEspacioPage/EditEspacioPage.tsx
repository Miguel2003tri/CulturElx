import EditEspacioCell from 'src/components/Espacio/EditEspacioCell'

type EspacioPageProps = {
  id: number
}

const EditEspacioPage = ({ id }: EspacioPageProps) => {
  return <EditEspacioCell id={id} />
}

export default EditEspacioPage
