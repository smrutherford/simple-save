/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_ENTRY, SUBMIT_ENTRY } from './constants';

// The initial state of the App
export const initialState = fromJS({
  entry: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ENTRY:
      return state.set('entry', action.entry);
    case SUBMIT_ENTRY:
      return state.set('entry', initialState);
    default:
      return state;
  }
}

export default homeReducer;
