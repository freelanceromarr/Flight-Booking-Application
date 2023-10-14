const { BOOKFLIGHTS, REMOVEBOOKFLIGHTS } = require("./actionTypes")

const initialState ={
    value: []
}
const bookingReducer = (state= initialState, action)=> {
    switch (action.type) {
        case BOOKFLIGHTS:
            return {
                ...state,
                value: [...state.value, action.payload.value]
            }
        case REMOVEBOOKFLIGHTS :
            return {
                ...state,
                value: action.payload.value
            }
        default:
            return state;
} 
}

export default bookingReducer;