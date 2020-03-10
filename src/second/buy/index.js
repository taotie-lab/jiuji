import React,{Component} from 'react'
import {list,img7,img8} from '../../img/importimg/buy.js'
import './index.css'
class Buy extends Component{
  render(){
    return (
      <div className='buy'>
       <div className="top">
       <span className="span1">
        购物车<span>(0)</span>
       </span>
        <span className="span2">
          <span>管理</span>
          <img src={img7} alt=""/>
        </span>
       </div>
        <div className="goods">
          <div className="one">
            <span>购物车里什么都没有，快去买点什么吧~</span>
            <div className="rad">去逛逛</div>
          </div>
          <div className="two"></div>
        </div>
        <div className="lists">      
       {
         list.map((item,index)=>{
           return <div className="list" key={index}>
           <img src={item.img} alt=""/>
           <dd>{item.txt}</dd>
           </div>
         })
       }
        </div>
      </div>
    )
  }
}
export default Buy