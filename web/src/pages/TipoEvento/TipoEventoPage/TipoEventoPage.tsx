import TipoEventoCell from 'src/components/TipoEvento/TipoEventoCell'

type TipoEventoPageProps = {
  id: number
}

const TipoEventoPage = ({ id }: TipoEventoPageProps) => {
  return <TipoEventoCell id={id} />
}

export default TipoEventoPage
