import React, { Component } from 'react'
import './Contact.scss'
export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <h1>CONTACT</h1>
                <span>Company Name</span>
                <div className='contact-list'>
                    <p> <span>-`ღ´</span> -123 sdasdasd, sadasddasd , USA</p>
                    <p> <span>ꙮ</span> +123456799</p>
                    <p><span>〄</span> info@asdadas.com</p>
                </div>
                <div className='contact-final'>
                        <p>Copyright © Crypto 2018. All rights reserved.</p>
                       <div className='contact-final-option'>
                       <p>Home</p>
                        <p>About</p>
                        <p>Buy Token</p>
                        <p>FAQ</p>
                       </div>
                        <div className='contact-final-icon'>
                                <p>☔</p>
                                <p>☔</p>
                                <p>☔</p>
                                <p>☔</p>
                                <p>☔</p>
                        </div>
                    </div>
            </div>
        )
    }
}
