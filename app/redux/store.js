
import { createStore, applyMiddleware }  from "redux"
import bookingReducer from "./booking/bookingReducer"

// middlewate to limit flight Listing @using curried function

const limitListing = (store) =>(next)=>(action)=>{
    const stateCurrentValue = store.getState()
    if (stateCurrentValue && stateCurrentValue.value.length >2 ) {
        console.log("more than 3 listing ");
    }else{
        next(action)
    }

}

const store = createStore(bookingReducer, applyMiddleware(limitListing))

export default store ;