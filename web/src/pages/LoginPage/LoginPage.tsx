import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const nombreUsuarioRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nombreUsuarioRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.nombreUsuario,
      password: data.contraseA,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary text-center ">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="nombreUsuario"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Nombre Usuario
                  </Label>
                  <TextField
                    name="nombreUsuario"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={nombreUsuarioRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Nombre Usuario is required',
                      },
                    }}
                  />

                  <FieldError name="nombreUsuario" className="rw-field-error" />

                  <Label
                    name="contraseA"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Contraseña
                  </Label>
                  <PasswordField
                    name="contraseA"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Contraseña is required',
                      },
                    }}
                  />

                  <div className="rw-forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                    >
                      Olvidaste contraseña?
                    </Link>
                  </div>

                  <FieldError name="contraseA" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>No tienes una cuenta ?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Registrate!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
