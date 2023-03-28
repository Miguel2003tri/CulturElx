import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTipoEventoById, UpdateTipoEventoInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormTipoEvento = NonNullable<EditTipoEventoById['tipoEvento']>

interface TipoEventoFormProps {
  tipoEvento?: EditTipoEventoById['tipoEvento']
  onSave: (data: UpdateTipoEventoInput, id?: FormTipoEvento['id']) => void
  error: RWGqlError
  loading: boolean
}

const TipoEventoForm = (props: TipoEventoFormProps) => {
  const onSubmit = (data: FormTipoEvento) => {
    props.onSave(data, props?.tipoEvento?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTipoEvento> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="nombre"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nombre
        </Label>

        <TextField
          name="nombre"
          defaultValue={props.tipoEvento?.nombre}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nombre" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TipoEventoForm
