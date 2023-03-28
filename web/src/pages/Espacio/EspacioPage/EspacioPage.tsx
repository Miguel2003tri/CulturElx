import EspacioCell from 'src/components/Espacio/EspacioCell'

type EspacioPageProps = {
  id: number
}

const EspacioPage = ({ id }: EspacioPageProps) => {
  return <EspacioCell id={id} />
}

export default EspacioPage
