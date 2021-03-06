export const CALL = "@@call/CALL";
export const IS_CALLING = "@@call/IS_CALLING";
export const CALL_REJECTED = "@@call/CALL_REJECTED";
export const CALL_FAILED = "@@call/CALL_FAILED";
export const CALL_MISSED = "@@call/CALL_MISSED";
export const IS_RECEIVING_CALL = "@@call/IS_RECEIVING_CALL";
export const HANGUP_CALL = "@@call/HANGUP_CALL";
export const CALL_ACCEPTED = "@@call/CALL_ACCEPTED";

/**
 * Action that triggers a call to a selected recipient
 *
 * @param recipient A dict with name, phone number and start time of the call
 * @returns {{type: string, recipient: *}} A dict
 */
export function makeCall(recipient) {
  return {
    type: CALL,
    recipient
  };
}

/**
 * Action triggered when a call is taking place.
 *
 * @returns {{type: string}} A dict
 */
export function setIsCalling(calling) {
  return {
    type: IS_CALLING,
    calling
  };
}

/**
 * Action triggered when a call is being received
 *
 * @returns {{type: string}} A dict
 */
export function isReceivingCall(callerNumber, callerName) {
  return {
    type: IS_RECEIVING_CALL,
    callerNumber,
    callerName
  };
}

/**
 * Action triggered when a call is accepted
 *
 * @returns {{type: string}} A dict
 */
export function acceptCall() {
  return {
    type: CALL_ACCEPTED
  };
}

/**
 * Action triggered when a call is rejected
 * @returns {{type: string}} A dict
 */
export function rejectCall(errors = { code: { status_code: 0 } }) {
  return {
    type: CALL_REJECTED,
    errors
  };
}

/**
 * Action triggered when a call is rejected
 * @returns {{type: string}} A dict
 */
export function callFailed(errors = { code: { status_code: 0 } }) {
  return {
    type: CALL_FAILED,
    errors
  };
}

/**
 * Action triggered when a call is not taken
 * @returns {{type: string}} A dict
 */
export function setCallMissed() {
  return {
    type: CALL_MISSED
  };
}

/**
 * Action triggered when a call is hung up
 * @returns {{type: string}} A dict
 */
export function hangupCall() {
  return {
    type: HANGUP_CALL
  };
}
