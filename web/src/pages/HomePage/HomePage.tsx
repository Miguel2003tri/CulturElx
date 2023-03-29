import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EventosCell from 'src/components/Evento/EventosCell'
import { isAuthenticated } from 'src/lib/auth'

const HomePage = () => {
  const { logOut, isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className=" flex h-screen flex-col items-center justify-center bg-amber-500">
        {isAuthenticated ? (
          <button className="absolute top-10 right-20" onClick={logOut}>
            {' '}
            Log out
          </button>
        ) : (
          <Link to={routes.login()} className="absolute top-10 right-20">
            Login
          </Link>
        )}
        <Link to={routes.inicio()} className="absolute right-40 top-10">
          Inicio
        </Link>
        <img src="/imgs/logo-vertical.png" alt="" className="max-w-min" />
        <p className="absolute bottom-0 mb-10">
          App desarrollada por Dalii
          <br />
          Solutions & Estudio YOBO
        </p>
      </div>
    </>
  )
}

export default HomePage
