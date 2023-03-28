// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="Eventos" titleTo="eventos" buttonLabel="New Evento" buttonTo="newEvento">
        <Route path="/eventos/new" page={EventoNewEventoPage} name="newEvento" />
        <Route path="/eventos/{id:Int}/edit" page={EventoEditEventoPage} name="editEvento" />
        <Route path="/eventos/{id:Int}" page={EventoEventoPage} name="evento" />
        <Route path="/eventos" page={EventoEventosPage} name="eventos" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Espacios" titleTo="espacios" buttonLabel="New Espacio" buttonTo="newEspacio">
        <Route path="/espacios/new" page={EspacioNewEspacioPage} name="newEspacio" />
        <Route path="/espacios/{id:Int}/edit" page={EspacioEditEspacioPage} name="editEspacio" />
        <Route path="/espacios/{id:Int}" page={EspacioEspacioPage} name="espacio" />
        <Route path="/espacios" page={EspacioEspaciosPage} name="espacios" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TipoEventos" titleTo="tipoEventos" buttonLabel="New TipoEvento" buttonTo="newTipoEvento">
        <Route path="/tipo-eventos/new" page={TipoEventoNewTipoEventoPage} name="newTipoEvento" />
        <Route path="/tipo-eventos/{id:Int}/edit" page={TipoEventoEditTipoEventoPage} name="editTipoEvento" />
        <Route path="/tipo-eventos/{id:Int}" page={TipoEventoTipoEventoPage} name="tipoEvento" />
        <Route path="/tipo-eventos" page={TipoEventoTipoEventosPage} name="tipoEventos" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
