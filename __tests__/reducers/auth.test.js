import { accessToken } from 'src/reducers/auth'

describe('Auth reducer tests', () => {

  it('should dispatch LOGIN_SUCCESS when login is called', () => {
    const state = {
      auth: {
        access: {}
      }
    }

    expect(accessToken(state)).toEqual(undefined)
  })

})
