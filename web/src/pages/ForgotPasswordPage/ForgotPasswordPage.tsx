import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const nombreUsuarioRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nombreUsuarioRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { nombreUsuario: string }) => {
    const response = await forgotPassword(data.nombreUsuario)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your contraseña was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-amber-500">
        <MetaTags title="Forgot Contraseña" />

        <main className="rw-main">
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
          <div className="rw-scaffold rw-login-container">
            <div className="rw-segment rounded-xl bg-white shadow-xl">
              <header className="rw-segment-header border-b-2 p-4">
                <h2 className="rw-heading rw-heading-secondary text-center text-lg font-bold text-gray-800">
                  Forgot Contraseña
                </h2>
              </header>

              <div className="rw-segment-main p-4">
                <div className="rw-form-wrapper">
                  <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <div className="mb-4">
                      <Label
                        name="nombreUsuario"
                        className="rw-label mb-2 block text-lg font-bold"
                        errorClassName="rw-label rw-label-error"
                      >
                        Nombre Usuario
                      </Label>
                      <TextField
                        name="nombreUsuario"
                        className="rw-input w-full rounded-md border-2 border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                        className="rw-field-error mt-1 text-red-500"
                      />
                    </div>

                    <div className="rw-button-group flex justify-center">
                      <Submit className="rw-button focus:shadow-outline-blue rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                        Submit
                      </Submit>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default ForgotPasswordPage
