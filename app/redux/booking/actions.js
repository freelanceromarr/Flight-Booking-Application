import { BOOKFLIGHTS, REMOVEBOOKFLIGHTS } from "./actionTypes"

 export const bookFlight = (value)=>{
    return {
        type: BOOKFLIGHTS,
        payload: 
        {
            value: value
        }
    }
}
export const removeBookFlight = (value)=>{
    return {
        type: REMOVEBOOKFLIGHTS,
        payload: 
        {
            value: value
        }
    }
}