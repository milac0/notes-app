import React from 'react';
import Item from './Item'

const ItemList = (props) => {
    return (
        <ol>
            {props.notes.map((note, i) => 
            <Item 
            note={note}
            key={i} 
            handleDelete={()=>props.handleDelete(note.id)}/>
            )}
        </ol>
    );
};


export default ItemList;