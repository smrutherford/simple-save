/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_ENTRIES, LOAD_ENTRIES_SUCCESS, LOAD_ENTRIES_ERROR, SAVE_ENTRY } from './constants';

/**
 * Load the entries, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ENTRIES
 */
export function loadEntries() {
  return {
    type: LOAD_ENTRIES,
  };
}

/**
 * Dispatched when the entries are loaded by the request saga
 *
 * @param  {array} entries The saved entries
 *
 * @return {object}      An action object with a type of LOAD_ENTRIES_SUCCESS passing the entries
 */
export function entriesLoaded(entries) {
  return {
    type: LOAD_ENTRIES_SUCCESS,
    entries,
  };
}

/**
 * Dispatched when loading the entries fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ENTRIES_ERROR passing the error
 */
export function entriesLoadingError(error) {
  return {
    type: LOAD_ENTRIES_ERROR,
    error,
  };
}

/**
 * Dispatched when saving a new enry
 *
 * @param  {object} entry The entry
 *
 * @return {object}       An action object with a type of LOAD_ENTRIES_ERROR passing the entry
 */

export function saveEntry(entry) {
  return {
    type: SAVE_ENTRY,
    entry,
  };
}
