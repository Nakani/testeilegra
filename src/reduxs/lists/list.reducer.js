const INITIAL_STATE = {
    loaded: false,
    lists: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_LISTS_REQUEST': {
            return { ...state, loaded: action.payload }
        }
        case 'FETCH_LISTS_SUCCESS': {
            return { ...state, lists: action.payload.lists, loaded: false }
        }
        case 'FETCH_LISTS_FAIL': {
            return { ...state, lists: action.payload.lists, loaded: false }
        }
        default: {
            return state
        }
    }
}
