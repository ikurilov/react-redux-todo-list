export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "ADD_EDIT_TODO";
export const DELETE_TODO = "ADD_DELETE_TODO";
export const TOGGLE_TODO = "ADD_TOGGLE_TODO";

export function addTodo(text) {
    return {type: ADD_TODO, text}
}

export function editTodo(id, text) {
    return {type: EDIT_TODO, id, text}
}

export function deleteTodo(id) {
    return {type: DELETE_TODO, id}
}

export function toggleTodo(id) {
    return {type: TOGGLE_TODO, id}
}