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
      <div className="h-28 bg-amber-500">
        <img
          src="/imgs/Logo-Horizontal.png"
          alt=""
          className="absolute top-9 left-48 max-h-64"
        ></img>
        <img
          src="/imgs/lupa.png"
          alt=""
          className="absolute top-7 right-20 max-w-xs"
        ></img>
        {isAuthenticated ? (
          <button className="absolute top-10 right-40" onClick={logOut}>
            {' '}
            Log out
          </button>
        ) : (
          <Link to={routes.login()} className="absolute top-10 right-20">
            Login
          </Link>
        )}
      </div>
      <br />
      <Link to={routes.inicio()} className="absolute right-56 top-10">
        Inicio
      </Link>
      <EspaciosCell />
    </>
  )
}

export default InicioPage
