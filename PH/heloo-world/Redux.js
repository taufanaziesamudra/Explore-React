const redux = require ("redux")
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 17
}
// Reducer
/* Reducer adalah suatu fungsi dimana store ini adalah sebuah value,
yang mana hanya reducer yang dapat mengupdate store. Sehingga tidak ada fungsi lain selain reducer. */
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    /* if(action.type === "ADD_AGE"){
        return {
            ...state,
            age: state.age + 1
        }
    }
    if(action.type === "ADD_ChANGE"){
        return {
            ...state,
            value: state.value + action.newValue
        }
    }
    return state; */
    switch(action.type){
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }
        case 'ADD_CHANGE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state
    }
}
// Store
/* Store adalah sebuiah wadah besar untuk penyimpanan value atau menyimpan state secara global. */
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription
/* Subcription adalah proses pemanggilan yang diperlukan. */
store.subscribe(() => {
    console.log('store change: ', store.getState())
})

// Dispatching Action
/* Dispatching action adalah proses pemanggilan sebuah intrusi yang disediakan oleh reducer. */
store.dispatch({type: "ADD_AGE"})
store.dispatch({type: "ADD_CHANGE", newValue: 12})
console.log(store.getState())