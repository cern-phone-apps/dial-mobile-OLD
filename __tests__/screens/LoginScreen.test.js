import React from 'react'

import renderer from 'react-test-renderer'
import { LoginScreen } from 'src/screens/LoginScreen'

it('renders without crashing', () => {
  const rendered = renderer.create(<LoginScreen isAuthenticated={false} login={() => {}} getMe={() => {}} />).toJSON()
  expect(rendered).toBeTruthy()
})