import React from 'react'
import KeypadScreen from './KeypadScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<KeypadScreen />).toJSON()
  expect(rendered).toBeTruthy()
})