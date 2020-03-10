import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {img15,img16,img17,img18,img19,img20,img21,img22} from '../../img/importimg'
export default class Tool extends Component {
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
          <TabBar.Item
            title="电子保修卡"
            key="Life"
            icon={<div><img src={img15} alt=""/></div>}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img16} alt=""/></div>}
            title="我的贴膜"
            key="Koubei"      
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img17} alt=""/></div>}
            title="发票管理"
            key="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
            title="旧机回收"
            key="Life"
            icon={<div><img src={img18} alt=""/></div>}
          >
          </TabBar.Item>

          </TabBar>


          <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
          
          <TabBar.Item
            icon={<div><img src={img19} alt=""/></div>}
            title="一手优品"
            key="Koubei"      
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img20} alt=""/></div>}
            title="人气排行"
            key="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div><img src={img21} alt=""/></div>}
            title="试用中心"
            key="my"
          >
          </TabBar.Item>
          <TabBar.Item
            title="充值中心"
            key="Life"
            icon={<div><img src={img22} alt=""/></div>}
          >
          </TabBar.Item>
          </TabBar>
      </div>
    )
  }
}
