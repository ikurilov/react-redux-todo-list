import {TodoList} from "./todo-list/todo-list";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);