import type { EditEspacioById, UpdateEspacioInput } from 'types/graphql'

import { Form, FormError, Submit } from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import {
  CustomNumberField,
  CustomTextField,
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
    <div className="rw-form-wrapper ml-5 mr-5">
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



        <CustomNumberField
          numero={props.espacio?.lat}
          nombre={'lat'}
          label={'Lat'}
          isrequired={true}
        ></CustomNumberField>

        <CustomNumberField
          numero={props.espacio?.lng}
          nombre={'lng'}
          label={'Lng'}
          isrequired={true}
        ></CustomNumberField>

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

export default EspacioForm
