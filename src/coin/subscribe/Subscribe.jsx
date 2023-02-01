import React, { Component } from 'react'
import './Subscribe.scss'
export default class Subscribe extends Component {
    render() {
        return (
            <div className='sub'>
                <div className='sub-script'>
                    <h2>Subscribe to our newsletter</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='sub-input'>
                    <input type="text" class="sub-search" placeholder="Enter your email" />
                    <button class="sub-icon">F</button>
                </div>
            </div>
        )
    }
}
