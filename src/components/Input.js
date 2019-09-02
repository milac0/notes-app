import React from 'react';
import './Input.css'

const Input = (props) => {
    return (
        <div className='field'>
            <form onSubmit={props.handleSubmit}>
                <label className="label has-text-white is-size-4">Title</label>
                <input className="input is-medium" type='text' name='title' placeholder='insert title' />
                <label className="label has-text-white is-size-4">Description</label>
                <input className="input is-medium" type='text' name='description' placeholder='insert description' />
                <div className='has-text-centered'>
                    <button className='button is-large is-outlined align-right'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default Input;

