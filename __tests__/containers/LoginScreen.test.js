import React from 'react'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import LoginScreen from 'src/containers/screens/LoginScreen'

describe('LoginScreen', () => {
  const storeContent = {
    auth: {
      access: {
        token: '12345'
      },
      refresh: {
        token: '12345'
      }
    }
  }

  it('should render successfully if string is not provided by store', () => {
    const mockStore = configureMockStore({})
    const store = mockStore(storeContent)
    const props = {
      isAuthenticated: false,
      store: store
    }
    const rendered = renderer.create(<LoginScreen {...props} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
