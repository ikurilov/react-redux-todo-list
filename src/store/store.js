import {todosReducer} from "./reducer";
import {createStore} from "redux";


export const todoStore = createStore(todosReducer);


//console.log(store.getState());


/*

store.dispatch(addTodo('hello world))))'));
store.dispatch(addTodo('text'));
store.dispatch(addTodo('asdfasdfsd'));
store.dispatch(editTodo(0, 'fuck you angular!'));

store.dispatch(deleteTodo(1));
store.dispatch(deleteTodo(2));

store.dispatch(toggleTodo(0));

unsubscribe();*/