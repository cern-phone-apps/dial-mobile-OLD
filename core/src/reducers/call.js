import * as callActions from '../actions/call';

const initialState = {
  onCall: false,
  calling: false,
  receivingCall: false,
  recipient: {
    name: '',
    phoneNumber: '',
    startTime: null,
    incoming: false,
    missed: false
  },
  error: {}
};

function processCall(state, recipient) {
  console.log('PROCESSCALL');
  console.log(recipient);
  return {
    ...state,
    calling: true,
    onCall: false,
    recipient: {
      ...recipient,
      incoming: false,
      missed: false
    }
  };
}

function processCallRejected(state, errors) {
  return {
    ...state,
    onCall: false,
    calling: false,
    receivingCall: false,
    error: { statusCode: errors.code.status_code, message: errors.description }
  };
}

function processCallFailed(state, errors) {
  return {
    ...state,
    onCall: false,
    calling: false,
    error: { statusCode: errors.code.status_code, message: errors.description }
  };
}

function processCallMissed(state) {
  return {
    ...state,
    onCall: false,
    receivingCall: false,
    recipient: {
      ...state.recipient,
      missed: true
    }
  };
}

function processCallReceiving(state, action) {
  console.log(`Receiving call from`);
  console.log(action);
  return {
    ...state,
    onCall: false,
    receivingCall: true,
    recipient: {
      ...state.receipient,
      name: action.callerName,
      phoneNumber: action.callerNumber,
      missed: true,
      incoming: true
    }
  };
}

function acceptCall(state) {
  console.log(`Accept call`);
  return {
    ...state,
    onCall: true,
    calling: false,
    recipient: {
      ...state.recipient,
      startTime: Date.now(),
      missed: false
    }
  };
}

function processCallHangup(state) {
  return {
    ...state,
    onCall: false,
    calling: false
  };
}

function processCallAccepted(state) {
  return {
    ...state,
    onCall: true,
    calling: false,
    receivingCall: false
  };
}

const call = (state = initialState, action) => {
  switch (action.type) {
    case callActions.CALL:
      return processCall(state, action.recipient);
    case callActions.OUTGOING_CALL_ACCEPTED: {
      if (state.calling === true || state.receivingCall === true) {
        return processCallAccepted(state);
      }
      return state;
    }
    case callActions.CALL_REJECTED:
      return processCallRejected(state, action.errors);
    case callActions.CALL_FAILED:
      return processCallFailed(state, action.errors);
    case callActions.CALL_MISSED:
      return processCallMissed(state);
    case callActions.IS_RECEIVING_CALL:
      return processCallReceiving(state, action);
    case callActions.CALL_ACCEPTED:
      return acceptCall(state);
    case callActions.HANGUP_CALL:
      return processCallHangup(state);

    default:
      return state;
  }
};

export default call;
