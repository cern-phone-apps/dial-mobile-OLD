import React from 'react'
import SettingsScreen from 'screens/SettingsScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<SettingsScreen />).toJSON()
  expect(rendered).toBeTruthy()
})