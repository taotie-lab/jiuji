import React from 'react'
import './index.css'
import { Icon,Tabs, WhiteSpace, Badge} from 'antd-mobile';
import One from '../../third/phone/one'
import Two from '../../third/phone/two'
const tabs = [
  { title: <Badge >手机通讯</Badge> ,path:'/home/classify/one'},
  { title: <Badge >手机配件</Badge>,path:'/home/classify/two' }
];
class Classify extends React.Component{
  constructor(props){
    super(props)
  }
 
  render(){
    return (
      <div className='classify'>
        <div className="classify-top">
        <span><Icon type='left' /></span>
        
        <input type="text" disabled='disabled' placeholder='搜索商品'/>
        <span>...</span>
        </div>
        <div>
          <Tabs tabs={tabs}
          tabBarPosition='left'
      initialPage={0}
      onTabClick={(tab, index) => { this.props.history.push(tab.path) }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        <One></One>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        <Two></Two>
      </div>
    </Tabs>
    <WhiteSpace />

    <WhiteSpace />
        </div>
      </div>
    )
  }
}
export default Classify