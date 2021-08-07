import React from 'react';
import Todos from './Todos';

const TodoList = ({todos}) => {
    return(
        <>
            <ol>
                {todos.map(todo => (
                    <Todos text={todo.text} />
                ))}
            </ol>
        </>
    );
}

export default TodoList;