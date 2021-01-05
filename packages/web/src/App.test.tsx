import React from 'react'

import { render, screen } from '@testing-library/react'

import App from './App'

// eslint-disable-next-line jest/no-disabled-tests
test.skip('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
