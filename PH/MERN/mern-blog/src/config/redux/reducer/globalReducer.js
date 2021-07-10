const initialState = {
    name: 'Taufan'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Samudra'
        }
    }
    return state
}

export default globalReducer