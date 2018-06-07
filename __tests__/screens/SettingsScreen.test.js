import React from 'react'

import renderer from 'react-test-renderer'
import { SettingsScreen } from 'src/screens/SettingsScreen'

it('renders without crashing', () => {
  const rendered = renderer.create(<SettingsScreen isAuthenticated={false} logout={() => {}} />).toJSON()
  expect(rendered).toBeTruthy()
})
