import type { Evento } from '@prisma/client'

import {
  eventos,
  evento,
  createEvento,
  updateEvento,
  deleteEvento,
} from './eventos'
import type { StandardScenario } from './eventos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('eventos', () => {
  scenario('returns all eventos', async (scenario: StandardScenario) => {
    const result = await eventos()

    expect(result.length).toEqual(Object.keys(scenario.evento).length)
  })

  scenario('returns a single evento', async (scenario: StandardScenario) => {
    const result = await evento({ id: scenario.evento.one.id })

    expect(result).toEqual(scenario.evento.one)
  })

  scenario('creates a evento', async (scenario: StandardScenario) => {
    const result = await createEvento({
      input: {
        nombre: 'String',
        horarios: 'String',
        tipo_eventoId: scenario.evento.two.tipo_eventoId,
        fecha: 'String',
        pases: 'String',
        sala: 'String',
        duracion: 'String',
        ubicacionId: scenario.evento.two.ubicacionId,
        director: 'String',
        sinopsis: 'String',
        trailer: 'String',
        reparto: 'String',
        precio: 2086614,
        img: 'String',
      },
    })

    expect(result.nombre).toEqual('String')
    expect(result.horarios).toEqual('String')
    expect(result.tipo_eventoId).toEqual(scenario.evento.two.tipo_eventoId)
    expect(result.fecha).toEqual('String')
    expect(result.pases).toEqual('String')
    expect(result.sala).toEqual('String')
    expect(result.duracion).toEqual('String')
    expect(result.ubicacionId).toEqual(scenario.evento.two.ubicacionId)
    expect(result.director).toEqual('String')
    expect(result.sinopsis).toEqual('String')
    expect(result.trailer).toEqual('String')
    expect(result.reparto).toEqual('String')
    expect(result.precio).toEqual(2086614)
    expect(result.img).toEqual('String')
  })

  scenario('updates a evento', async (scenario: StandardScenario) => {
    const original = (await evento({ id: scenario.evento.one.id })) as Evento
    const result = await updateEvento({
      id: original.id,
      input: { nombre: 'String2' },
    })

    expect(result.nombre).toEqual('String2')
  })

  scenario('deletes a evento', async (scenario: StandardScenario) => {
    const original = (await deleteEvento({
      id: scenario.evento.one.id,
    })) as Evento
    const result = await evento({ id: original.id })

    expect(result).toEqual(null)
  })
})
