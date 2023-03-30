// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TextField> = (args) => {
//   return <TextField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TextField from './TextField'

export const generated = () => {
  return <TextField />
}

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>
