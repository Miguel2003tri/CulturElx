import type { Prisma, Evento } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventoCreateArgs>({
  evento: {
    one: {
      data: {
        nombre: 'String',
        horarios: 'String',
        fecha: 'String',
        pases: 'String',
        sala: 'String',
        duracion: 'String',
        director: 'String',
        sinopsis: 'String',
        trailer: 'String',
        reparto: 'String',
        precio: 5354172,
        img: 'String',
        Tipo_evento: { create: { nombre: 'String' } },
        ubicacion: {
          create: {
            nombre: 'String',
            lat: 5117104.858865868,
            lng: 3910981.378936673,
            ubicacion: 'String2574347',
            tipoDeEvento: { create: { nombre: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        nombre: 'String',
        horarios: 'String',
        fecha: 'String',
        pases: 'String',
        sala: 'String',
        duracion: 'String',
        director: 'String',
        sinopsis: 'String',
        trailer: 'String',
        reparto: 'String',
        precio: 1798424,
        img: 'String',
        Tipo_evento: { create: { nombre: 'String' } },
        ubicacion: {
          create: {
            nombre: 'String',
            lat: 9526120.033498866,
            lng: 1887705.4447507113,
            ubicacion: 'String7354476',
            tipoDeEvento: { create: { nombre: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Evento, 'evento'>
