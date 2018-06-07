import React from 'react'

import renderer from 'react-test-renderer'
import AndroidApp from 'src/navigators/AppNavigator.android'

it('AndroidApp', () => {
  const rendered = renderer.create(<AndroidApp />).toJSON()
  expect(rendered).toBeTruthy()
})
