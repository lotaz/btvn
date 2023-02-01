import React, { Component } from 'react'
import Carousel from './carousel/Carousel'
import Contact from './contact/Contact'
import Header from './header/Header'
import Icon from './iconProject/Icon'
import IconProject from './iconProject/IconProject'
import LoadMore from './loadMore/LoadMore'
import Subscribe from './subscribe/Subscribe'

export default class Coin extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <IconProject />
        <Icon />
        <LoadMore />
        <Subscribe />
        <Contact />
      </div>
    )
  }
}
