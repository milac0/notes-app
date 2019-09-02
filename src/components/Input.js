import React from 'react';

const Input = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='title' placeholder='insert title' />
                <input type='text' name='description' placeholder='insert description' />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Input;