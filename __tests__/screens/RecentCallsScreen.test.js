import React from 'react'
import RecentCallsScreen from 'src/screens/RecentCallsScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<RecentCallsScreen />).toJSON()
  expect(rendered).toBeTruthy()
})
