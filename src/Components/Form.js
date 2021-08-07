import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {

//Set an event handler for the text input.
const inputTextHandler = (event) => {
    setInputText(event.target.value);
}

//Set an event handler for submit todo.
const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
        ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
    ]);
    setInputText('');
}
//Render form.
    return(
        <>
            <form onSubmit={submitTodoHandler}>
                <input className="todo-input" type="text" value={inputText} onChange={inputTextHandler} placeholder="Eentr a task" />
                <button className="todo-btn">Enter</button>
            </form>
        </>
    );
}

export default Form;