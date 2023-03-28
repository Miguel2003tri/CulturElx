import { Prisma, Espacio } from '@prisma/client'

import {
  espacios,
  espacio,
  createEspacio,
  updateEspacio,
  deleteEspacio,
} from './espacios'
import type { StandardScenario } from './espacios.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('espacios', () => {
  scenario('returns all espacios', async (scenario: StandardScenario) => {
    const result = await espacios()

    expect(result.length).toEqual(Object.keys(scenario.espacio).length)
  })

  scenario('returns a single espacio', async (scenario: StandardScenario) => {
    const result = await espacio({ id: scenario.espacio.one.id })

    expect(result).toEqual(scenario.espacio.one)
  })

  scenario('creates a espacio', async (scenario: StandardScenario) => {
    const result = await createEspacio({
      input: {
        nombre: 'String',
        tipo_eventoId: scenario.espacio.two.tipo_eventoId,
        lat: 2458058.7366485475,
        lng: 7650092.156632174,
        ubicacion: 'String7422389',
      },
    })

    expect(result.nombre).toEqual('String')
    expect(result.tipo_eventoId).toEqual(scenario.espacio.two.tipo_eventoId)
    expect(result.lat).toEqual(new Prisma.Decimal(2458058.7366485475))
    expect(result.lng).toEqual(new Prisma.Decimal(7650092.156632174))
    expect(result.ubicacion).toEqual('String7422389')
  })

  scenario('updates a espacio', async (scenario: StandardScenario) => {
    const original = (await espacio({ id: scenario.espacio.one.id })) as Espacio
    const result = await updateEspacio({
      id: original.id,
      input: { nombre: 'String2' },
    })

    expect(result.nombre).toEqual('String2')
  })

  scenario('deletes a espacio', async (scenario: StandardScenario) => {
    const original = (await deleteEspacio({
      id: scenario.espacio.one.id,
    })) as Espacio
    const result = await espacio({ id: original.id })

    expect(result).toEqual(null)
  })
})
