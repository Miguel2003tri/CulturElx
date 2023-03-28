import type { Prisma, TipoEvento } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TipoEventoCreateArgs>({
  tipoEvento: {
    one: { data: { nombre: 'String' } },
    two: { data: { nombre: 'String' } },
  },
})

export type StandardScenario = ScenarioData<TipoEvento, 'tipoEvento'>
