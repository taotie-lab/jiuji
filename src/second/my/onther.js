import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {img6,img7,img8,img9,img10,img11,img12,img13} from '../../img/importimg'
import './onther.css'
export default class Onther extends Component {
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
          <TabBar.Item
            title="良品订单"
            key="Life"
           icon={<div><img src={img6} alt=""/></div>}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img7} alt=""/></div>}
            title="租机订单"
            key="Koubei"      
          >
          </TabBar.Item>
          <TabBar.Item
           icon={<div><img src={img8} alt=""/></div>}
            title="回收订单"
            key="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
            title="维修订单"
            key="Life"
           icon={<div><img src={img9} alt=""/></div>}
          >
          </TabBar.Item>

          </TabBar>


          <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
          
          <TabBar.Item
      icon={<div><img src={img10} alt=""/></div>}
            title="维修预约单"
            key="Koubei"      
          >
          </TabBar.Item>
          <TabBar.Item
           icon={<div><img src={img11} alt=""/></div>}
            title="我的预约"
            key="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img12} alt=""/></div>}
            title="我的抢购"
            key="my"
          >
          </TabBar.Item>
          <TabBar.Item
            title="我的拼团"
            key="Life"
           icon={<div><img src={img13} alt=""/></div>}
          >
          </TabBar.Item>
          </TabBar>
      </div>
    )
  }
}
