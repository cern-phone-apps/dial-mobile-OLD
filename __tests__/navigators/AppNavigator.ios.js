import React from 'react'

import renderer from 'react-test-renderer'
import IosApp from 'src/navigators/AppNavigator.ios'

it('IosApp', () => {
  const rendered = renderer.create(<IosApp />).toJSON()
  expect(rendered).toBeTruthy()
})
