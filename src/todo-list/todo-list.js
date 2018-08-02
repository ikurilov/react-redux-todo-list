import {Component} from 'react';
import {Todo} from "../todo/todo";
import React from "react";


export class TodoList extends Component {
    render() {
        return this.props.todos.map(todo => <Todo todo={todo} key={todo.id}/>);
    }
}