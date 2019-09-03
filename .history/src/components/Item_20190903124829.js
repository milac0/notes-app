import React from 'react';

const Item = (props) => {
    // const title = props.note.title.length <= 15 ? 
    //     props.note.title : `${props.note.title.slice(0,15)}...`
    // const subtitle = props.note.description.length <= 20 ? 
    // props.note.description : `${props.note.description.slice(0,25)}...`

    return (
        <article className="message is-dark">
                <div className='message-header'>
                    <p>{props.note.title}</p>
                    <button 
                        className="delete has-background-danger" 
                        aria-label="delete" 
                        onClick={props.handleDelete}>
                   </button>
                </div>
                <div className="message-body">
                    {props.note.description}
                </div>

        </article>
    );
};

export default Item;

