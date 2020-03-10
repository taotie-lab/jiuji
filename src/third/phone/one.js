import React, { Component } from 'react'
import {img1,list} from '../../img/importimg/classify'
import './one.css'
export default class One extends Component {
  render() {
    return (
      <div className='one'>
        <img src={img1} alt="" className='img1'/>
        <div className="list">
        <div className="span">
        <span>热门品牌</span>
        <span>排行榜></span>
        </div>       
        {
          list.map((item,index)=>{
            return <div className='imgs' key={index}>
              <img src={item.img} alt="" />
              <dd >{item.txt}</dd>
            </div>
          })
        }
        </div>
      </div>
    )
  }
}
