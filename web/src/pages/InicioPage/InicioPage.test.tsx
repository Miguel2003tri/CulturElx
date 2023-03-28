import { render } from '@redwoodjs/testing/web'

import InicioPage from './InicioPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InicioPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InicioPage />)
    }).not.toThrow()
  })
})
