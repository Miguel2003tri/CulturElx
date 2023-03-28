import type { Prisma, Espacio } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EspacioCreateArgs>({
  espacio: {
    one: {
      data: {
        nombre: 'String',
        lat: 4325260.148231001,
        lng: 807995.7858857844,
        ubicacion: 'String5815125',
        tipoDeEvento: { create: { nombre: 'String' } },
      },
    },
    two: {
      data: {
        nombre: 'String',
        lat: 6840502.202980692,
        lng: 4983551.644562476,
        ubicacion: 'String2726466',
        tipoDeEvento: { create: { nombre: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Espacio, 'espacio'>
