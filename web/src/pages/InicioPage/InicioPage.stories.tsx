import type { ComponentMeta } from '@storybook/react'

import InicioPage from './InicioPage'

export const generated = () => {
  return <InicioPage />
}

export default {
  title: 'Pages/InicioPage',
  component: InicioPage,
} as ComponentMeta<typeof InicioPage>
