import * as recentActions from '../actions/recent';

const initialState = {
  lastRecentId: 0,
  recentCalls: []
};

const recent = (state = initialState, action) => {
  switch (action.type) {
    case recentActions.ADD_RECENT_CALL: {
      const { recentCall } = action;
      const lastRecentId = state.lastRecentId + 1;

      return {
        ...state,
        lastRecentId,
        recentCalls: [
          {
            id: lastRecentId,
            name: recentCall.name,
            phoneNumber: recentCall.phoneNumber,
            startTime: recentCall.startTime,
            endTime: Date.now(),
            incoming: recentCall.incoming,
            missed: recentCall.missed
          },
          ...state.recentCalls
        ]
      };
    }

    case recentActions.CLEAR_RECENT_CALLS:
      return {
        ...state,
        lastRecentId: 0,
        recentCalls: []
      };
    default:
      return state;
  }
};

export default recent;
