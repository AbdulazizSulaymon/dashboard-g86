import { getTodos } from "../api"
import { SET_TODOS } from "./types";

export const setTodos = async (dispatch) => {
    const data = await getTodos();

    console.log(data);

    dispatch({ type: SET_TODOS, payload: data });
}