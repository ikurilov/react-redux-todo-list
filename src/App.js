import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoListContainer} from "./todo-list-container";
import Provider from "react-redux/es/components/Provider";
import {todoStore} from "./store/store";
import {addTodo} from "./store/actions";

class App extends Component {
    componentDidMount() {
        todoStore.dispatch(addTodo('1'));
        todoStore.dispatch(addTodo('2'));
        todoStore.dispatch(addTodo('3'));
        todoStore.dispatch(addTodo('4'));

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Provider store={todoStore}>
                    <TodoListContainer/>
                </Provider>
            </div>
        );
    }
}

export default App;
