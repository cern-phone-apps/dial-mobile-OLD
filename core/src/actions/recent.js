export const ADD_RECENT_CALL = '@@call/ADD_RECENT_CALL';
export const CLEAR_RECENT_CALLS = '@@call/CLEAR_RECENT_CALLS';

export function addRecentCall(recentCall, incoming) {
  return {
    recentCall,
    incoming,
    type: ADD_RECENT_CALL
  };
}

export function clearRecentCalls() {
  return {
    type: CLEAR_RECENT_CALLS
  };
}
