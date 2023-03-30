import { FieldError, Label, TextField } from '@redwoodjs/forms'

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
      <FieldError name={nombre} className="rw-field-error" />
    </>
  )
}

export default CustomTextField
