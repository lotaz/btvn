import React, { Component } from 'react';
import './Header.scss'
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-info'>
        <p>123 sdasdasd, sadasddasd , USA</p>
        <p>+1234567899</p>
        <p>info@asdadas.com</p>
        <p>thangdeptrai</p>
        </div>
        <div className='header-icon'>
            <p>💫</p>
            <p>💫</p>
            <p>💫</p>
            <p>💫</p>
            <p>💫</p>
        </div>
      </div>
    )
  }
}
