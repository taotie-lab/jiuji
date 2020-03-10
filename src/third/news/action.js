import React, { Component } from 'react'
import img1 from '../../img/口罩.webp'
import './action.css'
export default class Action extends Component {
  render() {
    return (
      <div>
        <div className="one">
        <img src={img1} alt=""/>
        <div className="txt">
        <p>一次性民用防护口罩补货啦！</p>
        <dd>限量抢购！全天不定时补货，外出口罩不离身，保护好自己。立即抢购</dd>
        <dd>查看详情</dd>
        <span>></span>
        </div>
        </div>
        <div className="one">
        <img src={img1} alt=""/>
        <div className="txt">
        <p>一次性民用防护口罩补货啦！</p>
        <dd>限量抢购！全天不定时补货，外出口罩不离身，保护好自己。立即抢购</dd>
        <dd>查看详情</dd>
        <span>></span>
        </div>
        </div>
        <div className="one">
        <img src={img1} alt=""/>
        <div className="txt">
        <p>一次性民用防护口罩补货啦！</p>
        <dd>限量抢购！全天不定时补货，外出口罩不离身，保护好自己。立即抢购</dd>
        <dd>查看详情</dd>
        <span>></span>
        </div>
        </div>
        
      </div>
    )
  }
}
