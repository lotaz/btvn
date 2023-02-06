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
    const handleScroll = (e) => {
      const bottom = e.target.scrollTo;
      console.log(bottom)
  }
    return (
      <div onScroll={(e) => handleScroll(e)}>
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
