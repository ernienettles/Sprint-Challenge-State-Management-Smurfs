const initialState = {
    smurfs: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SMURF':
            return {
                ...state,
                smurfs: action.payload.data
            }
        case 'POST_SMURF':
            return {
                ...state,
                smurfs: action.payload.data
            }
        default:
            return state;
    }
}