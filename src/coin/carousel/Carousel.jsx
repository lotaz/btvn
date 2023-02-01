import React, { Component } from 'react'
import './Carousel.scss'
export default class Carousel extends Component {
    render() {
        return (
            <div className='carousel'>
                <div className='carousel-header'>
                <img className='carousel-image' src='https://vtcoder-html6.surge.sh/img/logo.png' />
                <div className='carousel-option'>
                    <a className='carousel-option-home'>Home</a>
                    <a>About</a>
                    <a>Buy Tokens</a>
                    <a>FAQ</a>
                    <a>Contact</a>
                </div>
                <div className='carousel-login'>
                    <a className='carousel-login-join'>Login</a>
                    <a>Sign up</a>
                </div>
                </div>
               
                <div className='carousel-lorem'>
                    <h1>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cup <br /> datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div className='carousel-lorem-choose'>
                        <a href="" className='carousel-lorem-choose-a'>Buy Token</a>
                        <a href="" className='carousel-lorem-choose-b'>White Paper</a>
                    </div>
                </div>
            </div>
        )
    }
}
