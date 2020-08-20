import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);   
    }  


    render(){    
        const todo= this.props.todoList;
        const listTodo = todo.map((todo, pos)=>(
        <li key={pos}>
            <Todo priority={todo.priority}
                    text={todo.text}
                    dueDate={todo.dueDate}
            />
        </li>
        ));
        return (
            <ul>{listTodo}</ul>
        );
    }
}