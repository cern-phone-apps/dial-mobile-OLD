import React from 'react'
import SettingsScreen from './SettingsScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<SettingsScreen />).toJSON()
  expect(rendered).toBeTruthy()
})