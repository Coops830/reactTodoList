import React from 'react';

const Todos = ({text}) => {
    return(
        <>
            <ul>
                <li>{text}</li>
            </ul>
        </>
    );
}

export default Todos;