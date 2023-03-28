import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditEventoById, UpdateEventoInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormEvento = NonNullable<EditEventoById['evento']>

interface EventoFormProps {
  evento?: EditEventoById['evento']
  onSave: (data: UpdateEventoInput, id?: FormEvento['id']) => void
  error: RWGqlError
  loading: boolean
}

const EventoForm = (props: EventoFormProps) => {
  const onSubmit = (data: FormEvento) => {
    props.onSave(data, props?.evento?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEvento> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.evento?.nombre}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nombre" className="rw-field-error" />

        <Label
          name="horarios"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Horarios
        </Label>

        <TextField
          name="horarios"
          defaultValue={props.evento?.horarios}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="horarios" className="rw-field-error" />

        <Label
          name="tipo_eventoId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tipo evento id
        </Label>

        <NumberField
          name="tipo_eventoId"
          defaultValue={props.evento?.tipo_eventoId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tipo_eventoId" className="rw-field-error" />

        <Label
          name="fecha"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fecha
        </Label>

        <TextField
          name="fecha"
          defaultValue={props.evento?.fecha}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fecha" className="rw-field-error" />

        <Label
          name="pases"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pases
        </Label>

        <TextField
          name="pases"
          defaultValue={props.evento?.pases}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pases" className="rw-field-error" />

        <Label
          name="sala"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sala
        </Label>

        <TextField
          name="sala"
          defaultValue={props.evento?.sala}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sala" className="rw-field-error" />

        <Label
          name="duracion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duracion
        </Label>

        <TextField
          name="duracion"
          defaultValue={props.evento?.duracion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="duracion" className="rw-field-error" />

        <Label
          name="ubicacionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ubicacion id
        </Label>

        <TextField
          name="ubicacionId"
          defaultValue={props.evento?.ubicacionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ubicacionId" className="rw-field-error" />

        <Label
          name="director"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Director
        </Label>

        <TextField
          name="director"
          defaultValue={props.evento?.director}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="director" className="rw-field-error" />

        <Label
          name="sinopsis"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sinopsis
        </Label>

        <TextField
          name="sinopsis"
          defaultValue={props.evento?.sinopsis}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sinopsis" className="rw-field-error" />

        <Label
          name="trailer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Trailer
        </Label>

        <TextField
          name="trailer"
          defaultValue={props.evento?.trailer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="trailer" className="rw-field-error" />

        <Label
          name="reparto"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reparto
        </Label>

        <TextField
          name="reparto"
          defaultValue={props.evento?.reparto}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="reparto" className="rw-field-error" />

        <Label
          name="precio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Precio
        </Label>

        <NumberField
          name="precio"
          defaultValue={props.evento?.precio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="precio" className="rw-field-error" />

        <Label
          name="img"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Img
        </Label>

        <TextField
          name="img"
          defaultValue={props.evento?.img}
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

export default EventoForm
