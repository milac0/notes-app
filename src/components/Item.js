import React from 'react';

const Item = (props) => {
    return (
        <li>
            <h3>{props.note.title}</h3>
            <p>{props.note.description}</p>
            <button onClick={props.handleDelete}>X</button>
        </li>
    );
};

export default Item;