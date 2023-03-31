import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, FieldError, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on nombre usuario box on page load
  const nombreUsuarioRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nombreUsuarioRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.nombreUsuario,
      password: data.contraseA,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-amber-500">
        <MetaTags title="Signup" />

        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="w-full max-w-xs">
          <div className="mb-4 rounded-xl bg-white px-8 pt-6 pb-8 shadow-xl">
            <h2 className="mb-6 text-center text-xl font-bold text-gray-700">
              Sign up
            </h2>
            <Form onSubmit={onSubmit} className="rw-form-wrapper">
              <div className="mb-4">
                <label
                  htmlFor="nombreUsuario"
                  className="mb-2 block font-bold text-gray-700"
                >
                  Nombre Usuario
                </label>
                <input
                  type="text"
                  name="nombreUsuario"
                  id="nombreUsuario"
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  ref={nombreUsuarioRef}
                  required
                />
                <FieldError name="nombreUsuario" className="rw-field-error" />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contraseA"
                  className="mb-2 block font-bold text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="contraseA"
                  id="contraseA"
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  autoComplete="current-password"
                  required
                />
                <FieldError name="contraseA" className="rw-field-error" />
              </div>

              <div className="flex items-center justify-center">
                <Submit className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none">
                  Sign Up
                </Submit>
              </div>
            </Form>
          </div>

          <div className="text-center">
            <span className="text-gray-600">Already have an account?</span>{' '}
            <Link
              to={routes.login()}
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              Log in!
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
