import React, { Component } from 'react'
import {img8,listtwo} from '../../img/importimg/classtwo'
import './two.css'
export default class Two extends Component {
  render() {
    return (
      <div className='two'>
        <img src={img8} alt="" className='img2'/>
        <div className="listtwo">
        <div className="spantwo">
        <span>热门品牌</span>
        <span>排行榜></span>
        </div>       
        {
          listtwo.map((item,index)=>{
            return <div className='imgstwo' key={index}>
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
