import React, {Component} from 'react';

export class Todo extends Component {
    render() {
        return <li>{this.props.todo.text}</li>
    }
}