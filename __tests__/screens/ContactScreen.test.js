import React from 'react'
import ContactsScreen from 'src/screens/ContactsScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<ContactsScreen />).toJSON()
  expect(rendered).toBeTruthy()
})