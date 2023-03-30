import { FieldError, Label, NumberField, TextField } from '@redwoodjs/forms'

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
      <Label
        name={nombre}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        {label}
      </Label>
      <TextField
        name={nombre}
        defaultValue={valorDefecto}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: isrequired }}
      />
      <NumberField
        name={nombre}
        defaultValue={valorDefecto}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: isrequired }}
      />
      <FieldError name={nombre} className="rw-field-error" />
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
      <Label
        name={nombre}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        {label}
      </Label>
      <TextField
        name={nombre}
        defaultValue={numero}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: isrequired }}
      />
      <NumberField
        name={nombre}
        defaultValue={numero}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: isrequired }}
      />
      <FieldError name={nombre} className="rw-field-error" />
    </>
  )
}

export { CustomTextField, CustomNumberField }
