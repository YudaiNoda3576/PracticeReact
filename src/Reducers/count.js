import {INCREMENT, DECREMENT} from "../Actions/"

const initialState = {value: 0}

export default(state = initialState, action) => {
    switch(action.type){
        case INCREMENT: 
            return {value: state.value + 1}
        break;
        case DECREMENT:
            return {alue: state.value - 1}
        break;
        default: 
            return state;
        
    }
}