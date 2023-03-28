import { MetaTags } from '@redwoodjs/web'

import EspaciosCell from 'src/components/Espacio/EspaciosCell'

const InicioPage = () => {
  return (
    <>
      <MetaTags title="Inicio" description="Inicio page" />
      <EspaciosCell />
    </>
  )
}

export default InicioPage
