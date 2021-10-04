import {INCREMENT, DECREMENT} from "../Actions/"

const initialState = {value: 0}

export default(state = initialState, action) => {
    switch(action.type){
        case INCREMEMT: 
            return {value: state.value + 1};
        case DECREMENT:
            return {alue: state.value - 1}
    }
}