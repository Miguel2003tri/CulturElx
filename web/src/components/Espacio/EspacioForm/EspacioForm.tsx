import type { EditEspacioById, UpdateEspacioInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import {
  CustomTextField,
  CustomNumberField,
} from 'src/components/TextField/TextField'

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
          isrequired={true}
        ></CustomTextField>

        {/* <CustomNumberField
          numero={props.espacio?.tipo_eventoId}
          nombre={'tipo_eventoId'}
          label={'Tipo evento id'}
          isrequired={true}
        ></CustomNumberField> */}

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

        {/* <CustomNumberField
          nombre={'lat'}
          valorDefecto={props.espacio?.lat}
          label={'Lat'}
          isrequired={true}
        ></CustomNumberField> */}

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

        {/* <CustomTextField
          nombre={'lng'}
          valorDefecto={props.espacio?.lng}
          label={'Lng'}
          isrequired={true}
        ></CustomTextField> */}

        <CustomTextField
          nombre={'ubicacion'}
          valorDefecto={props.espacio?.ubicacion}
          label={'Ubicacion'}
          isrequired={true}
        ></CustomTextField>

        <CustomTextField
          nombre={'img'}
          valorDefecto={props.espacio?.img}
          label={'Imagen'}
          isrequired={true}
        ></CustomTextField>

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
