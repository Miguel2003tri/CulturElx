import { FieldError, NumberField, TextField } from '@redwoodjs/forms'

interface CustomTextFieldProps {
  nombre: string
  valorDefecto: string
  label: string
  isrequired?: boolean
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  nombre,
  valorDefecto,
  label,
  isrequired,
}) => {
  return (
    <>
      <label className="mb-2 block font-bold text-gray-700" htmlFor={nombre}>
        {label}
      </label>
      <TextField
        name={nombre}
        defaultValue={valorDefecto}
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
        validation={{ required: isrequired }}
      />
      <FieldError name={nombre} className="mt-1 text-sm text-red-600" />
    </>
  )
}

interface CustomNumberFieldProps {
  numero: number
  nombre: string
  label: string
  isrequired?: boolean
}

const CustomNumberField: React.FC<CustomNumberFieldProps> = ({
  numero,
  nombre,
  label,
  isrequired,
}) => {
  return (
    <>
      <label htmlFor={nombre} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>

      <NumberField
        name={nombre}
        defaultValue={numero}
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        errorClassName="shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline"
        validation={{ required: isrequired }}
      />

      <FieldError name={nombre} className="rw-field-error" />
    </>
  )
}

export { CustomTextField, CustomNumberField }
