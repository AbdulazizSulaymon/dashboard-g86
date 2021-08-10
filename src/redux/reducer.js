import initialState from "./initialState";
import { SET_TODOS } from "./types";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: return { ...state, todos: action.payload };

        default: return state;
    }
}

export default reducer;