import { isRSAA, apiMiddleware } from 'redux-api-middleware'

import { TOKEN_RECEIVED, refreshAccessToken } from './actions/auth'
import { refreshToken, isAccessTokenExpired } from './reducers/auth'

function checkNextAction (next, postponedRSAAs, rsaaMiddleware) {
  const nextCheckPostponed = (nextAction) => {
    // Run postponed actions after token refresh
    if (nextAction.type === TOKEN_RECEIVED) {
      console.log('nextCheckPostponed')
      console.log(nextAction.type)
      next(nextAction)
      postponedRSAAs.forEach((postponed) => {
        rsaaMiddleware(next)(postponed)
      })
    } else {
      console.log('nextAction')
      next(nextAction)
    }
  }
  return nextCheckPostponed
}

export function createApiMiddleware () {
  const postponedRSAAs = []

  return ({dispatch, getState}) => {
    const rsaaMiddleware = apiMiddleware({dispatch, getState})

    return (next) => (action) => {
      const nextCheckPostponed = checkNextAction(next, postponedRSAAs, rsaaMiddleware)

      if (isRSAA(action)) {
        console.log('Is RSAA -> True')
        const state = getState()
        const token = refreshToken(state)

        if (token && isAccessTokenExpired(state)) {
          postponedRSAAs.push(action)
          console.log('postponed RSAAs: ', postponedRSAAs)
          if (postponedRSAAs.length > 0) {
            return rsaaMiddleware(nextCheckPostponed)(refreshAccessToken())
          } else {
            console.log(`postponedRSAAs.length: ${postponedRSAAs.length}`)
            return
          }
        }
        return rsaaMiddleware(next)(action)
      }
      return next(action)
    }
  }
}

export default createApiMiddleware()
