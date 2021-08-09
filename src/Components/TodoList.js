import React from 'react';
import Todos from './Todos';

const TodoList = ({todos, setTodos}) => {
    return(
        <>
        <p className="completed-count">0 tasks of {todos.length} completed</p>
            <ol>
                {todos.map(todo => (
                    <Todos text={todo.text} />
                ))}
            </ol>
        </>
    );
}

export default TodoList;