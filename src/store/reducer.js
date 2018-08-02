import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO} from "./actions";

const initialState = {
    todos: []
};

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const max_id = Math.max(...state.todos.map(todo => todo.id)),
                id = max_id >= 0 ? max_id + 1 : 0,
                todos = [...state.todos, {id, text: action.text, completed: false}];
            return {todos};
        }
        case EDIT_TODO: {
            const oldTodo = state.todos.find(todo => todo.id === action.id);
            if (!oldTodo) {
                return state;
            } else {
                const newTodo = {...oldTodo, text: action.text},
                    todos = state.todos.map(todo => todo.id === action.id ? newTodo : todo);
                return {todos}
            }
        }
        case DELETE_TODO: {
            const todos = state.todos.filter(todo => todo.id !== action.id);
            return {todos}
        }
        case TOGGLE_TODO: {
            const todos = state.todos.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            });
            return {todos}
        }
        default: {
            return state;
        }
    }
}
