import React from 'react'

import renderer from 'react-test-renderer'
import { LoginScreen } from 'src/screens/LoginScreen'

it('renders without crashing not authenticated', () => {
  const rendered = renderer.create(<LoginScreen isAuthenticated={false} login={() => {}} getMe={() => {}} />).toJSON()
  expect(rendered).toBeTruthy()
})

it('renders without crashing authenticated', () => {
  const rendered = renderer.create(<LoginScreen isAuthenticated login={() => {}} getMe={() => {}} />).toJSON()
  expect(rendered).toBeTruthy()
})
