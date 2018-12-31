import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    receiveEntries: ['entries'],
    addEntry: ['entry']
})
export default Creators
