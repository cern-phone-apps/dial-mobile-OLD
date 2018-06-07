import React from 'react'
import configureMockStore from 'redux-mock-store'
// import Enzyme, { mount } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'
import SettingsScreen from 'src/containers/screens/SettingsScreen'

// // create any initial state needed
// const initialState = {};
// // here it is possible to pass in any middleware if needed into //configureStore
// const mockStore = configureStore();
// let wrapper;
// let store;

// Enzyme.configure({adapter: new Adapter()})
//
// function setup () {
//   const props = {
//     addTodo: jest.fn()
//   }
//   const store = configureMockStore({})
//
//   const enzymeWrapper = mount(<SettingsScreen {...props} store={store} />)
//
//   return {
//     props,
//     enzymeWrapper
//   }
// }

describe('ConnectedShowBox', () => {
  // beforeEach(() => {
  //   //creates the store with any initial state or middleware needed
  //   store = mockStore(initialState)
  //   wrapper = shallow(<SettingsScreen store={store}/>)
  // })
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
      logout: jest.fn(),
      isAuthenticated: false,
      store: store
    }
    const rendered = renderer.create(<SettingsScreen {...props} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
