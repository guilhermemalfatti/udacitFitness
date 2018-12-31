import { createReducer } from 'reduxsauce'
import { Types } from '../actions/actionCreators'

const INITIAL_STATE = {}


/**
 * Method responsible for return the new state when add a new entry
 * @param {*} state The current state
 * @param {*} action The action
 */
const addEntry = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        ...action.entry,
    }
}

/**
 * Method responsible for return the new state when retrive the entries
 * @param {*} state The current state
 * @param {*} action The action
 */
const receiveEntries = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        ...action.entries,
    }
}

const HANDLERS = {
    [Types.RECEIVE_ENTRIES]: receiveEntries,
    [Types.ADD_ENTRY]: addEntry

}

export default createReducer(INITIAL_STATE, HANDLERS)
