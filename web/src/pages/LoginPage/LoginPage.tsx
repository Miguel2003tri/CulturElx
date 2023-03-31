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
      <div className="flex h-screen items-center justify-center bg-amber-500">
        <MetaTags title="Login" />

        <main className="rw-main">
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
          <div className="rw-scaffold rw-login-container">
            <div className="rw-segment rounded-xl bg-white shadow-xl">
              <header className="rw-segment-header border-b-2 p-4">
                <h2 className="rw-heading rw-heading-secondary text-center text-lg font-bold text-gray-800">
                  Login
                </h2>
              </header>

              <div className="rw-segment-main p-4">
                <div className="rw-form-wrapper">
                  <Form onSubmit={onSubmit} className="rw-form-wrapper">
                    <div className="mb-4">
                      <Label
                        name="nombreUsuario"
                        className="rw-label mb-2 block font-semibold text-gray-800"
                        errorClassName="rw-label rw-label-error"
                      >
                        Nombre Usuario
                      </Label>
                      <TextField
                        name="nombreUsuario"
                        className="rw-input rounded-lg border py-2 px-3"
                        errorClassName="rw-input rw-input-error"
                        ref={nombreUsuarioRef}
                        validation={{
                          required: {
                            value: true,
                            message: 'Nombre Usuario is required',
                          },
                        }}
                      />

                      <FieldError
                        name="nombreUsuario"
                        className="rw-field-error text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <Label
                        name="contraseA"
                        className="rw-label mb-2 block font-semibold text-gray-800"
                        errorClassName="rw-label rw-label-error"
                      >
                        Contraseña
                      </Label>
                      <PasswordField
                        name="contraseA"
                        className="rw-input rounded-lg border py-2 px-3"
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
                          className="rw-forgot-link text-blue-500"
                        >
                          Olvidaste contraseña?
                        </Link>
                      </div>
                      <FieldError
                        name="contraseA"
                        className="rw-field-error text-red-500"
                      />
                    </div>

                    <div className="rw-button-group flex justify-center">
                      <Submit className="rw-button rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Login
                      </Submit>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="rw-login-link p-4">
                <span className="text-gray-800">No tienes una cuenta ?</span>{' '}
                <Link
                  to={routes.signup()}
                  className="rw-link font-bold text-blue-500"
                >
                  Registrate!
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default LoginPage
