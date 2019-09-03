import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='level is-mobile'>
                <div className='level-left'>
                    <div className='level-item'>

                    </div>
                <div className='level-item has-text-centered'>
                    <a className='title has-text-white'>Notes App</a>
                    </div>
                </div>
                <div className='level-right'>
                    <div className='level-item has-text-centered'>
                        <a className='button'>Signin</a>
                    </div>
                    <div className='level-item has-text-centered'>
                        <a className='button'>Login</a>
                    </div>
                    <div className='level-item'>
                        
                        </div>
                </div>

            </div>
        )
    }
}

export default Header;