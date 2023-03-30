import { NavLink,Link, routes, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
// IMPORTACION PARA PODER USAR EL FORMULARIO
// import { useState } from 'react'

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
  // COSAS PARA PODER PONER EL SERCH EN EL HEADER
  // const [searchQuery, setSearchQuery] = useState('');
  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // }
  // const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Do something with the searchQuery, like redirect to a search page
  //   console.log(searchQuery);
  // }
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
        {/* FORMULARIO IMPUT  */}
        {/* <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="absolute top-7 right-40 max-w-xs rounded-md border-gray-300 px-2 py-1"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form> */}
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
      <Link to={routes.inicio()} className="absolute right-56 top-10">
        Inicio
      </Link>

      <div className="mb-8 flex flex-row items-center justify-center font-medium">
        <NavLink matchSubPaths className='mr-40 flex flex-row items-center justify-center rounded-lg pr-2 font-medium' activeClassName='bg-amber-200' to={routes.eventos()}>
            <img src="/imgs/lineas.png" alt=""></img>
            <p>Eventos</p>
        </NavLink>

        <NavLink matchSubPaths className='flex flex-row items-center justify-center rounded-lg pr-2 font-medium' activeClassName='bg-amber-200' to={routes.espacios()}>

            <img src="/imgs/edificio.png" alt=""></img>
            <p>Espacios</p>
        </NavLink>
      </div>

      <p className="mb-6 flex flex-col items-center justify-center font-medium text-yellow-800">
        Explora los espacios culturales de Elche
      </p>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
