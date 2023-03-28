import type { TipoEvento } from '@prisma/client'

import {
  tipoEventos,
  tipoEvento,
  createTipoEvento,
  updateTipoEvento,
  deleteTipoEvento,
} from './tipoEventos'
import type { StandardScenario } from './tipoEventos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tipoEventos', () => {
  scenario('returns all tipoEventos', async (scenario: StandardScenario) => {
    const result = await tipoEventos()

    expect(result.length).toEqual(Object.keys(scenario.tipoEvento).length)
  })

  scenario(
    'returns a single tipoEvento',
    async (scenario: StandardScenario) => {
      const result = await tipoEvento({ id: scenario.tipoEvento.one.id })

      expect(result).toEqual(scenario.tipoEvento.one)
    }
  )

  scenario('creates a tipoEvento', async () => {
    const result = await createTipoEvento({
      input: { nombre: 'String' },
    })

    expect(result.nombre).toEqual('String')
  })

  scenario('updates a tipoEvento', async (scenario: StandardScenario) => {
    const original = (await tipoEvento({
      id: scenario.tipoEvento.one.id,
    })) as TipoEvento
    const result = await updateTipoEvento({
      id: original.id,
      input: { nombre: 'String2' },
    })

    expect(result.nombre).toEqual('String2')
  })

  scenario('deletes a tipoEvento', async (scenario: StandardScenario) => {
    const original = (await deleteTipoEvento({
      id: scenario.tipoEvento.one.id,
    })) as TipoEvento
    const result = await tipoEvento({ id: original.id })

    expect(result).toEqual(null)
  })
})
