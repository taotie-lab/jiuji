import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {img26,img25,img24,img23} from '../../img/importimg'
import './ours.css'
export default class Ours extends Component {
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
          <TabBar.Item
            title="我的投诉"
            key="Life"
            icon={<div><img src={img23} alt=""/></div>}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img24} alt=""/></div>}
            title="我的提问"
            key="Koubei"      
          >
          </TabBar.Item>
          <TabBar.Item
           icon={<div><img src={img25} alt=""/></div>}
            title="联系客服"
            key="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
            title="帮助中心"
            key="Life"
            icon={<div><img src={img26} alt=""/></div>}
          >
          </TabBar.Item>
          </TabBar>
      </div>
    )
  }
}
