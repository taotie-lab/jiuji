
import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {img2,img3,img4,img5} from '../../img/importimg'
import './my.css'
export default class Mys extends Component {
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
          <TabBar.Item
            title="待付款"
            key="Life"
            icon={ 
              <div><img src={img2} alt=""/></div>
            }
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div><img src={img3} alt=""/></div>
            }
            title="待收货"
            key="Koubei"      
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div><img src={img4} alt=""/></div>
            }
            title="待评价"
            key="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img5} alt=""/></div>}
            title="已完成"
            key="my"
          >
          </TabBar.Item>
          </TabBar>
      </div>
    )
  }
}

