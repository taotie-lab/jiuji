import React, { Component } from 'react'
import img1 from '../../img/公告.jpg'
import './action.css'
export default class Headline extends Component {
  render() {
    return (
      <div>
       <div className="one">
        <img src={img1} alt=""/>
        <div className="txt">
        <p>疫情期间九机售后运营公告</p>
        <dd>抗击疫情期间，为了减少病毒传播，九机会全力承担好社会责任，严格做好消毒以及各类防火措施，保障用户售后安全服务，众志成城战疫情</dd>
        <dd>查看详情</dd>
        <span>></span>
        </div>
        </div>
        <div className="one">
        <img src={img1} alt=""/>
        <div className="txt">
        <p>疫情期间九机售后运营公告</p>
        <dd>抗击疫情期间，为了减少病毒传播，九机会全力承担好社会责任，严格做好消毒以及各类防火措施，保障用户售后安全服务，众志成城战疫情</dd>
        <dd>查看详情</dd>
        <span>></span>
        </div>
        </div>
        <div className="one">
        <img src={img1} alt=""/>
        <div className="txt">
        <p>疫情期间九机售后运营公告</p>
        <dd>抗击疫情期间，为了减少病毒传播，九机会全力承担好社会责任，严格做好消毒以及各类防火措施，保障用户售后安全服务，众志成城战疫情</dd>
        <dd>查看详情</dd>
        <span>></span>
        </div>
        </div>
      </div>
    )
  }
}
