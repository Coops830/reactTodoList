import React from 'react';

const Todos = ({text}) => {
    return(
        <div className="list-container">
            <div className="todo-list">
                <ul>
                    <li>{text}</li>
                </ul>
            </div>  
            <div className="done-del">
                <ul>
                    <li></li>
                </ul>
            </div>  
        </div>
    );
}

export default Todos;