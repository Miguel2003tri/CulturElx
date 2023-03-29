import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EspaciosCell from 'src/components/Espacio/EspaciosCell'
import { isAuthenticated } from 'src/lib/auth'

const InicioPage = () => {
  const { logOut, isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Inicio" description="Inicio page" />

      <EspaciosCell />
    </>
  )
}

export default InicioPage
