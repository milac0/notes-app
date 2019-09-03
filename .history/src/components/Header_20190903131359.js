import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='level'>
                  <div className='level-left has-text-centered'>
                    <a className='title has-text-white'>Notes App</a>
                </div>
                <div className='level-right has-text-centered'>
                    <a className='button'>Login</a>
                    <div className='level-item has-text-centered'>
                    <a className='button'>gin</a>
                </div>
                </div>

            </div>
        )
    }
}

export default Header;