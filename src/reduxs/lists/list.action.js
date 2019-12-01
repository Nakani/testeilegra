import { requisitions } from '../../services/requisitions'

export const getLists = async (dispatch, id) => {
    dispatch({ type: 'FETCH_LISTS_REQUEST', payload: true })
    const lists = await requisitions.getLists(id)
    if (lists) {
        dispatch({ type: 'FETCH_LISTS_SUCCESS', payload: { lists } })
    } else {
        dispatch({ type: 'FETCH_LISTS_FAIL', payload: false })
    }
}