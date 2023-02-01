import React, { Component } from 'react'
import './Icon.scss'
export default class Icon extends Component {
    render() {
        const isArray = Array.from(Array(8).keys())
        const renderHtml = () => {
            if (isArray) {
                return isArray.map((index) => {
                    return (
                        <div key={index} className='icon-list'>
                            <div className='icon-all'>
                                <img src="https://vtcoder-html6.surge.sh/img/icoin.png" alt="" />
                                <div className='lite-coin'>
                                <h2>Lite Coin</h2>
                                <div  className='icon-star'>
                                <p><span className='star'>★★★★★ </span> 1000 view</p>
                                <p><span>30.5%</span> - 28 days left</p>
                                <p className='star-script'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit</p>
                                </div>
                                </div>
                                <p className='icon-script'> ❀◕ ‿ ◕❀ </p>
                            </div>
                        </div>
                    )
                })
            }
        }
        return (
            <div className='icon'>
                {renderHtml()}
            </div>
        )
    }
}
