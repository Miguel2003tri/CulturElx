import { Link, routes, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  const { logOut, isAuthenticated } = useAuth()
  const location = useLocation()
  const isEventosPage = location.pathname === routes.eventos()
  const isEspaciosPage = location.pathname === routes.espacios()

  return (
    <div className="rw-scaffold">
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
          <Link to={routes.login()} className="absolute top-10 right-40">
            Login
          </Link>
        )}
      </div>
      <br />
      <Link to={routes.espacios()} className="absolute right-56 top-10">
        Inicio
      </Link>

      <div className="mb-8 flex flex-row items-center justify-center font-medium">
        <Link to={routes.eventos()}>
          <div
            className={`mr-40 flex flex-row items-center justify-center rounded-lg pr-2 font-medium ${
              isEventosPage ? 'bg-amber-200' : ''
            }`}
          >
            <img src="/imgs/lineas.png" alt=""></img>
            <p>Eventos</p>
          </div>
        </Link>

        <Link to={routes.espacios()}>
          <div
            className={`flex flex-row items-center justify-center rounded-lg pr-2 font-medium ${
              isEspaciosPage ? 'bg-amber-200' : ''
            }`}
          >
            <img src="/imgs/edificio.png" alt=""></img>
            <p>Espacios</p>
          </div>
        </Link>
      </div>

      {isEspaciosPage ? (
        <p className="mb-6 flex flex-col items-center justify-center font-medium text-yellow-800">
          Explora los espacios culturales de Elche
        </p>
      ) : (
        <p></p>
      )}

      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
