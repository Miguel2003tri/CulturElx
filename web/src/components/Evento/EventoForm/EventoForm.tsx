import type { EditEventoById, UpdateEventoInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  TextField,
  NumberField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormEvento = NonNullable<EditEventoById['evento']>

interface EventoFormProps {
  evento?: EditEventoById['evento']
  espacios: EditEventoById['espacios']
  tipoEventos: EditEventoById['tipoEventos']

  onSave: (data: UpdateEventoInput, id?: FormEvento['id']) => void
  error: RWGqlError
  loading: boolean
}

const EventoForm = (props: EventoFormProps) => {
  const onSubmit = (data: FormEvento) => {
    props.onSave(data, props?.evento?.id)
  }

  return (
    <div className="rw-form-wrapper ml-5 mr-5">
      <Form<FormEvento> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="mt-2 text-sm text-red-600"
          titleClassName="font-medium"
          listClassName="mt-1"
        />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="nombre">
          Nombre
        </label>
        <TextField
          name="nombre"
          defaultValue={props.evento?.nombre}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="nombre" className="mt-1 text-sm text-red-600" />

        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="horarios"
        >
          Horarios
        </label>
        <TextField
          name="horarios"
          defaultValue={props.evento?.horarios}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="horarios" className="mt-1 text-sm text-red-600" />

        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="tipo_eventoId"
        >
          Tipo evento
        </label>
        <SelectField
          name="tipo_eventoId"
          defaultValue={props.evento?.tipo_eventoId}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true, valueAsNumber: true }}
        >
          {props.tipoEventos.map((tipo) => {
            return (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre}
              </option>
            )
          })}
        </SelectField>
        <FieldError
          name="tipo_eventoId"
          className="mt-1 text-sm text-red-600"
        />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="fecha">
          Fecha
        </label>
        <TextField
          name="fecha"
          defaultValue={props.evento?.fecha}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="fecha" className="mt-1 text-sm text-red-600" />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="pases">
          Pases
        </label>
        <TextField
          name="pases"
          defaultValue={props.evento?.pases}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="pases" className="mt-1 text-sm text-red-600" />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="sala">
          Sala
        </label>
        <TextField
          name="sala"
          defaultValue={props.evento?.sala}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="sala" className="mt-1 text-sm text-red-600" />

        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="duracion"
        >
          Duracion
        </label>
        <TextField
          name="duracion"
          defaultValue={props.evento?.duracion}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="duracion" className="mt-1 text-sm text-red-600" />

        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="espacioId"
        >
          Ubicacion
        </label>
        <SelectField
          name="espacioId"
          defaultValue={props.evento?.espacioId}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true, valueAsNumber: true }}
        >
          {props.espacios.map((tipo) => {
            return (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre}
              </option>
            )
          })}
        </SelectField>
        <FieldError name="espacioId" className="mt-1 text-sm text-red-600" />

        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="director"
        >
          Director
        </label>
        <TextField
          name="director"
          defaultValue={props.evento?.director}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="director" className="mt-1 text-sm text-red-600" />

        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="sinopsis"
        >
          Sinopsis
        </label>
        <TextField
          name="sinopsis"
          defaultValue={props.evento?.sinopsis}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="sinopsis" className="mt-1 text-sm text-red-600" />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="trailer">
          Trailer
        </label>
        <TextField
          name="trailer"
          defaultValue={props.evento?.trailer}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="trailer" className="mt-1 text-sm text-red-600" />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="reparto">
          Reparto
        </label>
        <TextField
          name="reparto"
          defaultValue={props.evento?.reparto}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="reparto" className="mt-1 text-sm text-red-600" />

        <label htmlFor="precio" className="mb-2 block font-bold text-gray-700">
          Precio
        </label>

        <NumberField
          name="precio"
          defaultValue={props.evento?.precio}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />

        <FieldError name="precio" className="rw-field-error" />

        <label className="mb-2 block font-bold text-gray-700" htmlFor="img">
          Img
        </label>
        <TextField
          name="img"
          defaultValue={props.evento?.img}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
          validation={{ required: true }}
        />
        <FieldError name="img" className="mt-1 text-sm text-red-600" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="mt-8 mb-8 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EventoForm
