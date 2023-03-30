import type { EditEspacioById, UpdateEspacioInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import CustomTextField from 'src/components/TextField/TextField'

type FormEspacio = NonNullable<EditEspacioById['espacio']>

interface EspacioFormProps {
  espacio?: EditEspacioById['espacio']
  onSave: (data: UpdateEspacioInput, id?: FormEspacio['id']) => void
  error: RWGqlError
  loading: boolean
}

const EspacioForm = (props: EspacioFormProps) => {
  const onSubmit = (data: FormEspacio) => {
    props.onSave(data, props?.espacio?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEspacio> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <CustomTextField
          nombre={'nombre'}
          valorDefecto={props.espacio?.nombre}
          label={'Nombre'}
        ></CustomTextField>

        <Label
          name="tipo_eventoId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tipo evento id
        </Label>

        <NumberField
          name="tipo_eventoId"
          defaultValue={props.espacio?.tipo_eventoId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tipo_eventoId" className="rw-field-error" />

        <Label
          name="lat"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lat
        </Label>

        <TextField
          name="lat"
          defaultValue={props.espacio?.lat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="lat" className="rw-field-error" />

        <Label
          name="lng"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lng
        </Label>

        <TextField
          name="lng"
          defaultValue={props.espacio?.lng}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="lng" className="rw-field-error" />

        <Label
          name="ubicacion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ubicacion
        </Label>

        <TextField
          name="ubicacion"
          defaultValue={props.espacio?.ubicacion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ubicacion" className="rw-field-error" />

        <Label
          name="img"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Imagen
        </Label>

        <TextField
          name="img"
          defaultValue={props.espacio?.img}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="img" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EspacioForm
