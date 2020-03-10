import './index.css'
import React from 'react'
import { WingBlank, WhiteSpace  } from 'antd-mobile';
import Mys from './my'
import Onther from './onther'
import Tool from './tool'
import Ours from './ours'
import {img27} from '../../img/importimg'
import {getData} from '../../api/request'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
  <div className="top">
      <span>
        我的订单
      </span>
      <span>
        全部订单>
      </span>
    </div>
    <Mys></Mys>
  </div>
);
const PlaceHol = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    <div className="top">
        <span>
          其他订单
        </span>
      </div>
    <Onther></Onther>
  </div>
)
const PlaceHold = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
 <div className="top">
      <span>
        工具与服务
      </span>
      <span>
        更多>
      </span>
    </div>
  <Tool></Tool>
  </div>
)
const PlaceHolde = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
  <div className="top">
    <span>
      联系我们
    </span>
    </div>
  <Ours></Ours>
  </div>
)
class My extends React.Component{
  componentDidMount(){
    this.getDa()
  }
  getDa(){
    getData().then((res)=>{
      console.log(res)
    })
  }
  render(){
    return(
      <div className='my-box'>
       <div className="my-top">
        <div className="img27-box">
          <dd>设置</dd> 
          <img src={img27} alt="" className="img27"/>
         <div className="s1">
            <span >登陆</span>
            <span style={{margin:'0 10px 0 10px'}}>|</span>
            <span>注册</span>
         </div>
         <div className="s2box">
            <span className='s2'>
              <span>0</span>
              <p>收藏商品</p>
            </span>
            <span className='s2'>
              <span>0</span>
              <p>浏览记录</p>
            </span>
            <span className='s2'>
              <span>0</span>
              <p>优惠券</p>
            </span>
            <span className='s2'>
              <span>0</span>
              <p>积分</p>
            </span>
         </div>
          
        </div>
       </div>
       <div className="my-buy bo">
         <WingBlank size="md"><PlaceHolder /></WingBlank>
       </div>
       <div className="my-onther bo">
       <WingBlank size="md"><PlaceHol /></WingBlank>
       </div>
       <div className="my-tool bo">       
       <WingBlank size="md"><PlaceHold /></WingBlank>
       </div>
       <div className="my-touch " >    
       <WingBlank size="md"><PlaceHolde /></WingBlank>
       </div>
      </div>
    )
  }
}
export default My