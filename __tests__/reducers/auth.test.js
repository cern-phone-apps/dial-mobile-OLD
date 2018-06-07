import { accessToken, refreshToken } from 'src/reducers/auth'

describe('Auth reducer tests', () => {

  it('accessToken not defined', () => {
    const state = {
      auth: {
        access: {}
      }
    }
    expect(accessToken(state)).toEqual(undefined)
  })

  it('accessToken defined', () => {
    const state = {
      auth: {
        access: {
          token: '123456'
        }
      }
    }
    expect(accessToken(state)).toEqual('123456')
  })

  it('refreshToken not defined', () => {
    const state = {
      auth: {
        refresh: {}
      }
    }
    expect(refreshToken(state)).toEqual(undefined)
  })

  it('refreshToken defined', () => {
    const state = {
      auth: {
        refresh: {
          token: '123456'
        }
      }
    }
    expect(refreshToken(state)).toEqual('123456')
  })

})
