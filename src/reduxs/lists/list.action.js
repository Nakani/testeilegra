import { requisitions } from '../../services/requisitions'

export const getLists = async (dispatch) => {
    dispatch({ type: 'FETCH_LISTS_REQUEST', payload: true })
    const lists = await requisitions.getLists()
    if (lists) {
        dispatch({ type: 'FETCH_LISTS_SUCCESS', payload: { lists } })
    } else {
        dispatch({ type: 'FETCH_LISTS_FAIL', payload: false })
    }
}